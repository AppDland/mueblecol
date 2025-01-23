'use client';
import React, { useEffect, useRef, useState } from 'react';
import { FilterOptions } from '../../interfaces/filter';
import SortFilter from './SortFilter';
import PriceFilter from './PriceFilter';
// import ColorFilter from './ColorFilter';
import MaterialFilter from './MaterialFilter';
import RoomFilter from './RoomFilter';
import { searchItems } from '@/functions/search';
import { ItemInt } from '@/interfaces/item';
import { useParams } from 'next/navigation';
import useLargeScreen from '@/custom/useLargeScreen';
import classNames from 'classnames';
import FilterIcon from '../FilterIcon';


interface FiltersProps {
    results: ItemInt[];
    setResults: React.Dispatch<React.SetStateAction<ItemInt[]>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Filters: React.FC<FiltersProps> = ({ results, setResults, setCurrentPage }) => {

    const params = useParams();
    const query = params.query as string;

    const [filters, setFilters] = useState<FilterOptions>({
        sort: 'destacados',
        colors: [],
        materials: [],
        zones: []
    });

    const [materials, setMaterials] = useState<string[]>([]);

    useEffect(() => {
        const searchResults = searchItems(query.replaceAll('-', ' '));
        let filteredResults = [...searchResults];
        if (searchResults.length > 0) {
            // Aplicar filtros
            if (filters.minPrice) {
                filteredResults = filteredResults.filter(item => item.price >= filters.minPrice!);
            }
            if (filters.maxPrice) {
                filteredResults = filteredResults.filter(item => item.price <= filters.maxPrice!);
            }
            // if (filters.colors.length > 0) {
            //     filteredResults = filteredResults.filter(item =>
            //         item.media.some(media =>
            //             filters.colors.includes(media.colorName)
            //         )
            //     );
            // }
            if (filters.materials.length > 0) {
                filteredResults = filteredResults.filter(item =>
                    item.attributes && item.attributes.some(attr =>
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
        } else {
            setResults([]);
        }

    }, [query, filters]);

    useEffect(() => {
        if (results.length > 0 && filters.materials.length === 0) {
            setMaterials(
                results.reduce<string[]>((acc, item) => {
                    const material = item.attributes?.find(attr => attr.attributeId === 1)?.value;
                    if (material && !acc.includes(material)) {
                        acc.push(material);
                    }
                    return acc;
                }, [])
            );
        }
    }, [results, filters.materials]);

    const [showFilters, setShowFilters] = useState(false);

    const filterRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setShowFilters(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div
                ref={buttonRef}
                onClick={() => setShowFilters(!showFilters)}
                className={classNames(
                    'p-2 cursor-pointer mx-3',
                    'block md:hidden',
                )}
            >
                <FilterIcon />
            </div>
            <div
                ref={filterRef}
                className={classNames(
                    "w-56 lg:w-64 p-4 bg-white border rounded-lg z-10",
                    showFilters ? 'absolute top-14 right-3' : 'relative hidden md:block'
                )}
            >
                <SortFilter currentFilters={filters} onFilterChange={setFilters} />
                <RoomFilter currentFilters={filters} onFilterChange={setFilters} />
                <PriceFilter currentFilters={filters} onFilterChange={setFilters} />
                {/* <ColorFilter currentFilters={filters} onFilterChange={setFilters} /> */}
                {
                    materials.length > 0 && (
                        <MaterialFilter currentFilters={filters} onFilterChange={setFilters} materials={materials} />
                    )
                }
            </div>
        </>
    );
};

export default Filters; 