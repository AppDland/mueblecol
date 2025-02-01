'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { ItemInt } from '@/interfaces/item';
import Card from '@/components/Card';
import classNames from 'classnames';
import Filters from '@/components/filters/Filters';
import { Pagination } from '@/components';
import { upperFirst } from '../../../../functions/upperFirst';



export default function Page() {
    const params = useParams();
    const zoneSlug = params.zone as string;
    const [results, setResults] = useState<ItemInt[]>([]);
    const [paginatedResults, setPaginatedResults] = useState<ItemInt[]>([]);

    return (
        <div>
            <h1 className="h1 text-center mb-4">{upperFirst(zoneSlug)}</h1>
            <div className='grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr] gap-3 w-full max-w-7xl place-self-center'>
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
                        basedOn='zone'
                        zone={zoneSlug as string}
                        showRoomFilter={false}
                    />
                </div>
                <p className={classNames(
                    'text-lg mb-2',
                    'col-span-3 md:col-span-2',
                    'row-span-1',
                    'order-1 md:order-none',
                )}
                >
                    mostrando {results.length} resultados para {zoneSlug}
                </p>
                <Pagination
                    results={results}
                    setPaginatedResults={setPaginatedResults}
                >
                    {
                        paginatedResults.map((item: ItemInt, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                    {
                        results.length === 0 && (
                            <p className="text-center text-gray-500 my-8">
                                No se encontraron resultados para tu búsqueda
                            </p>
                        )
                    }
                </Pagination>
            </div>
        </div>
    );
};