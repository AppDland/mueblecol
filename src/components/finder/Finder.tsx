'use client';
import { useNProgress } from '@/custom/useNProgress';
import classNames from 'classnames';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Finder({ defaultValue = '', isDark = false }) {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const [active, setActive] = useState(false);
    const { start } = useNProgress();
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        if (params.query && typeof params.query === 'string') {
            setSearchTerm(params.query.trim().replaceAll('-', ' ').toLowerCase());
            setActive(true);
        } else {
            setSearchTerm('');
            setActive(false);
        }
    }, [params]);


    const handleActive = (focus: boolean) => {
        setActive(focus ? focus : searchTerm.length > 0);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        start();
        router.push(`/buscar/${searchTerm.trim().replaceAll(' ', '-').toLowerCase()}`);
    }

    return (
        <form
            className={"w-full max-w-64 md:max-w-72 relative flex items-center py-1 rounded-lg overflow-hidden bg-white border border-accent"}
            onSubmit={handleSubmit}
        >
            <Slider active={active} />
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => handleActive(true)}
                onBlur={() => handleActive(false)}
                placeholder="¿Qué deseas buscar?"
                className={`z-10 w-full px-4 py-1 sm:py-2 text-center rounded-lg pr-12 bg-transparent focus:outline-none`}
            />
            <button
                type="submit"
                className={`z-10 absolute right-0 p-3 h-full rounded-r-lg ${isDark
                    ? 'text-white'
                    : 'bg-neutral-900 text-white'
                    }`}
                aria-label="Buscar"
            >
                <Image
                    alt='Buscar'
                    src='/images/lupa.svg'
                    width={16}
                    height={16}
                />
            </button>
        </form>
    );
};

const Slider = ({ active }: { active: boolean }) => (
    <div className={classNames('absolute bg-neutral-900 h-full z-10 duration-100 right-0', active ? 'w-10' : 'w-full')} />
)