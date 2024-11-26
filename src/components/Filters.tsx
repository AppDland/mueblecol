interface FiltersProps {
    onFilterChange: (filters: FilterOptions) => void;
    currentFilters: FilterOptions;
}

export interface FilterOptions {
    sort: string;
    minPrice?: number;
    maxPrice?: number;
    colors: string[];
    materials: string[];
}

// Mapeo de colores internos a nombres mostrados
const colorMap: { [key: string]: string } = {
    'white': 'Blanco',
    'black': 'Negro',
    'brown': 'Marrón',
    // Agrega aquí más colores según los que uses en tu JSON
};

// Lista de colores disponibles en el sistema
const availableColors = ['white', 'black', 'brown'];

const Filters: React.FC<FiltersProps> = ({ onFilterChange, currentFilters }) => {
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onFilterChange({ ...currentFilters, sort: e.target.value });
    };

    const handleColorToggle = (color: string) => {
        const newColors = currentFilters.colors.includes(color)
            ? currentFilters.colors.filter(c => c !== color)
            : [...currentFilters.colors, color];
        onFilterChange({ ...currentFilters, colors: newColors });
    };

    const handleMaterialToggle = (material: string) => {
        const newMaterials = currentFilters.materials.includes(material)
            ? currentFilters.materials.filter(m => m !== material)
            : [...currentFilters.materials, material];
        onFilterChange({ ...currentFilters, materials: newMaterials });
    };

    return (
        <div className="w-64 p-4 bg-white border rounded-lg">
            <div className="mb-6">
                <h3 className="font-bold mb-2">Ordenar</h3>
                <select 
                    className="w-full p-2 border rounded"
                    value={currentFilters.sort}
                    onChange={handleSortChange}
                >
                    <option value="destacados">Destacados</option>
                    <option value="precio-asc">Menor precio</option>
                    <option value="precio-desc">Mayor precio</option>
                </select>
            </div>

            <div className="mb-6">
                <h3 className="font-bold mb-2">Precio</h3>
                <div className="flex gap-2">
                    <input
                        type="number"
                        placeholder="Mínimo"
                        className="w-1/2 p-2 border rounded"
                        value={currentFilters.minPrice || ''}
                        onChange={(e) => onFilterChange({ 
                            ...currentFilters, 
                            minPrice: e.target.value ? Number(e.target.value) : undefined 
                        })}
                    />
                    <input
                        type="number"
                        placeholder="Máximo"
                        className="w-1/2 p-2 border rounded"
                        value={currentFilters.maxPrice || ''}
                        onChange={(e) => onFilterChange({ 
                            ...currentFilters, 
                            maxPrice: e.target.value ? Number(e.target.value) : undefined 
                        })}
                    />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-bold mb-2">Color</h3>
                <div className="space-y-2">
                    {availableColors.map(color => (
                        <label key={color} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={currentFilters.colors.includes(color)}
                                onChange={() => handleColorToggle(color)}
                                className="mr-2"
                            />
                            {colorMap[color]}
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-bold mb-2">Material</h3>
                <div className="space-y-2">
                    {['Madera', 'MDF', 'Melamina'].map(material => (
                        <label key={material} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={currentFilters.materials.includes(material.toLowerCase())}
                                onChange={() => handleMaterialToggle(material.toLowerCase())}
                                className="mr-2"
                            />
                            {material}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filters;
