'use client';

import classNames from "classnames";
import { useEffect } from "react";

interface BackdropProps {
    show: boolean;
    className?: string;
    onClick?: () => void;
}

const Backdrop = ({ show, className, onClick }: BackdropProps) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [show]);

    return (
        <div
            className={classNames(
                'absolute bg-black bg-opacity-30 z-20 top-0 left-0 backdrop-blur-sm duration-100',
                show ? 'block' : 'hidden',
                className,
            )}
            style={{ height: '100vh', width: '100vw' }}
            onClick={onClick}
        />
    )
}
export default Backdrop;