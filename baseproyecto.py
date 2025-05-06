import os
import json

def generar_estructura_proyecto():
    estructura = {
        "src": {},
        "public": {}
    }
    
    # Procesar directorio src
    src_path = os.path.join(os.getcwd(), 'src')
    for root, dirs, files in os.walk(src_path):
        relative_path = os.path.relpath(root, src_path)
        if relative_path == '.':
            continue
            
        current = estructura['src']
        parts = relative_path.split(os.sep)
        
        for part in parts[:-1]:
            if isinstance(current, dict):
                current = current.setdefault(part, {})
            else:
                current = {}
                
        if isinstance(current, dict):
            current[parts[-1]] = files if files else []

    # Procesar directorio public
    public_path = os.path.join(os.getcwd(), 'public')
    for root, dirs, files in os.walk(public_path):
        relative_path = os.path.relpath(root, public_path)
        if relative_path == '.':
            continue
            
        current = estructura['public']
        parts = relative_path.split(os.sep)
        
        for part in parts[:-1]:
            if isinstance(current, dict):
                current = current.setdefault(part, {})
            else:
                current = {}
                
        if isinstance(current, dict):
            current[parts[-1]] = files if files else []

    with open('estructura_proyecto.json', 'w', encoding='utf-8') as f:
        json.dump(estructura, f, indent=2)

def generar_configuracion_proyecto():
    archivos_config = [
        "components.json",
        "next.config.ts",
        "package.json",
        "postcss.config.mjs",
        "tailwind.config.ts",
        "tsconfig.json",
        "src/app/globals.css"
    ]
    
    with open('configuracion_proyecto.txt', 'w', encoding='utf-8') as f:
        for archivo in archivos_config:
            f.write(f"=== {archivo} ===\n")
            try:
                with open(archivo, 'r', encoding='utf-8') as arch:
                    f.write(arch.read())
            except Exception as e:
                f.write(f"No se pudo leer el archivo: {str(e)}\n")
            f.write("\n\n")

if __name__ == "__main__":
    generar_estructura_proyecto()
    generar_configuracion_proyecto()
    print("Archivos generados exitosamente: estructura_proyecto.json y configuracion_proyecto.txt")