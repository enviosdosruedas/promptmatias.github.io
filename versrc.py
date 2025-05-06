import os
import json

def escanear_directorio(ruta_base, excluir=None):
    estructura = {}
    
    for root, dirs, files in os.walk(ruta_base):
        # Obtener ruta relativa
        rel_path = os.path.relpath(root, ruta_base)
        if rel_path == '.':
            rel_path = ''
            
        # Filtrar archivos excluidos
        if excluir:
            files = [f for f in files if f not in excluir]
        
        # Procesar archivos y su contenido
        archivos_contenido = {}
        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    contenido = f.read()
                archivos_contenido[file] = contenido
            except UnicodeDecodeError:
                archivos_contenido[file] = "[Archivo binario - contenido no legible]"
            except Exception as e:
                archivos_contenido[file] = f"[Error al leer archivo: {str(e)}]"
        
        # Construir estructura
        partes = rel_path.split(os.sep) if rel_path else []
        actual = estructura
        
        for parte in partes:
            if parte not in actual:
                actual[parte] = {}
            actual = actual[parte]
        
        if archivos_contenido:
            actual['__archivos__'] = archivos_contenido
    
    return estructura

def generar_json_estructura(ruta_src, ruta_salida, excluir=None):
    estructura = escanear_directorio(ruta_src, excluir)
    
    with open(ruta_salida, 'w', encoding='utf-8') as f:
        json.dump(estructura, f, indent=2, ensure_ascii=False)
    
    return estructura

if __name__ == "__main__":
    # Configuración de rutas
    ruta_src = os.path.join(os.getcwd(), 'src')
    ruta_salida = os.path.join(os.getcwd(), 'estructura_src.json')
    
    # Archivos a excluir
    archivos_excluir = ['favicon.ico']
    
    # Generar estructura
    estructura = generar_json_estructura(ruta_src, ruta_salida, archivos_excluir)
    
    print(f"Estructura del directorio src generada en: {ruta_salida}")
    print("Resumen de la estructura:")
    print(json.dumps(estructura, indent=2))