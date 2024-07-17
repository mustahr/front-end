import Image from "next/image";

export function Services() {
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32 relative bg-black">
      <div className="container w-full grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:grid-cols-2 lg:gap-16 items-center justify-center">
        <div className="space-y-4 order-2 md:order-1">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Services We Provide</h2>
          <ul className="grid gap-6 md:w-[500px] lg:w-full">
            <li className="flex gap-4">
              <div className="bg-primary rounded-md p-3 text-4xl font-semibold text-primary-foreground">1</div>
              <div>
                <h3 className="text-xl font-semibold">Flights</h3>
                <p className="text-muted-foreground">
                  Book your flights with ease and confidence. We offer a wide range of options to fit your travel needs.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-primary rounded-md p-3 text-4xl font-semibold text-primary-foreground">2</div>
              <div>
                <h3 className="text-xl font-semibold">Destinations</h3>
                <p className="text-muted-foreground">
                  Explore the world&apos;s most beautiful destinations. We&apos;ll help you plan the perfect itinerary.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-primary rounded-md p-3 text-4xl font-semibold text-primary-foreground">3</div>
              <div>
                <h3 className="text-xl font-semibold">Accommodations</h3>
                <p className="text-muted-foreground">
                  Find the perfect place to stay, from luxury hotels to cozy vacation rentals.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative min-w-full h-full gap-6 md:col-span-2 lg:col-span-1 order-1 md:order-2 hidden md:grid">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-[50%] overflow-hidden">
            <Image
              src="/DiscoverNature/1.jpg"
              alt="Destination"
              width={300}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="absolute top-[300px] left-0  w-[200px] h-[200px] rounded-[50%] overflow-hidden">
            <Image
              src="/DiscoverNature/3.jpg"
              alt="Flight"
              width={300}
              height={200}
              className="rounded-xl object-cover" />
          </div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%]  w-[200px] h-[200px] rounded-[50%] overflow-hidden">
            <Image
              src="/DiscoverNature/4.jpg"
              alt="Accommodation"
              width={300}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="absolute top-[0px] left-[0px]  w-[200px] h-[200px] rounded-[50%] overflow-hidden">
            <Image
              src="/DiscoverNature/2.jpg"
              alt="Accommodation"
              width={300}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
