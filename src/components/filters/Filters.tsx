import React from 'react';
import { FilterOptions } from '../../interfaces/filter';
import SortFilter from './SortFilter';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import MaterialFilter from './MaterialFilter';
import RoomFilter from './RoomFilter';

interface FiltersProps {
    onFilterChange: (filters: FilterOptions) => void;
    currentFilters: FilterOptions;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, currentFilters }) => {
    return (
        <div className="w-64 p-4 bg-white border rounded-lg">
            <SortFilter currentFilters={currentFilters} onFilterChange={onFilterChange} />
            <RoomFilter currentFilters={currentFilters} onFilterChange={onFilterChange} />
            <PriceFilter currentFilters={currentFilters} onFilterChange={onFilterChange} />
            <ColorFilter currentFilters={currentFilters} onFilterChange={onFilterChange} />
            <MaterialFilter currentFilters={currentFilters} onFilterChange={onFilterChange} />
        </div>
    );
};

export default Filters; 