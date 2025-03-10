import { FilterProductsParams } from '@/interfaces/product';
import { Card, Pagination } from '@/components';
import { searchProducts } from '@/services/product.service';
import { notFound } from 'next/navigation';
import classNames from 'classnames';
import Filters from '@/components/filters/Filters';

interface Params {
    query: string;
}
interface SearchParams {
    params: Promise<Params>;
    searchParams: Promise<FilterProductsParams>;
}

export default async function SearchResults({ params, searchParams }: SearchParams) {
    const query = (await params).query;
    const searchParamsProp = (await searchParams);

    const { page, orderBy, minPrice, maxPrice } = searchParamsProp;

    const results = await searchProducts(query, {
        limit: 10,
        page: page ? parseInt(page) : 1,
        orderBy,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined
    });

    if (!results || results.data.length === 0) notFound();

    const { data: products, meta } = results;

    return (
        <div className='items-screen'>
            <div className={'items-screen-section-1'}>
                <Filters />
            </div>
            <p className='items-screen-section-2 text-lg mb-2 px-6 sm:px-0'>
                {meta.total} resultados para
                <b> {meta.query}</b>
            </p>
            <div className="items-screen-section-3">
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
                {/* {
                    results.length === 0 && (
                        <p className="text-center text-gray-500 my-8">
                            No se encontraron resultados para tu búsqueda
                        </p>
                    )
                } */}
            </div>
            <div className='items-screen-section-4'>
                <Pagination totalPages={meta.finalPage} />
            </div>
        </div>
    );
}