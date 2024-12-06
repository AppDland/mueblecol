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
        <div>
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
                <div className="flex justify-center gap-4 mt-4">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className={`relative w-24 h-24 cursor-pointer ${selectedImage === image ? 'border-2 border-primary' : ''}`}
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
            )}
        </div>
    );
};

export default ImageViewer;