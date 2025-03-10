'use client';
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useImageCache } from "./ImageCache";

interface SmallViewInt {
    images: string[];
    selectedImage: string | undefined;
    setSelectedImage: (image: string) => void;
}

const SmallView = ({ images, selectedImage, setSelectedImage }: SmallViewInt) => {

    const cachedImages = useImageCache();
    useEffect(() => {
        if (cachedImages) setSelectedImage(Object.values(cachedImages)[0])
    }, [cachedImages]);

    return (
        <div className="mt-8">
            {
                cachedImages ? (
                    <div className="flex justify-center gap-4">
                        {
                            Object.values(cachedImages).map((image, index) => (
                                <DynamicImage
                                    key={index}
                                    src={image}
                                    index={index}
                                    onClick={() => setSelectedImage(image)}
                                    active={selectedImage === image}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex justify-center gap-4">
                        {
                            images.map((_, index) => (
                                <div key={index} className="skeleton w-24 h-24" />
                            ))
                        }
                    </div>
                )

            }
        </div>
    )
}

const DynamicImage = ({ src, index, onClick, active }: { src: string, index: number, onClick: () => void, active: boolean }) => {
    const [image, setImage] = useState<string>(src);

    return (
        <div
            className={classNames(
                'relative w-24 h-24 cursor-pointer mb-4',
                !active && 'opacity-50'
            )}
            onClick={onClick}
        >
            <Image
                src={image}
                alt={`Vista previa ${index + 1}`}
                fill
                className="object-cover rounded-md"
                sizes="96px"
                onError={(e) => setImage('/images/fallback.png')}
                blurDataURL='/images/fallback.png'
            />
        </div>

    )
}

export default SmallView;