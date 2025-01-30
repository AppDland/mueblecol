import { Categories } from "@/modules";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen bg-gray-100 p-4 pt-8">
                {children}
            </div>
            <Categories />
        </>
    );
} 