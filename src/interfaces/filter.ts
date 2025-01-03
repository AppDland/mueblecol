export interface FilterOptions {
    zones?: string[];
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

export interface FilterMaterialProps extends FilterProps {
    materials: string[];
}

// Mapeo de colores internos a nombres mostrados
export const colorMap: { [key: string]: { name: string, hex: string } } = {
    'Marrón': { name: 'Marrón', hex: '#8B4513' },
    'Blanco': { name: 'Blanco', hex: '#FFFFFF' },
};

export const availableColors = Object.keys(colorMap); 