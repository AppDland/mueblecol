'use client';
import { Header } from "@/components";
import Footer from "@/components/Footer";
import { sideBarState } from "@/store";
import classNames from "classnames";

export default function Layout({ children }: { children: React.ReactNode }) {

    const { isOpen } = sideBarState();

    return (
        <main className={classNames(isOpen && 'h-screen overflow-hidden')}>
            <Header />
            {children}
            <Footer />
        </main>
    )
}