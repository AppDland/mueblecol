import React from 'react';
import { FilterProps } from './types';

const SortFilter: React.FC<FilterProps> = ({ currentFilters, onFilterChange }) => {
    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Ordenar</h3>
            <select 
                className="w-full p-2 border rounded"
                value={currentFilters.sort}
                onChange={(e) => onFilterChange({ ...currentFilters, sort: e.target.value })}
            >
                <option value="destacados">Destacados</option>
                <option value="precio-asc">Menor precio</option>
                <option value="precio-desc">Mayor precio</option>
            </select>
        </div>
    );
};

export default SortFilter; 