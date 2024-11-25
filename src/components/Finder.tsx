'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { searchItems } from '@/functions/search';

interface FinderProps {
    defaultValue?: string;
}

const Finder: React.FC<FinderProps> = ({ defaultValue = '' }) => {
    const [searchTerm, setSearchTerm] = useState(defaultValue);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/search/${searchTerm.trim().replaceAll(' ', '-').toLowerCase()}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto my-4">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="¿Qué deseas buscar?"
                    className="w-full px-4 py-2 border rounded-lg"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
};

export default Finder;