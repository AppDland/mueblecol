import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CategoryButtonProps {
    imageUrl: string;
    category: string;
    onClick: (category: string) => void;
    width?: string;
    height?: string;
    hoverEffect?: string;
    titleColor?: string;
    titleBgColor?: string;
    titleBgOpacity?: string;
    titlePadding?: string;
    titleRounded?: string;
    titleFontSize?: string;
    titleFontWeight?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
    imageUrl,
    category, 
    onClick,
    width = 'w-48',
    height = 'h-48',
    hoverEffect = 'hover:opacity-80',
    titleColor = 'text-white',
    titleBgColor = 'bg-black',
    titleBgOpacity = 'bg-opacity-50',
    titlePadding = 'p-2',
    titleRounded = 'rounded',
    titleFontSize = 'text-lg',
    titleFontWeight = 'font-bold',
}) => {
    const router = useRouter();

    const handleClick = () => {
        onClick(category);
        router.push(`/category?category=${category}`);
    };

    return (
        <div className="relative">
            <div
                onClick={handleClick}
                className={`border border-black flex justify-center items-center cursor-pointer select-none ${width} ${height} ${hoverEffect} ${titleRounded}`}
                role="button"
                aria-label={`Select ${category} category`}
            >
                <Image
                    src={imageUrl}
                    alt={category}
                    layout="fill"
                    objectFit="cover"
                    className={`absolute inset-0 ${titleRounded}`}
                />
                <h3 className={`relative z-10 text-center ${titleColor} ${titleBgColor} ${titleBgOpacity} ${titlePadding} ${titleRounded} ${titleFontSize} ${titleFontWeight}`}>
                    {category}
                </h3>
            </div>
        </div>
    );
};

export default CategoryButton;