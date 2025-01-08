'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

interface SmallViewInt {
    images: string[];
    selectedImage: string;
    setSelectedImage: (image: string) => void;
}

const SmallView = ({ images, selectedImage, setSelectedImage }: SmallViewInt) => {

    return (
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
                                className={`relative w-24 h-24 cursor-pointer mb-4 ${selectedImage === image ? 'border-2 border-primary' : ''}`}
                                onClick={() => setSelectedImage(image)}
                            >
                                <DynamicImage src={image} index={index} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )

    )
}

const DynamicImage = ({ src, index }: { src: string, index: number }) => {
    const [image, setImage] = useState<string>(src);

    return (
        <Image
            src={image}
            alt={`Vista previa ${index + 1}`}
            fill
            className="object-cover"
            sizes="96px"
            onError={(e) => setImage('/images/fallback.png')}
            blurDataURL='/images/fallback.png'
        />
    )
}

export default SmallView;