import { Card, Pagination } from '@/components';
import { upperFirst } from '../../../../functions/upperFirst';
import { notFound } from 'next/navigation';
import { getProductsByZone } from '@/services/zones.service';
import classNames from 'classnames';
import Filters from '@/components/filters/Filters';
import { FilterProductsParams } from '@/interfaces/product';

export const dynamicParams = true;

interface Params {
    zone: string;
}

export default async function Page({
    params,
    searchParams
}: {
    params: Promise<Params>;
    searchParams: Promise<FilterProductsParams>;
}) {
    const { zone: zoneSlug } = await params;
    const page = (await searchParams).page || '1';
    const orderBy = (await searchParams).orderBy;
    const minPrice = (await searchParams).minPrice;
    const maxPrice = (await searchParams).maxPrice;


    const productsResponse = await getProductsByZone(zoneSlug, {
        limit: 10,
        page: parseInt(page),
        orderBy,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined
    });

    if (!productsResponse || productsResponse.data.length === 0) notFound();

    const { data: products, meta } = productsResponse;

    return (
        <div>
            <h1 className="h1 text-center mb-4">{upperFirst(zoneSlug)}</h1>
            <div className='items-screen'>
                <div className='items-screen-section-1'>
                    <Filters
                        // results={results}
                        // setResults={setResults}
                        // basedOn='zone'
                        // zone={zoneSlug as string}
                        showRoomFilter={false}
                    />
                </div>
                <p className='items-screen-section-2 text-lg mb-2'>
                    mostrando {meta.total} resultados para {zoneSlug}
                </p>
                <div className='items-screen-section-3'>
                    <div
                        className={classNames(
                            "relative overflow-y-hidden",
                        )}
                    >
                        <div
                            className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(190px,1fr))] sm:gap-2"
                        >
                            {
                                products.map((item, index) => (
                                    <Card item={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='items-screen-section-4'>
                    <Pagination totalPages={meta.finalPage} />
                </div>
            </div>
        </div>
    );
}