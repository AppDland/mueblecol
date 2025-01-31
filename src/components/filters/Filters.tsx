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
import classNames from 'classnames';
import FilterIcon from '../FilterIcon';
import Items from '@/data/items.json';
import { FilterState } from '@/store';


interface FiltersProps {
    results: ItemInt[];
    setResults: React.Dispatch<React.SetStateAction<ItemInt[]>>;
    basedOn?: 'zone' | 'search';
    zone?: string;
    searchWord?: string;
    showRoomFilter?: boolean;
}

const Filters: React.FC<FiltersProps> = ({ results, setResults, zone, searchWord, basedOn = 'search', showRoomFilter = true }) => {

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
        const searchResults: ItemInt[] = [];
        if (basedOn === 'search' && searchWord) {
            searchResults.push(...searchItems(searchWord.replaceAll('-', ' ').toLowerCase()));
        } else if (basedOn === 'zone' && zone) {
            searchResults.push(...Items.items.filter(item => item.zones.map(zone => zone.toLowerCase()).includes(zone.toLowerCase())));
        }
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

    const { showFilters, closeFilters, toggleFilters } = FilterState();

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
                closeFilters();
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
                onClick={toggleFilters}
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
                    "w-4/5 max-w-96 md:w-60 lg:w-64 p-4 bg-white rounded-lg",
                    showFilters ? 'absolute top-14 right-3' : 'relative hidden md:block'
                )}
                style={{ zIndex: 41 }}
            >
                <SortFilter currentFilters={filters} onFilterChange={setFilters} />
                {showRoomFilter && <RoomFilter currentFilters={filters} onFilterChange={setFilters} />}
                <PriceFilter currentFilters={filters} onFilterChange={setFilters} />
                {/* <ColorFilter currentFilters={filters} onFilterChange={setFilters} /> */}
                {
                    materials.length > 0 && (
                        <MaterialFilter currentFilters={filters} onFilterChange={setFilters} materials={materials} />
                    )
                }
                <button
                    className='btn-primary w-full md:hidden'
                    onClick={closeFilters}
                >
                    Listo
                </button>
            </div>
            <div
                className={classNames(
                    'backdrop-custom z-40',
                    showFilters ? 'block md:hidden' : 'hidden'
                )}
                onClick={closeFilters}
            />
        </>
    );
};

export default Filters; 