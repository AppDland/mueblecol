'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ItemInt } from '@/interfaces/item';
import Filters from '@/components/filters/Filters';
import { Card, Pagination } from '@/components';
import { upperFirst } from '../../../../functions/upperFirst';
import { PaginationContainer } from '@/components/pagination/PaginationContainer';



export default function Page() {
    const params = useParams();
    const zoneSlug = params.zone as string;
    const [results, setResults] = useState<ItemInt[]>([]);

    return (
        <div>
            <h1 className="h1 text-center mb-4">{upperFirst(zoneSlug)}</h1>
            <div className='items-screen'>
                <div className='items-screen-section-1'>
                    <Filters
                        results={results}
                        setResults={setResults}
                        basedOn='zone'
                        zone={zoneSlug as string}
                        showRoomFilter={false}
                    />
                </div>
                <p className='items-screen-section-2 text-lg mb-2'>
                    mostrando {results.length} resultados para {zoneSlug}
                </p>
                <div className='items-screen-section-3'>
                    <PaginationContainer>
                        {
                            results.map((item: ItemInt, index) => (
                                <Card item={item} key={index} />
                            ))
                        }
                    </PaginationContainer>
                </div>
                <div className='items-screen-section-4'>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};