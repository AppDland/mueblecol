'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
    images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
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

    if (!isS3Image || !selectedImage) return null;

    return (
        <div className='bg-neutral-100 rounded-lg flex flex-col flex-shrink-0 justify-between p-4 sm:w-2/3'>
            <div className="relative aspect-video w-full">
                <Image
                    src={selectedImage}
                    alt="Imagen principal"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
                <button
                    onClick={handlePrevImage}
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === 0 ? 'opacity-50 cursor-default' : 'hover:bg-secondary-light'}`}
                    disabled={currentIndex === 0}
                >
                    &#9664;
                </button>
                <button
                    onClick={handleNextImage}
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md ${currentIndex === images.length - 1 ? 'opacity-50 cursor-default' : 'hover:bg-secondary-light'}`}
                    disabled={currentIndex === images.length - 1}
                >
                    &#9654;
                </button>
            </div>
            {images.length > 1 && (
                <div>
                    <div className='px-8 py-4'>
                        <div className="w-full border border-[#272727] opacity-5" />
                    </div>
                    <div className="flex justify-center gap-4">
                        {images.map((image, index) => (
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
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageViewer;