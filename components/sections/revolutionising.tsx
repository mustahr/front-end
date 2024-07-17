import Image from "next/image";

export function Revolutionising() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Revolutionising the way we travel
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From travel planning to accommodation arrangements, we&apos;e got you covered.
          </p>
        </div>
        <div className="grid gap-6 md:gap-24 md:grid-cols-3 mt-12">
          <div className="">
            <Image
              src="/assets/parashoot.png"
              width={300}
              height={300}
              alt="Travel Planning"
              className="w-full h-[240px] object-cover rounded-3xl"
            />
            <div className="py-6">
              <h3 className="text-lg font-semibold">Travel Planning</h3>
              <p className="text-muted-foreground">
                Let us handle the details of your next trip, from itinerary creation to destination recommendations.
              </p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden">
            <Image
              src="/assets/bags.png"
              width={300}
              height={300}
              alt="Flight Booking"
              className="w-full h-[240px] object-cover rounded-3xl"
            />
            <div className="py-6">
              <h3 className="text-lg font-semibold">Flight Booking</h3>
              <p className="text-muted-foreground">
                Enjoy hassle-free flight booking with our expert team, ensuring the best deals and seamless travel.
              </p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden">
            <Image
              src="/assets/car.png"
              width={300}
              height={300}
              alt="Accommodation"
              className="w-full h-[240px] object-cover rounded-3xl"
            />
            <div className="py-6">
              <h3 className="text-lg font-semibold">Accommodation</h3>
              <p className="text-muted-foreground">
                From luxury hotels to cozy vacation rentals, we&apos;ll find the perfect accommodation to suit your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
