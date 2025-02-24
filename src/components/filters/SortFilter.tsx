'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useNProgress } from '@/custom/useNProgress';

const SortFilter = () => {

    const searchParams = useSearchParams();
    const orderByProp = searchParams.get('orderBy') as 'asc' | 'desc' | null;
    const [orderBy, setOrderBy] = useState<'asc' | 'desc' | undefined>(orderByProp || undefined);
    const router = useRouter();
    const { start } = useNProgress();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        start();
        const value = e.target.value as 'asc' | 'desc' | undefined;
        setOrderBy(value);

        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('orderBy', value);
        } else {
            params.delete('orderBy');
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Ordenar</h3>
            <select
                className="w-full p-2 border rounded"
                value={orderBy}
                onChange={handleChange}
            >
                <option value="">Destacados</option>
                <option value="asc">Menor precio</option>
                <option value="desc">Mayor precio</option>
            </select>
        </div>
    );
};

export default SortFilter; 