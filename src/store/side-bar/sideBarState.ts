import { create } from 'zustand';

interface SideBarStateProps {
    isOpen: boolean;
    animated: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

const sideBarState = create<SideBarStateProps>((set, get) => ({
    isOpen: false,
    animated: false,

    open: () => {
        set({ isOpen: true });

        setTimeout(() => {
            set({ animated: true });
        }, 1);
    },

    close: () => {
        set({ animated: false });

        setTimeout(() => {
            set({ isOpen: false });
        }, 300);
    },

    toggle: () => {
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

export { sideBarState };
