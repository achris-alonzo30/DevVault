import Link from "next/link";

export const Sidebar = () => {
    return (
        <aside className="w-64 overflow-y-auto mt-[56px] hidden md:block">
            <nav className="flex flex-col items-start text-sm gap-4 py-4 p-10 mx-auto w-full border-r h-full">
                <h2 className="font-semibold">Recommendation</h2>
                <ul className="flex flex-col gap-2">
                    <Link href="/explore/frontend">
                        Frontend
                    </Link>
                    <Link href="/explore/backend">
                        Backend
                    </Link>
                </ul>
            </nav>
        </aside>
    )
}