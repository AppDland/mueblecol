import { create } from "zustand";

interface FilterStateProps {
    isOpen: boolean;
    animated: boolean;
    openFilters: () => void;
    closeFilters: () => void;
    toggleFilters: () => void;
}

const FilterState = create<FilterStateProps>((set, get) => ({
    isOpen: false,
    animated: false,

    openFilters: () => {
        set({ isOpen: true });

        setTimeout(() => {
            set({ animated: true });
        }, 1);
    },

    closeFilters: () => {
        set({ animated: false });

        setTimeout(() => {
            set({ isOpen: false });
        }, 300);
    },

    toggleFilters: () => {
        const { isOpen } = get(); // ✅ Obtiene el estado actual de manera segura

        if (isOpen) {
            set({ animated: false });
            setTimeout(() => set({ isOpen: false }), 300);
        } else {
            set({ isOpen: true });
            setTimeout(() => set({ animated: true }), 1);
        }
    }
}));

export { FilterState };