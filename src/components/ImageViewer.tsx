'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
    images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const isS3Image = selectedImage?.startsWith('https://');

    if (!isS3Image || !selectedImage) return null;

    return (
        <div className='bg-neutral-100 rounded-lg '>
            <div className="relative aspect-video w-full">
                <Image
                    src={selectedImage}
                    alt="Imagen principal"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
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