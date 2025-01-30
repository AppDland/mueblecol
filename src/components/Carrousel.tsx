'use client';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Arrow from './Arrow';
import "./styles/arrowbutton.css";
import useLargeScreen from '@/custom/useLargeScreen';

interface AutoSlideInt {
    interval: number;
}

interface CarrouselInt {
    children: React.ReactNode[];
    autoSlide?: AutoSlideInt;
}

const Carrousel = ({ children, autoSlide }: CarrouselInt) => {
    const carrouselRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const [canAutoSlide, setCanAutoSlide] = useState(true);
    const [interval, setInterval] = useState<NodeJS.Timeout>();
    const isLargeScreen = useLargeScreen(640);

    const updateButtonsVisibility = () => {
        if (carrouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carrouselRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const next = () => {
        if (carrouselRef.current) {
            carrouselRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    const prev = () => {
        if (carrouselRef.current) {
            carrouselRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        if (autoSlide && canAutoSlide) {
            setInterval(setTimeout(() => {
                next();
            }, autoSlide.interval));
        }
    }, [autoSlide, canAutoSlide]);

    useEffect(() => {
        if (!canAutoSlide) {
            clearTimeout(interval);
            setCanAutoSlide(true);
        }
    }, [canAutoSlide, interval]);

    useEffect(() => {
        updateButtonsVisibility();
        if (carrouselRef.current) {
            carrouselRef.current.addEventListener('scroll', updateButtonsVisibility);
        }
        return () => {
            if (carrouselRef.current) {
                carrouselRef.current.removeEventListener('scroll', updateButtonsVisibility);
            }
        };
    }, []);

    return (
        <div className='relative flex items-center'>
            {
                showLeftButton && isLargeScreen &&
                <CarrouselButton
                    onClick={() => { setCanAutoSlide(false); prev() }}
                />
            }

            <div className='overflow-x-auto scrollbar-hide p-4 flex mx-0 sm:mx-8' ref={carrouselRef}>
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                >
                    {
                        children.map((item, index) => (
                            <div key={index} className="flex-none">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                showRightButton && isLargeScreen &&
                <CarrouselButton
                    onClick={() => { setCanAutoSlide(false); next() }}
                    right
                />
            }

        </div>
    );
};

const CarrouselButton = ({ onClick, right }: { onClick: () => void, right?: boolean }) => (
    <div
        onMouseDown={e => e.preventDefault()}
        onClick={onClick}
        className={classNames("absolute bg-white bg-opacity-70 backdrop-blur-md mx-2 w-10 sm:w-14 h-10 sm:h-14 z-20 group cursor-pointer", right ? "right-0" : "left-0", right && "rotate-180", "arrow-button-shadow")}
        typeof='button'
        style={{ borderRadius: "100%" }}
    >
        <div
            className='w-fit absolute group-hover:scale-110'
            style={{ top: '50%', left: 'calc(50% - 2px)', transform: 'translate(-50%, -50%)' }}
        >
            <Arrow />
        </div>

    </div>
);

export default Carrousel;