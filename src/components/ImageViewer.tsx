'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ImageViewerProps {
    images: string[];
}

const ImageViewer: React.FC<ImageViewerProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div>
            <div>
                <Image src={selectedImage} alt="Selected" width={800} height={600} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                {images.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        width={100}
                        height={100}
                        style={{ margin: '0 5px', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageViewer;