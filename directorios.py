import os

def generar_tree(directorio, nivel=0, archivo_salida=None):
    # Obtener nombre de la carpeta actual
    nombre_carpeta = os.path.basename(directorio)
    
    # Escribir estructura
    salida = []
    prefijo = "│   " * (nivel - 1) + "├── " if nivel > 0 else ""
    salida.append(f"{prefijo}{nombre_carpeta}/")
    
    # Listar contenido
    try:
        contenido = os.listdir(directorio)
    except PermissionError:
        salida.append(f"{prefijo}│   [Error: Permiso denegado]")
        return salida
    
    # Ordenar primero directorios luego archivos
    directorios = sorted([d for d in contenido if os.path.isdir(os.path.join(directorio, d))])
    archivos = sorted([f for f in contenido if os.path.isfile(os.path.join(directorio, f))])
    
    # Procesar subdirectorios
    for i, item in enumerate(directorios):
        path = os.path.join(directorio, item)
        es_ultimo = i == len(directorios) - 1 and not archivos
        prefijo_sub = "│   " * nivel + ("└── " if es_ultimo else "├── ")
        salida.extend(generar_tree(path, nivel + 1))
    
    # Procesar archivos
    for i, archivo in enumerate(archivos):
        es_ultimo = i == len(archivos) - 1
        prefijo_archivo = "│   " * nivel + ("└── " if es_ultimo else "├── ")
        salida.append(f"{prefijo_archivo}{archivo}")
    
    return salida

def guardar_estructura():
    directorios = [
        "c:/Users/Matias/Desktop/promptmatias.github.io/public",
        "c:/Users/Matias/Desktop/promptmatias.github.io/src"
    ]
    
    with open("estructura_directorios.txt", "w", encoding="utf-8") as f:
        for directorio in directorios:
            f.write(f"Estructura de: {directorio}\n")
            f.write("\n".join(generar_tree(directorio)))
            f.write("\n\n")

if __name__ == "__main__":
    guardar_estructura()
    print("Estructura de directorios guardada en estructura_directorios.txt")