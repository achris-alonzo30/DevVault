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
            <div className="flex flex-col items-start text-sm gap-4 py-4 p-6 pt-14 mx-auto w-full border-r h-full">
                <h2 className="font-extrabold">RECOMMENDATIONS</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <p>Frontend</p>
                        <nav className="flex flex-col gap-2">
                            {frontend.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <Link href={`/recommendation/${item.link}`} className="group flex items-center gap-2">
                                        <span className="size-1 p-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500"/>
                                        <a className="flex items-center text-sm text-neutral-700 dark:text-neutral-300 ">
                                            <p>{item.title}</p>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>Backend</p>
                        <nav className="flex flex-col gap-2">
                            {backend.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <Link href={`/recommendation/${item.link}`} className="group flex items-center gap-2">
                                        <span className="size-1 p-1 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500"/>
                                        <a className="flex items-center text-sm text-neutral-700 dark:text-neutral-300 ">
                                            <p>{item.title}</p>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}