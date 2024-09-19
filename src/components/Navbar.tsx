import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import { Logo } from "@/components/Logo";
import { ModeToggle } from "./ModeToggle";
import { FaGithub } from "react-icons/fa";
import { SearchCommand } from "./SearchCommand";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const Navbar = () => {
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
        <header className={cn("fixed left-0 right-0 top-0 z-50 py-2 transition-colors duration-300 ease-in-out bg-neutral-50 dark:bg-neutral-900",
            scrolled && "bg-neutral-100/95 dark:bg-neutral-900/95  backdrop-blur-lg border-bborder-neutral-200/50 dark:border-neutral-800/50"
        )}>
            <MaxWidthWrapper>
                <nav className="flex items-center justify-between w-full">
                    <Logo className="md:flex-1" />
                    <ul className="md:flex-1 flex items-center gap-4 justify-between md:justify-end">
                        {/* Search */}
                        <SearchCommand />
                        <Link
                            target="_blank"
                            rel='noreferrer noopener'
                            aria-label="GitHub Repository"
                            href="https://github.com/achris-alonzo30/DevVault"
                        >
                            <FaGithub className="size-5 cursor-pointer" />
                        </Link>
                        <ModeToggle />
                    </ul>
                </nav>
            </MaxWidthWrapper>
        </header>
    )
}