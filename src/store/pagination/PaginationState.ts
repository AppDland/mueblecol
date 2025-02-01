import { create } from "zustand";

interface PaginationStateProps {
    totalPages: number;
    setTotalPages: (pages: number) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const PaginationState = create<PaginationStateProps>((set) => ({
    totalPages: 0,
    currentPage: 0,

    setCurrentPage: (page: number) => {
        set({ currentPage: page });
    },

    setTotalPages: (pages: number) => {
        set({ totalPages: pages });
    },
}));

export { PaginationState };