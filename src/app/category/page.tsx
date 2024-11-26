'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import CategoryPage from '@/components/CategoryPage';

const Category = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <CategoryPage
            category={category as string}
            onBackClick={handleBackClick}
            backButtonText="⬅️ Regresar"
            backButtonColor="bg-blue-500"
            backButtonTextColor="text-white"
            backButtonHoverColor="hover:bg-blue-400"
            backButtonHoverTextColor="hover:text-gray-200"
            backButtonPadding="p-3"
            backButtonRounded="rounded-lg"
            backButtonPosition="bottom-left"
        />
    );
};

export default Category;