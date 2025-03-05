'use client';
import { useEffect, useRef, useState } from 'react';

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
import { FreeMode, Pagination, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import classNames from 'classnames';

interface ImageSliderProps {
    images: string[];
    className?: string;
    article: string;
}

const ImageSlider = ({ images, className, article }: ImageSliderProps) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType>();
    const swiperRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={classNames(className, 'select-none h-[550px]')}
            ref={swiperRef}
        >
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties}
                loop
                observer
                observeParents
                spaceBetween={10}
                pagination
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Pagination, Thumbs]}
                className='mySwiper2'
            >
                {
                    images.length > 0

                        ? images.map(image => (
                            <SwiperSlide
                                key={image}
                                className='overflow-hidden rounded-lg'
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

                        :
                        <SwiperSlide
                            className='overflow-hidden rounded-lg'
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
                        >
                            <Image
                                src="/images/fallback.png"
                                alt={article}
                                width={700}
                                height={700}
                                className='object-contain'
                                priority
                            />
                        </SwiperSlide>
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
                observer={true}
                observeParents={true}
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={image}
                                alt={article}
                                width={300}
                                height={300}
                                className='rounded-lg object-cover'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export { ImageSlider };