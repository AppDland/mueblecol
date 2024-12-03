'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import CategoryPage from '@/components/CategoryPage';
import Finder from '@/components/Finder';
import { useState } from 'react';
import Items from "@/data/items.json";
import Card, { ItemInt } from '@/components/Card';
import Header from '@/components/Headres';
import Button from '@/components/Button';

const Category = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const [text, setText] = useState('');
    const [found, setFound] = useState<ItemInt[]>([]);

    const handleFind = () => {
        console.log(Items.filter(({ name }) => name.includes(text)));
        setFound(Items.filter(({ name }) => name.toLowerCase().includes(text.toLowerCase())));
    };

    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <>
            <Header
                headerTitle={["Mueble", "Col"]}
                headerTitleColors={['text-[#177675]', 'text-[#2E9896]']}
                headerButtons={[
                    <Button
                        className="mx-2 mt-1"
                        text="Inicio"

                    />,
                    <Button
                        className="mx-2 mt-1"
                        text="Contacto"
                    />,
                    <Button
                        className="mx-2"
                        iconSrc="/images/kart.svg"
                        width="30px"
                        height="30px"
                        iconHeight={50}
                        iconWidth={50}
                    />
                ]}
                headerBgColor="bg-[#005353]"
            />
            <div className='absolute flex right-10'>
                <Finder value={text} setValue={setText} onFind={handleFind} />
                {found.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>

            <CategoryPage
                category={category as string}
                onBackClick={handleBackClick}
                backButtonText="⬅️ Regresar"
                backButtonColor="bg-[#2E9896]"
                backButtonTextColor="text-white"
                backButtonHoverColor="hover:opacity-80"
                backButtonHoverTextColor="hover:text-gray-200"
                backButtonPadding="p-3"
                backButtonRounded="rounded-lg"
                backButtonPosition="top-left"
            />
        </>
    );
};

export default Category;