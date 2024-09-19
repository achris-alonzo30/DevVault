import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "@/components/ui/dialog"

import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

export const SearchCommand = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="group flex-1 flex items-center justify-center text-sm font-medium justify-between bg-muted hover:text-foreground py-1 rounded-md w-[200px] px-3">
                    <p className="text-muted-foreground group-hover:text-foreground truncate">Search your favorite tools...</p>
                    <kbd className="font-light flex text-sm items-center gap-2 text-muted-foreground group-hover:text-foreground">
                        <span>⌘</span>
                        <span className="text-[12px] font-medium">K</span>
                    </kbd>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 border-none">
                <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Calendar</span>
                            </CommandItem>
                            <CommandItem>
                                <Smile className="mr-2 h-4 w-4" />
                                <span>Search Emoji</span>
                            </CommandItem>
                            <CommandItem disabled>
                                <Calculator className="mr-2 h-4 w-4" />
                                <span>Calculator</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Billing</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    )
}