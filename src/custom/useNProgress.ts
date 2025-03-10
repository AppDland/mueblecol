'use client';

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
import './NProgress.css';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
});

export const useNProgress = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    useEffect(() => {
        NProgress.done();

        return () => {
            NProgress.done();
        }
    }, [searchParams, pathname]);

    return {
        start: () => NProgress.start(),
        done: () => NProgress.done(),
    }
}
