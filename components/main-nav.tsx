"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({
    className,
}: React.HTMLAttributes<HTMLElement>) {


    const pathname = usePathname();

    const routes = [
        {
            href: `/`,
            label: 'Overview',
            active: pathname === `/`
        },
        {
            href: `/trips`,
            label: 'Trips',
            active: pathname === `/trips`
        },
        {
            href: `/reservations`,
            label: 'Reservations',
            active: pathname === `/reservations`
        },
        {
            href: `/contact`,
            label: 'Contact',
            active: pathname === `/contact`
        },
        {
            href: `/blogs`,
            label: 'Blogs',
            active: pathname === `/blogs`
        }
    ];

    return (
        <>
            {
                routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        prefetch={false}
                        className={cn(
                            "text-sm font-medium text-foreground hover:text-foreground",
                            route.active ? "text-white dark:text-white " : "text-muted-foreground"
                        )}
                    >
                        {route.label}
                    </Link>
                ))
            }
        </>
    )
}