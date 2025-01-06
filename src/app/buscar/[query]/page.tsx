'use client';
import { useState } from 'react';
import Card from '@/components/Card';
import { ItemInt } from '@/interfaces/item';
import Filters from '@/components/filters/Filters';
import { useParams } from 'next/navigation';

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
        <main className="min-h-screen pt-5">
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <div className="flex gap-8">
                    <Filters
                        results={results}
                        setResults={setResults}
                        setCurrentPage={setCurrentPage}
                    />

                    <div className="flex-1">
                        <p className='text-lg mb-2'>
                            {results.length} resultados para
                            <b> {query.replaceAll('-', ' ')}</b>
                        </p>

                        <div className="flex flex-wrap">
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
            </div>
        </main>
    );
}