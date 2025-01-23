'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TitleAnimated } from '@/components/Header/Title';

const Intro = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [out, setOut] = useState(false);

    // useEffect(() => {
    //     if (showTitle) {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                 setShowTitle(false);
    //             }, 1000)
    //             setOut(true);
    //         }, 5000);
    //     } else {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                 setShowTitle(true);
    //             }, 1000)
    //             setOut(true);
    //         }, 5000);
    //     }
    // }, [showTitle]);

    // useEffect(() => {
    //     if (out) {
    //         setTimeout(() => {
    //             setOut(false)
    //         }, 1000)
    //     }
    // }, [out])

    return (
        <Background>
            <div className={classNames(
                'flex flex-col items-center justify-center w-fit border',
                showTitle ? 'hidden md:visible' : 'visible',
                out && 'max-md:intro-out-animation',
                "intro-class-for-animation md:intro-class-for-animation"
            )}>
                <h1 className={'text-2xl sm:text-4xl text-white'}>Muebles Para El Hogar</h1>
                <p className={'text-base sm:text-lg text-white'}>¡Gran Variedad!</p>
            </div>
            <div
                className={classNames(
                    showTitle ? 'visible md:hidden' : 'hidden',
                    out && 'intro-out-animation-second'
                )}
            >
                <TitleAnimated dark />
            </div>
        </Background>
    );
};

const Background = ({ children }: { children: React.ReactNode }) => (
    <div
        className="relative w-full flex items-center justify-center select-none justify-self-center"
        style={{
            background: 'linear-gradient(to bottom, #005353, #2E9896)',
            height: '15vh'
        }}
    >
        {children}
    </div>
)

export default Intro;