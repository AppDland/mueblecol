import React, { useEffect, useState } from 'react';
import Card from './Card';
import items from '@/data/items.json';
import { ItemInt } from '@/interfaces/item';

interface CategoryPageProps {
    category: string;
    onBackClick: () => void;
    backButtonText?: string;
    backButtonColor?: string;
    backButtonTextColor?: string;
    backButtonHoverColor?: string;
    backButtonHoverTextColor?: string;
    backButtonPadding?: string;
    backButtonRounded?: string;
    backButtonPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const CategoryPage: React.FC<CategoryPageProps> = ({
    category,
    // onBackClick,
    // backButtonText = '⬅️ Volver',
    // backButtonColor = 'bg-gray-800',
    // backButtonTextColor = 'text-white',
    // backButtonHoverColor = 'hover:bg-gray-700',
    // backButtonHoverTextColor = 'hover:text-white',
    // backButtonPadding = 'p-2',
    // backButtonRounded = 'rounded-full',
    // backButtonPosition = 'top-left',
}) => {
    const [filteredItems, setFilteredItems] = useState<ItemInt[]>([]);
    const [searchCount, setSearchCount] = useState(0);

    useEffect(() => {
        const fetchItems = () => {
            // const filteredItems = items.items.filter(item => item.category.toLowerCase() === category.toLowerCase());
            // setFilteredItems(filteredItems);
            setSearchCount(prevCount => prevCount + 1);
        };

        fetchItems();
    }, [category]);

    const positionClasses = {
        'top-left': 'top-4 left-4',
        'top-right': 'top-4 right-4',
        'bottom-left': 'bottom-4 left-4',
        'bottom-right': 'bottom-4 right-4',
    };

    return (
        <div className="relative flex flex-col h-screen">
            <div className="flex justify-center items-center mt-8">
                <h1 className="text-4xl font-bold">Relacionados A {category}</h1>
            </div>
            <div className="absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-36 w-full h-screen border border-black">
                <p className="absolute text-center -mt-10 right-10">Cantidad Encontrada:{searchCount}</p>
                {filteredItems.map((item) => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;