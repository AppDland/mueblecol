'use client';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ItemInt } from '@/interfaces/item';
import Card from '@/components/Card';
import Items from '@/data/items.json';
import classNames from 'classnames';
import Filters from '@/components/filters/Filters';

const titles = [
    "Todo lo que necesitas para tu",
    "Encuentra el mueble ideal para tu",
    "Descubre los mejores muebles para tu",
    "Los mejores muebles para tu",
    "Encuentra los mejores muebles para tu"
]

const Zones = () => {
    const params = useParams();
    const { zone } = params;
    const [filteredItems, setFilteredItems] = useState<ItemInt[]>([]);
    const [customTitle, setCustomeTitle] = useState<string>('');
    const [results, setResults] = useState<ItemInt[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [pahinatedResults, setPaginatedResults] = useState<ItemInt[]>([]);

    useEffect(() => {

        if (zone && typeof zone === "string") {
            //obtengo los items que esten en la misma zona 
            const filteredItems = Items.items.filter(item => item.zones.map(zone => zone.toLowerCase()).includes(zone.toLowerCase()));
            setFilteredItems(filteredItems);
            if (zone === "exteriores") {
                setCustomeTitle("Muebles para Exteriores");
            } else {
                const randomTitle = titles[Math.floor(Math.random() * titles.length)];
                setCustomeTitle(randomTitle + " " + zone);
            }
        }
    }, [zone]);

    useEffect(() => {
        const calculateItemsPerPage = () => {
            if (containerRef.current && window.innerWidth > 639) {
                const containerWidth = containerRef.current.offsetWidth; // Ancho del contenedor
                const cols = Math.floor(containerWidth / 200); // Columnas visibles
                console.log(cols);
                setItemsPerPage(4 * cols); // Total de elementos por página
            } else {
                setItemsPerPage(10);
            }
        };

        calculateItemsPerPage(); // Calcular al cargar
        window.addEventListener('resize', calculateItemsPerPage); // Recalcular en cambios de resolución

        return () => {
            window.removeEventListener('resize', calculateItemsPerPage);
        };
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(results.length / itemsPerPage));
    }, [itemsPerPage, results]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        setPaginatedResults(results.slice(startIndex, startIndex + itemsPerPage));
    }, [currentPage, itemsPerPage, results])

    useEffect(() => {
        console.log(itemsPerPage);
    }, [itemsPerPage]);

    return (
        <div>
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">{customTitle}</h1>
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
                        setCurrentPage={setCurrentPage}
                        basedOn='zone'
                        zone={zone as string}
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
                    mostrando {results.length} resultados para ti
                </p>
                <div
                    ref={containerRef}
                    className={classNames(
                        "flex flex-nowrap sm:flex-wrap flex-col sm:flex-row sm:gap-2",
                        "col-span-4 md:col-span-2",
                        "row-span-1",
                        "order-3 md:order-none",
                    )}
                >
                    {
                        pahinatedResults.map((item: ItemInt, index) => (
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
                    {
                        totalPages > 1 && (
                            <div className="flex justify-center gap-2 my-8 w-full">
                                {
                                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => { setCurrentPage(page); document.body.scrollIntoView({ block: 'start', behavior: 'smooth' }) }}
                                            className={`px-4 py-2 rounded ${currentPage === page
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Zones;