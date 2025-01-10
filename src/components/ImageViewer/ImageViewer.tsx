'use client';
import { useState } from 'react';
import Image from 'next/image';
import CircleStatus from '../CircleStatus';
import SmallView from './SmallView';
import { ImageCacheProvider, useImageCache } from './ImageCache';
import classNames from 'classnames';

const ImageViewer = ({ images }: ImageViewerProps) => (
    <ImageCacheProvider imageUrls={images}>
        <ImageViewerComponent images={images} />
    </ImageCacheProvider>
)

interface ImageViewerProps {
    images: string[];
}

const ImageViewerComponent = ({ images }: ImageViewerProps) => {
    const [selectedImage, setSelectedImage] = useState<string>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cachedImages = useImageCache();

    const handleNextImage = () => {
        if (cachedImages) {
            const array = Object.values(cachedImages);
            const currIndex = selectedImage ? array.indexOf(selectedImage) : 0;
            const nextIndex = (currIndex + 1) % array.length;
            setSelectedImage(array[nextIndex]);
            setCurrentIndex(currIndex + 1);
        }
    };

    const handlePrevImage = () => {
        if (cachedImages) {
            const array = Object.values(cachedImages);
            const currIndex = selectedImage ? array.indexOf(selectedImage) : 0;
            const prevIndex = (currIndex - 1 + array.length) % array.length;
            console.log(currIndex, prevIndex)
            setSelectedImage(array[prevIndex]);
            setCurrentIndex(currIndex - 1);
        }
    };

    return (
        <>
            <div className={'bg-neutral-100 flex flex-col flex-shrink-0 justify-between p-4 sm:w-2/3 border-r-2 border-neutral-200 select-none'}>
                {
                    cachedImages && selectedImage ? (
                        <div className="relative aspect-video w-full" onClick={() => setIsModalOpen(true)}>
                            <Image
                                src={selectedImage}
                                alt="Imagen principal"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                blurDataURL='/images/fallback.png'
                                priority
                            />
                            <ArrowButton
                                onClick={handlePrevImage}
                                canClick={currentIndex !== 0}
                                side='left'
                            />
                            <ArrowButton
                                onClick={handleNextImage}
                                canClick={currentIndex !== Object.values(cachedImages).length - 1}
                                side='right'
                            />
                        </div>
                    ) : <div className='skeleton w-full h-96' />
                }
                <CircleStatus />
                <SmallView
                    images={images}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                />
            </div>
            {
                isModalOpen && selectedImage && cachedImages && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
                        <div className="relative w-3/5 h-3/5 bg-black p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedImage}
                                alt="Imagen ampliada"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <ArrowButton
                                onClick={handlePrevImage}
                                canClick={currentIndex !== 0}
                                side='left'
                            />
                            <ArrowButton
                                onClick={handleNextImage}
                                canClick={currentIndex !== Object.values(cachedImages).length - 1}
                                side='right'
                            />
                        </div>
                    </div>
                )
            }
        </>
    );
};

interface ArrowButtonProps {
    onClick: () => void;
    canClick: boolean;
    side: 'left' | 'right';
}

const ArrowButton = ({ onClick, canClick, side }: ArrowButtonProps) => (
    <button
        onClick={(e) => { e.stopPropagation(); onClick() }}
        className={classNames(
            'absolute transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md',
            canClick
                ? 'hover:bg-primary'
                : 'opacity-50 cursor-default',
            side === 'right'
                ? 'right-3 top-1/2'
                : 'left-3 top-1/2'
        )}
        disabled={!canClick}
    >
        {
            side === 'left' ? (
                <>&#9664;</>
            ) : (
                <>&#9654;</>
            )
        }
    </button>
)

export default ImageViewer;