'use client'
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "@/components/Loading";

interface LoadingContextType {
    setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

const LoadingProvider = ({ children }: { children: React.ReactNode }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [loading]);

    return (
        <LoadingContext.Provider value={{ setLoading }}>
            {
                loading && (
                    <Loading />
                )
            }
            {children}
        </LoadingContext.Provider>
    )
}

const useLoading = () => {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }

    return context;
}

export { LoadingProvider, useLoading };