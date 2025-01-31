'use client';
import { Footer, Header } from "@/components";
import { FilterState, sideBarState } from "@/store";
import classNames from "classnames";

export default function Layout({ children }: { children: React.ReactNode }) {

    const { isOpen } = sideBarState();
    const { showFilters } = FilterState();

    return (
        <main className={classNames(
            'bg-white',
            isOpen || showFilters ? 'h-screen overflow-hidden' : 'overflow-x-hidden'
        )}>
            <Header />
            {children}
            <Footer />
        </main>
    )
}