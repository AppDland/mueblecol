'use client';

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3
});

export const useNProgress = () => {
    const searchParams = useSearchParams();

    useEffect(() => {
        NProgress.done();
    }, [searchParams]);

    return {
        start: () => NProgress.start(),
        done: () => NProgress.done(),
    }
}
