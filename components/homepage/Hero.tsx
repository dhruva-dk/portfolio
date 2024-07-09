
import React from 'react'
import { RainbowHighlight } from '../ui/RainbowHighlight'
import { RoughNotationGroup } from 'react-rough-notation'
import userData  from '@/constants/user'
//import index.ts for text


const Hero = () => {


    const heroText: string = userData.about.description[0]
    const colors: string[] = ["#87CEFA", "#4169E1"]

  return (
    <section className='w-full py-24'>
        <div className='container px-4 md:px-8 text-center flex-col max-w-[1200px]'>
        <div className="flex flex-wrap justify-center items-center text-center py-4">
            <h1 className='mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl'>The Intersection of</h1>
            <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[0]}>
                <h1 className="mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
                    Code
                </h1>
                </RainbowHighlight>
            </RoughNotationGroup>
            <h1 className='mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl'>and</h1>
            <RoughNotationGroup show={true}>
                <RainbowHighlight color={colors[1]}>
                <h1 className="mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
                    Capture
                </h1>
                </RainbowHighlight>
            </RoughNotationGroup>
        </div>
            <p className="mx-auto text-muted-foreground text-xl md:text-2xl">{heroText}</p>
        </div>

        
    </section>
  )
}

export default Hero
