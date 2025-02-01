'use client';

import { PaginationState } from "@/store";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const PaginationContainer = ({ children }: { children: React.ReactNode[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { setTotalPages, currentPage } = PaginationState();
    const [containerHeigth, setContainerHeight] = useState(688);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const rows = 3;

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (containerRef.current) {
                // Obtener el número de columnas del grid
                const computedStyle = window.getComputedStyle(containerRef.current);
                const columnCount = computedStyle.getPropertyValue("grid-template-columns").split(" ").length;
                // setColumns(columnCount);
                setItemsPerPage(columnCount > 1 ? rows * columnCount : 10);

                // Obtener la altura de la primera fila (primer hijo de la fila)
                const firstRow = containerRef.current.querySelector("div:nth-child(1)");
                if (firstRow) {
                    const rowHeight = firstRow.getBoundingClientRect().height;
                    const gap = 8 * (columnCount - 1); // 8px de espacio entre columnas
                    console.log(rowHeight, gap);
                    setContainerHeight(rowHeight * (window.innerWidth < 640 ? 10 : rows) + gap); // Altura de dos filas
                }
            }
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect(); // Cleanup
    }, []);

    useEffect(() => {
        if (itemsPerPage > 0) {
            setTotalPages(Math.ceil(children.length / itemsPerPage));
        }
    }, [itemsPerPage, children]);

    return (
        <div
            className={classNames(
                "relative overflow-y-hidden",
                `h-[1610px] sm:h-[984px]`,
            )}
        >
            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] sm:gap-2"
                style={{ transform: `translateY(-${currentPage * containerHeigth}px)` }}
            >
                {
                    children.map((child, index) => (
                        <div key={index}>
                            {child}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { PaginationContainer };