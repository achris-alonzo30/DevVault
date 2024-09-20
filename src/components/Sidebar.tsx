import Link from "next/link";

const frontend = [
    {
        title: "UI Libraries",
        link: "ui-libraries",
    },
    {
        title: "JavaScript Frameworks",
        link: "javascript-frameworks",
    },
    {
        title: "Icons & Assets",
        link: "icons-assets",
    },
    {
        title: "Animations",
        link: "animations",
    },
    {
        title: "Forms & Validations",
        link: "forms-validations",
    },
]

const backend = [
    {
        title: "Databases",
        link: "databases",
    },
    {
        title: "Authentication",
        link: "authentication",
    },
    {
        title: "API Tools",
        link: "api-tools",
    },
]



export const Sidebar = () => {
    return (
        <aside className="w-64 overflow-y-auto mt-[56px] hidden md:block">
            <div className="flex flex-col items-start text-sm gap-4 py-4 p-6 mx-auto w-full border-r h-full">
                <h2 className="font-extrabold">RECOMMENDATIONS</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Frontend</p>
                        <nav className="flex flex-col gap-2">
                            {frontend.map((item, index) => (
                                <Link href={`/explore?recommendation=${item.link}`} key={index} className="group flex items-center font-medium gap-2 dark:text-neutral-300 text-neutral-600">
                                    <span className="size-1 rounded-full p-1 bg-neutral-300 dark:bg-neutral-600  dark:group-hover:bg-neutral-200 group-hover:bg-neutral-800" />
                                    <span>{item.title}</span>
                                </Link>
                            ))}

                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Backend</p>
                        <nav className="flex flex-col gap-2">
                            {backend.map((item, index) => (
                                <Link href={`/explore?recommendation=${item.link}`} key={index} className="group flex items-center font-medium gap-2 dark:text-neutral-300 text-neutral-600">
                                    <span className="size-1 rounded-full p-1 bg-neutral-300 dark:bg-neutral-600  dark:group-hover:bg-neutral-200 group-hover:bg-neutral-800" />
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}