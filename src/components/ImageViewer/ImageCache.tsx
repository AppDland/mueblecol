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
    const [cachedImages, setCachedImages] = useState<ImageCacheContextType>({});

    useEffect(() => {
        const preloadImages = async () => {
            const loadedImages: ImageCacheContextType = {};
            for (const url of imageUrls) {
                console.log('fetching', url);
                const response = await fetch(url);
                console.log(response);
                const blob = await response.blob();
                loadedImages[url] = URL.createObjectURL(blob); // Convertimos en Blob URL
            }
            setCachedImages(loadedImages);
        };

        preloadImages();
    }, [imageUrls]);

    return (
        <ImageCacheContext.Provider value={cachedImages}>
            {children}
        </ImageCacheContext.Provider>
    );
};
