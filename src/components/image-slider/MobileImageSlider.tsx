'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './imageslider.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

interface ImageSliderProps {
    images: string[];
    className?: string;
    article: string;
}

const MobileImageSlider = ({ images, className, article }: ImageSliderProps) => {


    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#2E9896',
                    height: '400px'
                } as React.CSSProperties}
                loop
                pagination
                modules={[FreeMode, Pagination]}
            >
                {
                    images.map(image => (
                        <SwiperSlide
                            key={image}
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
                        >
                            <Image
                                src={image}
                                alt={article}
                                width={700}
                                height={700}
                                className='object-cover'
                                priority
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export { MobileImageSlider };