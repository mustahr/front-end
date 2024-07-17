import Image from "next/image"

export function OurFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-6 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Our Features
          </h1>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground mb-6">
            <CompassIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2">
            <h3 className="text-xl font-semibold">Guided Tours</h3>
            <p className="text-muted-foreground">
              Explore the city with our experienced local guides. Discover hidden gems and learn about the history and
              culture.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2">
            <h3 className="text-xl font-semibold">Customized Itineraries</h3>
            <p className="text-muted-foreground">
              Let us create a personalized itinerary based on your interests and preferences. We&apos;ll handle all the
              planning for you.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground mb-4">
            <CameraIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2">
            <h3 className="text-xl font-semibold">Photography Workshops</h3>
            <p className="text-muted-foreground">
              Capture the beauty of the city through our photography workshops led by professional photographers.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground">
            <MapIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2">
            <h3 className="text-xl font-semibold">Self-Guided Walks</h3>
            <p className="text-muted-foreground">
              Explore the city at your own pace with our self-guided walking tours. Discover hidden gems and local
              hotspots.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground">
            <FishIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2">
            <h3 className="text-xl font-semibold">Culinary Experiences</h3>
            <p className="text-muted-foreground">
              Indulge in the local cuisine with our food tours and cooking classes. Discover the flavors that make this
              city unique.
            </p>
          </div>
        </div>
        <div className="relative max-h-fit overflow-hidden rounded-lg bg-background p-6 border border-gray-900 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-2 hover:border-primary">
          <div className="absolute top-4 left-4 rounded-md bg-primary p-2 text-primary-foreground">
            <StarIcon className="h-6 w-6" />
          </div>
          <div className="mt-14 space-y-2 ">
            <h3 className="text-xl font-semibold">Exclusive Experiences</h3>
            <p className="text-muted-foreground">
              Enjoy exclusive access to unique events, private tours, and behind-the-scenes experiences that you won&apos;t
              find anywhere else.
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src="/assets/traveler-back.png"
            width={300}
            height={200}
            alt="Service Image"
            className="rounded-md object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CameraIcon(props: any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function CompassIcon(props: any) {
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
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function FishIcon(props: any) {
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
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  )
}


function MapIcon(props: any) {
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
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}


function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
