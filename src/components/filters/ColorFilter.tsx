import React from 'react';
import { FilterProps, colorMap, availableColors } from './types';

const ColorFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    const handleColorToggle = (color: string) => {
        const newColors = currentFilters.colors.includes(color)
            ? currentFilters.colors.filter(c => c !== color)
            : [...currentFilters.colors, color];
        onFilterChange({ ...currentFilters, colors: newColors });
    };

    return (
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
    );
};

export default ColorFilter; 