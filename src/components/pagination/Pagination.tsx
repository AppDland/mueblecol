'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import classNames from "classnames";

import NProgress from 'nprogress';
import { useEffect } from 'react';
import 'nprogress/nprogress.css';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
});

const Pagination = ({ totalPages: totalPagesProp }: { totalPages: number }) => {
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', (pageNumber + 1).toString());
        return `?${params.toString()}`;
    };

    // Obtener la página actual de la URL (1-based) y convertirla a 0-based para el componente
    const currentPage = parseInt(searchParams.get('page') || '1') - 1;

    useEffect(() => {
        NProgress.done();
    }, [currentPage]);

    const handleClick = () => {
        NProgress.start();
    };

    return (
        totalPagesProp > 1 && (
            <div className={classNames(
                "flex justify-center gap-2 my-8 w-full",
            )}>
                {
                    Array.from({ length: totalPagesProp }, (_, i) => (
                        <Link
                            key={i}
                            href={createPageURL(i)}
                            onClick={handleClick}
                            className={`px-4 py-2 rounded ${currentPage === i ? "bg-primary text-white" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        >
                            {i + 1}
                        </Link>
                    ))
                }
            </div>
        )
    )
}

export { Pagination };