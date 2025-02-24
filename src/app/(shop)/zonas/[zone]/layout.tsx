import { Categories } from "@/modules";
import { Suspense } from "react";

interface ZoneLayoutProps {
    children: React.ReactNode;
}

export default function ZoneLayout({ children }: ZoneLayoutProps) {
    return (
        <>
            <div className=" bg-gray-100 p-4">
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
            </div>
            <h3 className="text-center mt-16 text-lg font-bold">Encuentra más zonas</h3>
            <Categories showTitle={false} />
        </>
    );
} 