import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

export const MaxWidthWrapper = ({ children, className = "" }: MaxWidthWrapperProps) => {
    return (
        <div className={cn("mx-auto max-w-7xl px-4 md:px-8", className)}>
            {children}
        </div>
    );
};
