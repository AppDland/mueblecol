export interface FilterOptions {
    rooms?: string[];
    minPrice?: number;
    maxPrice?: number;
    colors: string[];
    materials: string[];
    sort: string;
}

export interface FilterProps {
    currentFilters: FilterOptions;
    onFilterChange: (filters: FilterOptions) => void;
}

// Mapeo de colores internos a nombres mostrados
export const colorMap: { [key: string]: string } = {
    'white': 'Blanco',
    'black': 'Negro',
    'brown': 'Marrón',
};

export const availableColors = Object.keys(colorMap); 