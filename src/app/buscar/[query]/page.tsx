'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Finder from '@/components/Finder';
import { ItemInt } from '@/interfaces/item';
import { searchItems } from '@/functions/search';
import Filters from '@/components/filters/Filters';
import { FilterOptions } from '@/interfaces/filter';

const ITEMS_PER_PAGE = 6;

export default function SearchResults() {
    const params = useParams();
    const query = params.query as string;
    const [results, setResults] = useState<ItemInt[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState<FilterOptions>({
        sort: 'destacados',
        colors: [],
        materials: [],
        zones: []
    });

    useEffect(() => {
        const searchResults = searchItems(query.replaceAll('-', ' '));
        let filteredResults = [...searchResults];

        // Aplicar filtros
        if (filters.minPrice) {
            filteredResults = filteredResults.filter(item => item.price >= filters.minPrice!);
        }
        if (filters.maxPrice) {
            filteredResults = filteredResults.filter(item => item.price <= filters.maxPrice!);
        }
        if (filters.colors.length > 0) {
            filteredResults = filteredResults.filter(item =>
                item.media.some(media =>
                    filters.colors.includes(media.colorName)
                )
            );
        }
        if (filters.materials.length > 0) {
            filteredResults = filteredResults.filter(item =>
                item.attributes.some(attr =>
                    attr.attributeId === 1 &&
                    filters.materials.includes(attr.value.toLowerCase())
                )
            );
        }
        if (filters.zones && filters.zones.length > 0) {
            filteredResults = filteredResults.filter(item =>
                item.zones.some(zone => filters.zones?.includes(zone))
            );
        }

        // Aplicar ordenamiento
        switch (filters.sort) {
            case 'precio-asc':
                filteredResults.sort((a, b) => a.price - b.price);
                break;
            case 'precio-desc':
                filteredResults.sort((a, b) => b.price - a.price);
                break;
            case 'oferta':
                filteredResults.sort((a, b) => (b.offer || b.price) - (a.offer || a.price));
                break;
        }

        setResults(filteredResults);
        setCurrentPage(1);
    }, [query, filters]);

    const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <main className="min-h-screen">
            <div className="flex flex-col relative w-full max-w-7xl mx-auto px-4">
                <div className="flex gap-8">
                    <Filters
                        onFilterChange={setFilters}
                        currentFilters={filters}
                    />

                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">
                            Resultados para: {query.replaceAll('-', ' ')}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {paginatedResults.map((item: ItemInt) => (
                                <Card item={item} key={item.id} />
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
                                        className={`px-4 py-2 rounded ${currentPage === page
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
                </div>
            </div>
        </main>
    );
}