'use client';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface FinderProps {
    defaultValue?: string;
    isDark?: boolean;
}

const Finder: React.FC<FinderProps> = ({ defaultValue = '', isDark = false }) => {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/buscar/${searchTerm.trim().replaceAll(' ', '-').toLowerCase()}`);
        }
        //ocultar el teclado
        const input = document.activeElement as HTMLElement;
        input.blur();
    };

    const handleActive = (focus: boolean) => {
        setActive(focus ? focus : searchTerm.length > 0);
    }

    return (
        <form
            onSubmit={handleSearch}
            className={"w-full max-w-60 md:max-w-xs relative flex items-center py-1 border border-primary rounded-lg overflow-hidden bg-white"}
        >
            {/* <div className="relative flex items-center"> */}
            <Slider active={active} />
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => handleActive(true)}
                onBlur={() => handleActive(false)}
                placeholder="¿Qué deseas buscar?"
                className={`z-20 w-full px-4 py-1 sm:py-2 text-center rounded-lg pr-12 bg-transparent focus:outline-none`}
            />
            <button
                type="submit"
                className={`z-20 absolute right-0 p-3 h-full rounded-r-lg ${isDark
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
                {/* <MagnifyingGlassIcon className="w-5 h-5" /> */}
            </button>
            {/* </div> */}
        </form>
    );
};

const Slider = ({ active }: { active: boolean }) => (
    <div className={classNames('absolute bg-neutral-900 h-full z-10 duration-100 right-0', active ? 'w-10' : 'w-full')} />
)

export default Finder;