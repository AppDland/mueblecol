'use client';
import { useState } from 'react';
import { ProductBaseProps } from '@/interfaces/item';
import Filters from '@/components/filters/Filters';
import { useParams } from 'next/navigation';
import { Card, Pagination } from '@/components';
import { PaginationContainer } from '@/components/pagination/PaginationContainer';


export default function SearchResults() {
    const params = useParams();
    const query = params.query as string;
    const [results, setResults] = useState<ProductBaseProps[]>([]);

    return (
        <div className='items-screen'>
            <div className={'items-screen-section-1'}>
                <Filters
                    results={results}
                    setResults={setResults}
                    basedOn='search'
                    searchWord={query}
                />
            </div>
            <p className='items-screen-section-2 text-lg mb-2 px-6 sm:px-0'>
                {results.length} resultados para
                <b> {query.replaceAll('-', ' ')}</b>
            </p>
            <div className="items-screen-section-3">
                <PaginationContainer>
                    {
                        results.map((item: ProductBaseProps, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </PaginationContainer>
                {
                    results.length === 0 && (
                        <p className="text-center text-gray-500 my-8">
                            No se encontraron resultados para tu búsqueda
                        </p>
                    )
                }
            </div>
            <div className='items-screen-section-4'>
                <Pagination />
            </div>
        </div>
    );
}