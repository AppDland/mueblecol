import React from 'react';

interface CategoryButtonProps {
    imageUrl: string;
    category: string;
    onClick: (category: string) => void;
    width?: string;
    height?: string;
    hoverEffect?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ imageUrl, category, onClick, width = 'w-48', height = 'h-48', hoverEffect = 'hover:opacity-80' }) => {
    return (
        <div
            onClick={() => onClick(category)}
            className={`cursor-pointer transition-transform ${width} ${height} ${hoverEffect} bg-cover bg-center flex items-center justify-center`}
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
            role="button"
            aria-label={`Select ${category} category`}
        >
            <h3 className="text-center text-white bg-black bg-opacity-50 p-2 rounded">{category}</h3>
        </div>
    );
};

export default CategoryButton;