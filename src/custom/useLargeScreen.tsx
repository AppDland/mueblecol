'use client';
import { useEffect, useState } from "react";

const useLargeScreen = (maxWidth: number) => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>();

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > maxWidth);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isLargeScreen;
}

export default useLargeScreen;