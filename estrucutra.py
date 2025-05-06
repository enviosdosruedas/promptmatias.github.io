import json

def parse_directory_structure(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    structure = {}
    current_path = []
    
    for line in lines:
        line = line.strip()
        if not line or line.startswith("Estructura de:"):
            continue
            
        # Determinar nivel de indentación
        indent_level = line.count("│   ") + line.count("├── ") + line.count("└── ")
        
        # Obtener nombre del archivo/directorio
        name = line.split("── ")[-1].strip()
        
        # Actualizar current_path según el nivel de indentación
        current_path = current_path[:indent_level]
        
        # Determinar si es directorio o archivo
        if name.endswith('/'):
            # Es un directorio
            name = name[:-1]
            current_path.append(name)
            
            # Crear estructura anidada
            current = structure
            for part in current_path[:-1]:
                current = current.setdefault(part, {})
            current[current_path[-1]] = {}
        else:
            # Es un archivo
            current = structure
            for part in current_path:
                current = current.setdefault(part, {})
            # Agregar archivo al directorio actual
            if not isinstance(current, dict):
                current = {}
            current[name] = None  # Usamos None para indicar que es un archivo
    
    return structure

def save_structure_to_json(structure, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(structure, f, indent=2)

if __name__ == "__main__":
    input_file = "c:/Users/Matias/Desktop/promptmatias.github.io/estructura_directorios.txt"
    output_file = "c:/Users/Matias/Desktop/promptmatias.github.io/estructura_proyecto.json"
    
    structure = parse_directory_structure(input_file)
    save_structure_to_json(structure, output_file)
    print(f"Estructura del proyecto guardada en {output_file}")