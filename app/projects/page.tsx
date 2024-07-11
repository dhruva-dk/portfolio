import React from 'react'
import userData from '@/constants/user'
import { BentoGrid, BentoGridItem } from '@/components/BentoGrid'
import { Link } from 'lucide-react'
import Image from 'next/image'



const Projects = () => {

  const baseImgUrl = '/projects'

  return (
    <section>
      <div className='max-w-6xl mx-auto mt-16 md:mt-60'>
        <div className=' container'>
          <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">Projects</h1>
        </div>
      </div>
      <div className='bg-card -mt-6'>
        {/* Map Projects from UserData to ProjectCards */}
        <div className='container grid-cols-1 md:grid-cols-2 py-20'>
            {/* ProjectCards go here */}
            <BentoGrid>
                {
                    userData.projects.map((project, idx) => (
                        <BentoGridItem
                            key={idx}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            link={project.link}
                            imgUrl={baseImgUrl + project.imgUrl}
                        />
                    ))
                }
            </BentoGrid>
        </div>
        


      </div>
    </section>
  )
}

export default Projects
