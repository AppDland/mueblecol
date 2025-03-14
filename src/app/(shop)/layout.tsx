'use client';
import { Footer, Header } from "@/components";
import { FilterState, sideBarState } from "@/store";
import classNames from "classnames";

export default function Layout({ children }: { children: React.ReactNode }) {

    const { isOpen: isSideBarOpen } = sideBarState();
    const { isOpen: isFilterOpen } = FilterState();

    return (
        <main className={classNames(
            'bg-white mt-[73px] md:mt-[81px]',
            isSideBarOpen || isFilterOpen ? 'h-screen overflow-hidden' : 'overflow-x-hidden'
        )}>
            <Header />
            {children}
            <Footer />
        </main>
    )
}