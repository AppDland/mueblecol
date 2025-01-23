'use client';

import useLargeScreen from "@/custom/useLargeScreen";
import Carrousel from "./Carrousel";

interface BoxContentInt {
    children: React.ReactNode[];
    autoslide?: boolean;
}

const BoxContent = ({ children, autoslide = true }: BoxContentInt) => {

    const isLargeScreen = useLargeScreen(640);

    return (
        isLargeScreen ? (
            <Carrousel autoSlide={autoslide ? { interval: 10000 } : undefined}>
                {children}
            </Carrousel>
        ) : (
            <Box>
                {children}
            </Box>
        )
    )
}



const Box = ({ children }: BoxContentInt) => {

    return (
        <div className="flex flex-wrap justify-center w-full py-10">
            {children}
        </div>
    )
}

export default BoxContent;