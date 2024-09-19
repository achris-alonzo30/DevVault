import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiCodeBoxFill } from "react-icons/ri";

export const Logo = ({
    className
} : {
    className?: string;
}) => {
    return (
        <Link href="/" className={cn("flex items-center gap-2 text-foreground", className)}>
            <RiCodeBoxFill className="size-5 text-primary-500" />
            <p className="text-lg font-semibold tracking-widest">DevVault</p>
        </Link>
    )
}