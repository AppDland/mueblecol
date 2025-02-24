'use client';
import { ItemInt } from '@/interfaces/item';
import { Card, Pagination } from '@/components';
import { upperFirst } from '../../../../functions/upperFirst';
import { PaginationContainer } from '@/components/pagination/PaginationContainer';
import { notFound } from 'next/navigation';
import { getProductsByZone } from '@/services/zones.service';
import Filters from '@/components/filters/Filters';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../loading';

export default function Page() {
    const params = useParams();
    const zoneSlug = params.zone;

    const [results, setResults] = useState<ItemInt[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    if (!zoneSlug || typeof zoneSlug !== 'string') notFound();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await fetch(`/api/products/zone/${zoneSlug}`);
                const products = await data.json();
                setResults(products);
                setLoading(false);
                // Si no hay productos, redirigimos a una página de error personalizada
                if (products.length === 0) {
                    setError(true);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }
        fetchProducts();
    }, [zoneSlug])

    if (error) {
        notFound();
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className="h1 text-center mb-4">{upperFirst(zoneSlug)}</h1>
            <div className='items-screen'>
                {/* <div className='items-screen-section-1'>
                        <Filters
                            results={results}
                            setResults={setResults}
                            basedOn='zone'
                            zone={zoneSlug as string}
                            showRoomFilter={false}
                        />
                    </div> */}
                <p className='items-screen-section-2 text-lg mb-2'>
                    mostrando {results.length} resultados para {zoneSlug}
                </p>
                <div className='items-screen-section-3'>
                    <PaginationContainer>
                        {
                            results.map((item, index) => (
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