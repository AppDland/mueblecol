import { Categories } from "@/modules";
import { Suspense } from "react";
import { SearchFallback } from "@/components";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen sm:bg-gray-100 py-4 sm:px-4 pt-10">
                <Suspense fallback={<SearchFallback />}>
                    {children}
                </Suspense>
            </div>
            <Categories />
        </>
    );
} 