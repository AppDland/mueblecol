'use client';
import { useState } from 'react';
import Image from 'next/image';
import CircleStatus from './CircleStatus';

interface ImageViewerProps {
    images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const isS3Image = selectedImage?.startsWith('https://');

    const currentIndex = images.indexOf(selectedImage);

    const handleNextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const handlePrevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    const handleImageLoad = (image: string) => {
        if (!loadedImages.includes(image)) {
            setLoadedImages([...loadedImages, image]);
        }
    };

    if (!isS3Image || !selectedImage) return null;

    // revisar que no se hagan peticiones innecesarias ya sea a amazon o la carpeta

    return (
        <>
            <div className={'bg-neutral-100 rounded-lg flex flex-col flex-shrink-0 justify-between p-4 sm:w-2/3 border border-neutral-200 select-none'}>
                <div className="relative aspect-video w-full" onClick={() => setIsModalOpen(true)}>
                    <Image
                        src={selectedImage}
                        alt="Imagen principal"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        onLoad={() => handleImageLoad(selectedImage)}
                    />
                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                        className={`absolute left-1 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-default' : 'hover:bg-primary-light'}`}
                        disabled={currentIndex === 0}
                    >
                        &#9664;
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                        className={`absolute right-1 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === images.length - 1 ? 'opacity-50 cursor-default' : 'hover:bg-primary-light'}`}
                        disabled={currentIndex === images.length - 1}
                    >
                        &#9654;
                    </button>
                </div>
                <CircleStatus />
                {
                    images.length > 1 && (
                        <div>
                            <div className='px-8 py-4'>
                                <div className="w-full border border-[#272727] opacity-5" />
                            </div>
                            <div className="flex justify-center gap-4">
                                {
                                    images.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`relative w-24 h-24 cursor-pointer mb-4 ${selectedImage === image ? 'border border-primary' : ''}`}
                                            onClick={() => setSelectedImage(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Vista previa ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                                onLoad={() => handleImageLoad(image)}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
                    <div className="relative w-3/5 h-3/5 bg-black p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Imagen ampliada"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            onLoad={() => handleImageLoad(selectedImage)}
                        />
                        <button
                            onClick={handlePrevImage}
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-default' : 'hover:bg-secondary-light'}`}
                            disabled={currentIndex === 0}
                        >
                            &#9664;
                        </button>
                        <button
                            onClick={handleNextImage}
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === images.length - 1 ? 'opacity-50 cursor-default' : 'hover:bg-secondary-light'}`}
                            disabled={currentIndex === images.length - 1}
                        >
                            &#9654;
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageViewer;