import React from 'react';
import { FilterProps } from './types';

const PriceFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    const [localMin, setLocalMin] = React.useState(currentFilters.minPrice?.toString() || '');
    const [localMax, setLocalMax] = React.useState(currentFilters.maxPrice?.toString() || '');

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Precio</h3>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Mínimo"
                    className="w-1/2 p-2 border rounded"
                    value={localMin}
                    onChange={(e) => setLocalMin(e.target.value)}
                    onBlur={(e) => onFilterChange({ 
                        ...currentFilters, 
                        minPrice: e.target.value ? Number(e.target.value) : undefined 
                    })}
                />
                <input
                    type="number"
                    placeholder="Máximo"
                    className="w-1/2 p-2 border rounded"
                    value={localMax}
                    onChange={(e) => setLocalMax(e.target.value)}
                    onBlur={(e) => onFilterChange({ 
                        ...currentFilters, 
                        maxPrice: e.target.value ? Number(e.target.value) : undefined 
                    })}
                />
            </div>
        </div>
    );
};

export default PriceFilter; 