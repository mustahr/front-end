import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
    return (
        <Link href='/' className="flex items-center gap-2">
            <Image
                src='/logo.png'
                alt="Logo"
                className="relative object- h-auto"
                width={70}
                height={300}
            />
        </Link>
    )
}