import vibrate from "@/functions/vibrate";
import { useEffect, useRef, useState } from "react";

const useCarrousel = () => {
    const carrouselRef = useRef<HTMLDivElement>(null);
    const [visibleWith, setVisibleWidth] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);


    useEffect(() => {
        const updateVisibleWidth = () => {
            const container = carrouselRef.current;
            if (!container) return;

            const containerRect = container.getBoundingClientRect();
            const children = Array.from(container.children) as HTMLDivElement[];

            let totalWidth = 0;

            children.forEach((child) => {
                const childRect = child.getBoundingClientRect();
                if (childRect.left >= containerRect.left && childRect.right <= containerRect.right) {
                    totalWidth += childRect.width; // Solo sumar si está completamente visible
                }
            });

            setVisibleWidth(totalWidth);
        };

        updateVisibleWidth();

        // Observar cambios de tamaño dinámicos
        const resizeObserver = new ResizeObserver(updateVisibleWidth);
        resizeObserver.observe(carrouselRef.current!);

        return () => resizeObserver.disconnect();
    }, []);



    useEffect(() => {
        const container = carrouselRef.current;
        if (!container) return;

        const handleScroll = () => {
            const tolerance = 5; // Margen de tolerancia para evitar errores por redondeo
            setIsAtStart(container.scrollLeft <= tolerance);
            setIsAtEnd(container.scrollLeft + container.offsetWidth >= container.scrollWidth - tolerance);
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll(); // Verificar posición inicial

        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const next = () => {
        if (!isAtEnd) {
            vibrate();
            carrouselRef.current?.scrollBy({ left: visibleWith, behavior: 'smooth' });
        }
    };

    const prev = () => {
        if (!isAtStart) {
            vibrate();
            carrouselRef.current?.scrollBy({ left: -visibleWith, behavior: 'smooth' });
        }
    };

    return {
        carrouselRef,
        isAtStart,
        isAtEnd,
        next,
        prev
    }
}

export default useCarrousel;