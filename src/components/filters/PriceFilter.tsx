'use client';

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { useNProgress } from "@/custom/useNProgress";

const PriceFilter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    // const { start } = useNProgress();

    const minPriceProp = searchParams.get('minPrice') as string | null;
    const maxPriceProp = searchParams.get('maxPrice') as string | null;

    const [localMin, setLocalMin] = useState(minPriceProp || '');
    const [localMax, setLocalMax] = useState(maxPriceProp || '');

    const handleBlur = () => {
        // start();
        const params = new URLSearchParams(searchParams);
        if (localMin.length > 0) {
            params.set('minPrice', localMin);
        } else {
            params.delete('minPrice');
        }
        if (localMax.length > 0) {
            params.set('maxPrice', localMax);
        } else {
            params.delete('maxPrice');
        }
        router.push(`?${params.toString()}`);
    }

    return (
        <div className="mb-6">
            <h3 className="font-bold mb-2">Precio</h3>
            <div className="flex gap-2">
                <input
                    type="number"
                    placeholder="Mínimo"
                    className="w-1/2 p-2 border rounded"
                    value={localMin}
                    onChange={(e) => setLocalMin(e.target.value)}
                    onBlur={handleBlur}
                />
                <input
                    name="maxPrice"
                    type="number"
                    placeholder="Máximo"
                    className="w-1/2 p-2 border rounded"
                    value={localMax}
                    onChange={(e) => setLocalMax(e.target.value)}
                    onBlur={handleBlur}
                />
            </div>
        </div>
    );
};

export default PriceFilter; 