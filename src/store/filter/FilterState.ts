import { create } from "zustand";

interface FilterStateProps {
    showFilters: boolean;
    openFilters: () => void;
    closeFilters: () => void;
    toggleFilters: () => void;
}

const FilterState = create<FilterStateProps>(set => ({
    showFilters: false,
    openFilters: () => set({ showFilters: true }),
    closeFilters: () => set({ showFilters: false }),
    toggleFilters: () => set(state => ({ showFilters: !state.showFilters }))
}));

export { FilterState };