'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Finder from '@/components/Finder';
import { ItemInt } from '@/components/Card';
import { searchItems } from '@/functions/search';

const ITEMS_PER_PAGE = 6;

export default function SearchResults() {
    const params = useParams();
    const query = params.query as string;
    const [results, setResults] = useState<ItemInt[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const searchResults = searchItems(query.replaceAll('-', ' '));
        setResults(searchResults);
        setCurrentPage(1);
    }, [query]);

    const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <main className="min-h-screen">
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <Finder defaultValue={query.replaceAll('-', ' ')} />

                <h2 className="text-2xl font-bold my-4">
                    Resultados para: {query.replaceAll('-', ' ')}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginatedResults.map((item: ItemInt, index: number) => (
                        <Card item={item} key={index} />
                    ))}
                </div>

                {results.length === 0 && (
                    <p className="text-center text-gray-500 my-8">
                        No se encontraron resultados para tu búsqueda
                    </p>
                )}

                {totalPages > 1 && (
                    <div className="flex justify-center gap-2 my-8">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded ${
                                    currentPage === page 
                                        ? 'bg-primary text-white' 
                                        : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
} 