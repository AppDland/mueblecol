import React, { createContext, useContext, useEffect, useState } from 'react';

interface ImageCacheContextType {
    [key: string]: string;
}

const ImageCacheContext = createContext<ImageCacheContextType | null>(null);

export const useImageCache = () => useContext(ImageCacheContext);

interface ImageCacheProviderProps {
    children: React.ReactNode;
    imageUrls: string[];
}

export const ImageCacheProvider = ({ children, imageUrls }: ImageCacheProviderProps) => {
    const [cachedImages, setCachedImages] = useState<ImageCacheContextType | null>(null);

    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages: ImageCacheContextType = {};
            for (const url of imageUrls) {
                console.log(url);
                const response = await fetch(url);
                const blob = await response.blob();
                loadedImages[url] = URL.createObjectURL(blob); // Convertimos en Blob URL
            }
            setCachedImages(loadedImages);
        };

        //verifico si cachedImages no es null y si imageUrls es un array
        if (!cachedImages && Array.isArray(imageUrls)) {
            preloadImages();
        }
    }, [imageUrls, cachedImages]);

    return (
        <ImageCacheContext.Provider value={cachedImages}>
            {children}
        </ImageCacheContext.Provider>
    );
};
