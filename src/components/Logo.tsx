import Link from "next/link";
import { RiCodeBoxFill } from "react-icons/ri";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 text-foreground">
            <RiCodeBoxFill className="size-5 text-primary-500" />
            <p className="text-lg font-semibold tracking-widest">DevVault</p>
        </Link>
    )
}