import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Logo } from "./ui/logo"
import { MainNav } from "./main-nav"
import { SearchModal } from "@/modals/searchModal"
import Button from "@/components/ui/button"; // Correct import

export default function Component() {
    return (
        <header className="fixed top-5 z-50 w-full border-b border-muted/20 transition-shadow duration-300 data-[scrolled=true]:shadow-md">
            <div className="container md:px-6 w-11/12 md:w-3/4 h-16 relative px-4 sm:px-6 lg:px-8 flex items-center justify-start gap-4 border border-slate-800 rounded-full bg-black/60 backdrop-blur-md">
                <Logo />
                <div className="hidden items-center md:flex space-x-4 lg:space-x-6 mx-auto">
                    <MainNav />
                </div>
                <div className="hidden items-center md:flex ">
                    <SearchModal />
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="md:hidden ml-auto bg-transparent">
                            <MenuIcon />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs">
                        <div className="grid gap-6 p-4 sm:p-6">
                            <Logo />
                            <nav className="grid gap-3">
                                <MainNav />
                            </nav>
                            <SearchModal />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

function MenuIcon() {
    return (
        <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon() {
    return (
        <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function XIcon() {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}