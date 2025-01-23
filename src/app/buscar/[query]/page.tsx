'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import { ItemInt } from '@/interfaces/item';
import Filters from '@/components/filters/Filters';
import { useParams } from 'next/navigation';
import classNames from 'classnames';

const ITEMS_PER_PAGE = 6;

export default function SearchResults() {
    const params = useParams();
    const query = params.query as string;
    const [results, setResults] = useState<ItemInt[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
    // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    // const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className='grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr] gap-3 max-w-7xl place-self-center'>
            <div
                className={classNames(
                    'col-span-1',
                    'row-span-1 md:row-span-2',
                    'order-2 md:order-none'
                )}
            >
                <Filters
                    results={results}
                    setResults={setResults}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <p className={classNames(
                'text-lg mb-2',
                'col-span-3 md:col-span-2',
                'row-span-1',
                'order-1 md:order-none',
            )}
            >
                {results.length} resultados para
                <b> {query.replaceAll('-', ' ')}</b>
            </p>
            <div className={classNames(
                "col-span-3 md:col-span-2",
                "row-span-1",
                "order-3 md:order-none",
            )}>
                <div className={classNames(
                    'flex flex-nowrap md:flex-wrap flex-col md:flex-row w-fit gap-2'
                )}>
                    {
                        results.map((item: ItemInt, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>

                {
                    results.length === 0 && (
                        <p className="text-center text-gray-500 my-8">
                            No se encontraron resultados para tu búsqueda
                        </p>
                    )
                }

                {/* {
                            totalPages > 1 && (
                                <div className="flex justify-center gap-2 my-8">
                                    {
                                        Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
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
                        } */}
            </div>
        </div>
    );
}