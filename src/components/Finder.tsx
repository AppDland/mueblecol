'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface FinderProps {
    defaultValue?: string;
    isDark?: boolean;
}

const Finder: React.FC<FinderProps> = ({ defaultValue = '', isDark = false }) => {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/buscar/${searchTerm.trim().replaceAll(' ', '-').toLowerCase()}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-xs mx-auto my-3">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="¿Qué deseas buscar?"
                    className={`w-full px-4 py-2 text-center rounded-lg pr-12 ${
                        isDark 
                            ? 'bg-neutral-900 text-white placeholder:text-neutral-400' 
                            : 'bg-white text-neutral-900 border-2 border-neutral-200 placeholder:text-neutral-500'
                    } focus:outline-none`}
                />
                <button
                    type="submit"
                    className={`absolute right-0 p-3 h-full rounded-r-lg ${
                        isDark 
                            ? 'text-white' 
                            : 'bg-neutral-900 text-white'
                    }`}
                    aria-label="Buscar"
                >
                    <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
};

export default Finder;