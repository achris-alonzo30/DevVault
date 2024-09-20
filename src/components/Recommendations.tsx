import { useSearchParams } from "next/navigation"

export const Recommendation = () => {
    const searchParams = useSearchParams();
    console.log(searchParams.get("recommendation"));
    return (
        <main className="flex-1 overflow-y-auto">
            
        </main>
    )
}