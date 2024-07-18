'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

import Link from "next/link"


export const SearchModal = () => {
    return (
        <Dialog>
            <div className="text-medium whitespace-nowrap box-border list-none lg:flex ml-auto font-normal rounded-xl">
                <DialogTrigger className="z-0 group text-muted-foreground py-2 px-4 font-medium tracking-wide relative flex items-center justify-between gap-5 box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden text-sm rounded-xl border border-forground hover:text-accent-foreground hover:bg-accent" type="button" aria-label="Quick search">
                    <svg aria-hidden="true" fill="none" focusable="false" height="18" role="presentation" viewBox="0 0 24 24" width="18" className="text-base text-default-400 pointer-events-none flex-shrink-0">
                        <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        </path>
                        <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        </path>
                    </svg>
                    <p className="lg:block md:hidden sm:hidden">
                        Quick Search...
                    </p>
                </DialogTrigger>
            </div>
            <DialogContent className="p-0">
                <DialogHeader>
                    <Command>
                        <CommandInput placeholder="What are you looking for ??" />
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Trips">
                                <Link href='/Marrkesh'>
                                    <CommandItem>
                                        Marrakesh
                                    </CommandItem>
                                    <DialogClose>close</DialogClose>
                                </Link>
                                <Link href='/Tetouan'>
                                    <CommandItem>
                                        Tetouan
                                    </CommandItem>
                                </Link>
                                <Link href='/Merzouga'>
                                    <CommandItem>
                                        Zagora to Merzouga
                                    </CommandItem>
                                </Link>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Blogs">
                                <Link href='/trip'>
                                    <CommandItem>
                                        How to trip
                                    </CommandItem>
                                </Link>
                                <Link href='/trip'>
                                    <CommandItem>
                                        My first trip
                                    </CommandItem>
                                </Link>
                                <Link href='/Marrkesh'>
                                    <CommandItem>
                                        Things to know
                                    </CommandItem>
                                </Link>
                            </CommandGroup>
                        </CommandList>
                    </Command>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}