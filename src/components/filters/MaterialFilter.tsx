import React from 'react';
import { FilterMaterialProps } from '../../interfaces/filter';

const MaterialFilter: React.FC<FilterMaterialProps> = ({ currentFilters, onFilterChange, materials }) => {
    const handleMaterialToggle = (material: string) => {
        const newMaterials = currentFilters.materials.includes(material)
            ? currentFilters.materials.filter(m => m !== material)
            : [...currentFilters.materials, material];
        onFilterChange({ ...currentFilters, materials: newMaterials });
    };

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Material</h3>
            <div className="space-y-2">
                {
                    materials.map(material => (
                        <label key={material} className="flex items-center">
                            <input
                                type="checkbox"
                                checked={currentFilters.materials.includes(material.toLowerCase())}
                                onChange={() => handleMaterialToggle(material.toLowerCase())}
                                className="mr-2"
                            />
                            {material}
                        </label>
                    ))
                }
            </div>
        </div>
    );
};

export default MaterialFilter;