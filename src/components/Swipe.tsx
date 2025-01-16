'use client';
import { useState } from "react";

interface SwipeProps {
    onLeftSwipe?: () => void;
    onRightSwipe?: () => void;
    children: React.ReactNode;
}

const Swipe = ({ children, onLeftSwipe, onRightSwipe }: SwipeProps) => {
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    const handleTouchStart = (e: any) => {
        setStartX(e.touches[0].clientX); // Registra la posición inicial del toque
    };

    const handleTouchMove = (e: any) => {
        setEndX(e.touches[0].clientX); // Registra la posición final mientras se desliza
    };

    const handleTouchEnd = () => {
        const diff = startX - endX;

        if (diff > 50) {
            if (onLeftSwipe) onLeftSwipe();
        } else if (diff < -50) {
            if (onRightSwipe) onRightSwipe();
        }

        // Reinicia los valores
        setStartX(0);
        setEndX(0);
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden"
        >
            {children}
        </div>
    )
}

export default Swipe;