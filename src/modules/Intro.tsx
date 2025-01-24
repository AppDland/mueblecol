'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { TitleAnimated } from '@/components/Header/Title';
import "./intro.css";

const Intro = () => {
    const [showTitle, setShowTitle] = useState(false);
    const [out, setOut] = useState(false);

    useEffect(() => {
        if (showTitle) {
            setTimeout(() => {
                setTimeout(() => {
                    setShowTitle(false);
                }, 1000)
                setOut(true);
            }, 5000);
        } else {
            setTimeout(() => {
                setTimeout(() => {
                    setShowTitle(true);
                }, 1000)
                setOut(true);
            }, 5000);
        }
    }, [showTitle]);

    useEffect(() => {
        if (out) {
            setTimeout(() => {
                setOut(false)
            }, 1000)
        }
    }, [out]);

    return (
        <Background>
            <div className={classNames(
                'flex flex-col items-center justify-center w-fit',
                showTitle ? 'hidden md:flex' : 'flex',
                "intro-class-for-animation"
            )}>
                <h1 className={'text-2xl sm:text-4xl text-third font-light'}>Muebles Para El Hogar</h1>
                <p className={'text-base sm:text-lg text-third italic'}>¡Gran Variedad!</p>
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
            // background: 'linear-gradient(to bottom, #005353, #177675)',
            background: 'white',
            height: '15vh'
        }}
    >
        {children}
    </div>
)

export default Intro;