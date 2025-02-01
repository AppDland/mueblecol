'use client';
import { useState } from 'react';

// Import Swiper React components
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './imageslider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
    className?: string;
    article: string;
}

const ImageSlider = ({ images, className, article }: ImageSliderProps) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                loop={className?.includes('hidden') ? false : true}
                spaceBetween={10}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className='mySwiper2'
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={image}
                                alt={article}
                                width={500}
                                height={500}
                                className='rounded-lg object-fill border'
                                priority
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={className?.includes('hidden') ? false : true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={image}
                                alt={article}
                                width={100}
                                height={100}
                                className='rounded-lg object-fill border'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export { ImageSlider };