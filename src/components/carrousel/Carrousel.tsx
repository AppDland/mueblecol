'use client';
import classNames from 'classnames';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useCarrousel from './useCarrousel';

interface CarrouselInt {
    children: React.ReactNode[];
}

const Carrousel = ({ children }: CarrouselInt) => {
    const { carrouselRef, next, prev, isAtStart, isAtEnd } = useCarrousel();

    return (
        <div className='flex gap-1'>
            <CarrouselButton
                onClick={prev}
                disabled={isAtStart}
            />
            <div className='overflow-x-auto scrollbar-hide flex transition-transform duration-500 ease-in-out' ref={carrouselRef}>
                {
                    children.map((item, index) => (
                        <div key={index} className="flex-none">
                            {item}
                        </div>
                    ))
                }
            </div>
            <CarrouselButton
                onClick={next}
                right
                disabled={isAtEnd}
            />
        </div>
    );
};

const CarrouselButton = ({ onClick, right, disabled = false }: { onClick: () => void, right?: boolean, disabled?: boolean }) => (
    <button
        onClick={onClick}
        className={classNames(
            "sm:px-1 duration-100",
            !disabled && 'sm:hover:opacity-60',
            !disabled && right ? "sm:hover:translate-x-1 " : !disabled ? "sm:hover:-translate-x-1" : null,
            disabled && 'opacity-20'
        )}
        disabled={disabled}
    >
        {
            right ? (
                <IoIosArrowForward className='size-6 sm:size-8' />
            ) : (
                <IoIosArrowBack className='size-6 sm:size-8' />
            )
        }
    </button>
);

export { Carrousel };