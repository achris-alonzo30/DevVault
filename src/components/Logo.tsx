import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiCodeBoxFill } from "react-icons/ri";

export const Logo = ({
    className
} : {
    className?: string;
}) => {
    return (
        <Link aria-label="DevVault App Logo" href="/" className={cn("flex items-center gap-2 dark:text-neutral-100 text-neutral-900", className)}>
            <RiCodeBoxFill className="size-5" />
            <p className="hidden sm:block text-lg font-semibold tracking-wide dark:text-neutral-100 text-neutral-900">DevVault</p>
        </Link>
    )
}