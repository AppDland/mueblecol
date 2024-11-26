import React, { useEffect, useState } from 'react';
import Card, { ItemInt } from './Card';

interface CategoryPageProps {
    category: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
    const [items, setItems] = useState<ItemInt[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(`/api/items?category=${category}`);
            const data = await response.json();
            setItems(data);
        };

        fetchItems();
    }, [category]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Items for {category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <Card key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;