import { cn } from "@/lib/utils";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const Navbar = ( ) => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });
    return (
        <header className={cn("fixed left-0 right-0 top-0 z-50 py-4 transition-colors duration-300 ease-in-out bg-neutral-900",
            scrolled && "bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-800/50"
        )}>
            <MaxWidthWrapper>
                <nav className="flex items-center justify-between">
                </nav>
            </MaxWidthWrapper>
        </header>
    )
}