import { Input } from "@/components/ui/input"
import { Button } from "@nextui-org/react"

export function EmailForm() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="max-w-md">
          <form className="space-y-4">
            <div>
              <div className="relative">
                <Input type="email" placeholder="Enter your email" />
                <Button type="submit" className="absolute w-8 h-8 top-1/2 -right-5 -translate-y-1/2">
                  <ArrowUpIcon className="w-4 h-4 text-white" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function ArrowUpIcon(props: any) {
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
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}
