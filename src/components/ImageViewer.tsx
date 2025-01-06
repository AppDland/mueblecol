'use client';
import { useState } from 'react';
import Image from 'next/image';
import SimpleModal from './SimpleModal';
import CircleStatus from './CircleStatus';

interface ImageViewerProps {
    images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className={'bg-neutral-100 rounded-lg flex flex-col flex-shrink-0 justify-between p-4 sm:w-2/3 border border-neutral-200'}>
            <div className="relative aspect-video w-full" onClick={() => setIsModalOpen(true)}>

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
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </div>
    );
};

interface ZoomImageProps {
    selectedImage: string;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

const ZoomImage = ({ isModalOpen, selectedImage, setIsModalOpen }: ZoomImageProps) => {

    const [isZoomed, setIsZoomed] = useState(false);
    const [dragStart, setDragStart] = useState<{ x: number, y: number } | null>(null);
    const [dragOffset, setDragOffset] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

    const handleZoomToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsZoomed(!isZoomed);
        setDragOffset({ x: 0, y: 0 });
    };

    const closeModal = () => {
        setIsZoomed(false);
        setDragOffset({ x: 0, y: 0 });
    };



    const handleMouseDown = (e: React.MouseEvent) => {
        if (isZoomed) {
            setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (dragStart) {
            setDragOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
        }
    };

    const handleMouseUp = () => {
        setDragStart(null);
    };

    return (
        <SimpleModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClose={closeModal}
        >
            <div
                className={`relative w-full h-96 overflow-hidden ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={handleZoomToggle}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className={`absolute inset-0 transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                    style={{
                        transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`
                    }}
                >
                    <Image
                        src={selectedImage}
                        alt="Imagen en detalle"
                        fill
                        className="object-contain"
                        sizes="100vw"
                    />
                </div>
            </div>
        </SimpleModal>
    )
}

export default ImageViewer;