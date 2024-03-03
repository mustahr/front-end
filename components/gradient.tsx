import Image from "next/image";

export const Gradient = () => {
    return (
        <>
            <div className="fixed -left-[20%] -top-[20%] dark:md:block dark:opacity-70 -z-[100]">
                <Image
                    src="/docs-left.png"
                    className="relative shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt="docs left background"
                    data-loaded="true"
                    width={5000}
                    height={50}/>
                    
            </div>
            <div className="fixed -right-[20%] -top-[20%] dark:md:block dark:opacity-70 -z-[100] rotate-12">
                <Image
                    src="/docs-right.png"
                    className="relative shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
                    alt="docs right background"
                    width={1000}
                    height={50}/>
                    
            </div>
        </>
    )
}