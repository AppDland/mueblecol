'use client';

import { PaginationState } from "@/store";
import classNames from "classnames";

const Pagination = () => {

    const { totalPages, setCurrentPage, currentPage } = PaginationState();

    return (
        totalPages > 1 && (
            <div className={classNames(
                "flex justify-center gap-2 my-8 w-full",
            )}>
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => { setCurrentPage(i); document.body.scrollIntoView({ block: 'start', behavior: 'smooth' }) }}
                            className={`px-4 py-2 rounded ${currentPage === i ? "bg-primary text-white" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))
                }
            </div>
        )
    )
}

export { Pagination };