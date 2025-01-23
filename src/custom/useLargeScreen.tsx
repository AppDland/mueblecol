'use client';
import { useLoading } from "@/context/Loading.context";
import { useEffect, useState } from "react";

const useLargeScreen = (maxWidth: number) => {
    const [isLargeScreen, setIsLargeScreen] = useState<boolean>();
    const { setLoading } = useLoading();

    useEffect(() => {
        setLoading(true);

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > maxWidth);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isLargeScreen !== undefined) {
            setLoading(false);
        }
    }, [isLargeScreen]);

    return isLargeScreen;
}

export default useLargeScreen;