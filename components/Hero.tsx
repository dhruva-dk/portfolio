import Link from 'next/link'
import React from 'react'
//import index.ts for text


const Hero = () => {
    const heroHeader = "The Intersection of Code and Capture"

    const heroText = "Hi 👋, I'm Dhruva, a high school senior on a journey in photography and software development. I am based in Dallas, Texas but provide photography in both Dallas and Broken Bow, Oklahoma."

  return (
    <section className='w-full py-24'>
        <div className='container max-w px-4 md:px-8 text-center flex-col max-w-[900px]'>
            <h1 className='my-4 text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl'>{heroHeader}</h1>
            
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">{heroText}</p>

            <div className="flex justify-center gap-4 py-8">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              See My Work
            </Link>
          </div>
        </div>

        
        
    </section>
  )
}

export default Hero
