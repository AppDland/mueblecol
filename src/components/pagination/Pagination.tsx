'use client';

import { ItemInt } from "@/interfaces/item";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface PaginationProps {
    children: React.ReactNode[];
    results: ItemInt[];
    setPaginatedResults: React.Dispatch<React.SetStateAction<ItemInt[]>>;
}
const Pagination = ({ children, results, setPaginatedResults }: PaginationProps) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(0);

    useEffect(() => {
        const calculateItemsPerPage = () => {
            if (containerRef.current && window.innerWidth > 639) {
                const containerWidth = containerRef.current.offsetWidth; // Ancho del contenedor
                const cols = Math.floor(containerWidth / 200); // Columnas visibles
                console.log(cols);
                setItemsPerPage(4 * cols); // Total de elementos por página
            } else {
                setItemsPerPage(10);
            }
        };

        calculateItemsPerPage(); // Calcular al cargar
        window.addEventListener('resize', calculateItemsPerPage); // Recalcular en cambios de resolución

        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    }, []);


    useEffect(() => {
        setTotalPages(Math.ceil(results.length / itemsPerPage));
    }, [itemsPerPage, results]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        setPaginatedResults(results.slice(startIndex, startIndex + itemsPerPage));
    }, [currentPage, itemsPerPage, results])

    return (
        <div
            ref={containerRef}
            className={classNames(
                "flex flex-nowrap sm:flex-wrap flex-col sm:flex-row sm:gap-2",
                "col-span-4 md:col-span-2",
                "row-span-1",
                "order-3 md:order-none",
            )}
        >
            {children}
            {
                totalPages > 1 && (
                    <div className="flex justify-center gap-2 my-8 w-full">
                        {
                            Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => { setCurrentPage(page); document.body.scrollIntoView({ block: 'start', behavior: 'smooth' }) }}
                                    className={`px-4 py-2 rounded ${currentPage === page
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export { Pagination };