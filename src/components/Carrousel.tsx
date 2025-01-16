'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import Arrow from './Arrow';
import "./styles/arrowbutton.css";
import useLargeScreen from '@/custom/useLargeScreen';
import Swipe from './Swipe';

interface AutoSlideInt {
    interval: number;
}

interface CarrouselInt {
    children: React.ReactNode[];
    autoSlide?: AutoSlideInt;
    itemsPerPage?: number;
    unlimitedItems?: boolean;
}

const Carrousel = ({ children, autoSlide, itemsPerPage = 3, unlimitedItems = false }: CarrouselInt) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [canAutoSlide, setCanAutoSlide] = useState(true);
    const [interval, setInterval] = useState<NodeJS.Timeout>();

    const next = () => {
        const nextNumber = currentIndex + itemsPerPage;
        const rest = children.length - nextNumber;
        const nextIndex = rest < itemsPerPage ? currentIndex + rest : nextNumber;
        const canNextIndex = nextIndex > children.length - 1;
        const canNextButton = nextIndex + itemsPerPage > children.length - 1;
        if (!canNextIndex) {
            setCurrentIndex(nextIndex);
            setShowLeftButton(true);
        }
        if (canNextButton) {
            setShowRightButton(false);
        }
    };

    const prev = () => {
        const prevNumber = currentIndex - itemsPerPage;
        const prevIndex = prevNumber < 0 ? 0 : prevNumber;
        const canPrevIndex = prevIndex + 1 < 0;
        const canPrevButton = prevIndex - 1 < 0;
        if (!canPrevIndex) {
            setCurrentIndex(prevIndex);
            setShowRightButton(true);
        }
        if (canPrevButton) {
            setShowLeftButton(false);
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
        clearTimeout(interval);
    }, [itemsPerPage]);

    return (
        <Swipe
            onLeftSwipe={() => { setCanAutoSlide(false); next() }}
            onRightSwipe={() => { setCanAutoSlide(false); prev() }}
        >
            <div
                className="relative p-4 flex items-center place-self-center sm:overflow-hidden w-full"
                onMouseDown={e => e.preventDefault()}
            >
                {
                    showLeftButton && <CarrouselButton onClick={() => { setCanAutoSlide(false); prev() }} />
                }
                <div
                    className="flex transition-transform duration-500 ease-in-out w-full"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {
                        children.map((item, index) => (
                            <div key={index} className="flex-none" >
                                {item}
                            </div>
                        ))
                    }
                </div>
                {
                    showRightButton && <CarrouselButton onClick={() => { setCanAutoSlide(false); next() }} right />
                }
            </div>
        </Swipe>
    );
};

const CarrouselButton = ({ onClick, right }: { onClick: () => void, right?: boolean }) => (
    <div
        onMouseDown={e => e.preventDefault()}
        onClick={onClick}
        className={classNames("absolute bg-white mx-2 w-10 sm:w-14 h-10 sm:h-14 z-10 cursor-pointer", right ? "right-0" : "left-0", right && "rotate-180", "arrow-button-shadow")}
        style={{ borderRadius: "100%" }}
        typeof='button'
    >
        <div
            className='w-fit absolute'
            style={{ top: '50%', left: 'calc(50% - 2px)', transform: 'translate(-50%, -50%)' }}
        >
            <Arrow />
        </div>
    </div>
);

export default Carrousel;