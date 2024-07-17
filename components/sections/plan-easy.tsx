import Image from "next/image"
import Link from "next/link"

export function PlanEasy() {
  return (
    <section className="w-full bg-black py-12 md:py-24 lg:py-32 flex items-center">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src="/assets/traveler.png"
            width={500}
            height={400}
            alt="Service Image"
            className="rounded-md object-cover mx-auto"
          />
        </div>
        <div className="md:w-1/2 space-y-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plan easy, Pay less & experience more</h2>
          <div className="flex justify-center items-center gap-20">
            <Link href='#' className="group relative flex justify-center items-center">
              <svg width="100" height="100" viewBox="0 0 500 500" className="mx-auto group-hover:rotate-180 transition-all">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7"
                    refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <path id="circle" d="M 250, 250 m -200, 0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0" fill="transparent" stroke="transparent" strokeWidth="2" markerMid="url(#arrowhead)" />
                <text width="700" className="text-white">
                  <textPath href="#circle" startOffset="10%" textAnchor="middle" className="spac text-6xl fill-white tracking-widest">
                    the faster traveling news guides vacation tips.
                  </textPath>
                </text>
              </svg>
              <div className="absolute group-hover:ml-2 transition-all">
                <ArrowRightIcon className="text-white" />
              </div>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at ea minima soluta repellat cupiditate eaque aspernatur ipsum! Enim tempora deleniti, optio praesentium earum non accusantium reiciendis laudantium voluptatum vitae?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
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
