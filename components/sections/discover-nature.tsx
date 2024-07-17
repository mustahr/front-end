import Image from "next/image"
import Link from "next/link"

export function DiscoverNature() {
  return (
    <section className="pb-12 md:pb-20 lg:pb-24 bg-black m-0">
      <div className="container px-4 md:px-">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover the touch of nature</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-8">
          <div className="relative rounded-lg overflow-hidden group translate-y-10">
            <Link href="#" className="block h-full w-full" prefetch={false}>
              <Image
                src="/DiscoverNature/1.jpg"
                width={400}
                height={300}
                alt="Destination"
                className="min-h-full w-auto object-fit transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium border border-white group-hover:border-black">
                <MapPinIcon className="w-4 h-4 mr-1 inline-block" />
                Yosemite
              </div>
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden group -translate-y-10">
            <Link href="#" className="block h-full w-full" prefetch={false}>
              <Image
                src="/DiscoverNature/2.jpg"
                width={400}
                height={300}
                alt="Destination"
                className="min-h-full w-auto object-fit transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium border border-white group-hover:border-black">
                <MapPinIcon className="w-4 h-4 mr-1 inline-block" />
                Zion
              </div>
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden group translate-y-10">
            <Link href="#" className="block h-full w-full" prefetch={false}>
              <Image
                src="/DiscoverNature/3.jpg"
                width={400}
                height={300}
                alt="Destination"
                className="min-h-full w-auto object-fit transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium border border-white group-hover:border-black">
                <MapPinIcon className="w-4 h-4 mr-1 inline-block" />
                Glacier
              </div>
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden group -translate-y-10">
            <Link href="#" className="block h-full w-full" prefetch={false}>
              <Image
                src="/DiscoverNature/4.jpg"
                width={400}
                height={300}
                alt="Destination"
                className="min-h-full w-auto object-fit transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium border border-white group-hover:border-black">
                <MapPinIcon className="w-4 h-4 mr-1 inline-block" />
                Yellowstone
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
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
