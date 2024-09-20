import Link from "next/link";
const frontend = [
    {
        title: "UI Libraries",
    },
    {
        title: "JavaScript Frameworks",
    },
    {
        title: "Icons & Assets",
    },
    {
        title: "Animations",
    },
    {
        title: "Forms & Validations",
    },
]

const backend = [
    {
        title: "Databases",
    },
    {
        title: "Authentication",
    },
    {
        title: "API Tools",
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
                                <li key={index} className="group flex items-center font-medium gap-2 dark:text-neutral-300 text-neutral-600">
                                    <span className="size-1 rounded-full p-1 bg-neutral-300 dark:bg-neutral-600  dark:group-hover:bg-neutral-200 group-hover:bg-neutral-800" />
                                    <span>{item.title}</span>
                                </li>
                            ))}

                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold">Backend</p>
                        <nav className="flex flex-col gap-2">
                            {backend.map((item, index) => (
                                <li key={index} className="group flex items-center font-medium gap-2 dark:text-neutral-300 text-neutral-600">
                                    <span className="size-1 rounded-full p-1 bg-neutral-300 dark:bg-neutral-600  dark:group-hover:bg-neutral-200 group-hover:bg-neutral-800" />
                                    <span>{item.title}</span>
                                </li>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}