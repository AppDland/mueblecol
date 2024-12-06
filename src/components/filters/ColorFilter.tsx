import React from 'react';
import { colorMap, FilterProps } from '../../interfaces/filter';
import ColorPicker from '../ColorPicker';
import { ItemMedia } from '@/interfaces/item';

const ColorFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    const colorOptions: ItemMedia[] = Object.entries(colorMap).map(([_, value], index) => ({
        id: index + 1,
        colorName: value.name,
        colorHex: value.hex,
        photos: [] // No necesitamos fotos para el filtro
    }));

    const handleColorSelect = (color: ItemMedia) => {
        const isSelected = currentFilters.colors.includes(color.colorName);
        const updatedColors = isSelected
            ? currentFilters.colors.filter(c => c !== color.colorName)
            : [...currentFilters.colors, color.colorName];
        
        onFilterChange({
            ...currentFilters,
            colors: updatedColors
        });
    };

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Colores</h3>
            <ColorPicker
                colors={colorOptions}
                onColorSelect={handleColorSelect}
                selectedColor={undefined}
            />
        </div>
    );
};

export default ColorFilter; 