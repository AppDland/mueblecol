import React, { useEffect, useState } from 'react';
import Card, { ItemInt } from './Card';

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
    onBackClick,
    backButtonText = '⬅️ Volver',
    backButtonColor = 'bg-gray-800',
    backButtonTextColor = 'text-white',
    backButtonHoverColor = 'hover:bg-gray-700',
    backButtonHoverTextColor = 'hover:text-white',
    backButtonPadding = 'p-2',
    backButtonRounded = 'rounded-full', 
    backButtonPosition = 'top-left',
}) => {
    const [items, setItems] = useState<ItemInt[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`/api/items?category=${category}`);
            const data = await response.json();
            setItems(data);
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
        <div className="relative">
            <button
                onClick={onBackClick}
                className={`absolute ${positionClasses[backButtonPosition]} ${backButtonColor} ${backButtonTextColor} ${backButtonHoverColor} ${backButtonHoverTextColor} ${backButtonPadding} ${backButtonRounded}`}
                aria-label="Go back"
            >
                {backButtonText}
            </button>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Items for {category}</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;