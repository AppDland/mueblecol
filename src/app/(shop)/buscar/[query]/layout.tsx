import { Categories } from "@/modules";

interface SearchLayoutProps {
    children: React.ReactNode;
    params: Promise<{ query: string }>;
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen sm:bg-gray-100 py-4 sm:px-4 pt-10">
                {children}
            </div>
            <Categories />
        </>
    );
} 