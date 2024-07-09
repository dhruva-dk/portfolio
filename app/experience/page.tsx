import React from 'react'
import userData from '@/constants/user'
import { ExperienceCard } from '@/components/experience/ExperienceCard'

const Experience = () => {
  return (
    <section>
      <div className='max-w-6xl mx-auto mt-16 md:mt-60'>
        <div className=' container'>
          <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">Experience</h1>
        </div>
      </div>
      <div className='bg-card -mt-6'>
        {/* Map experiences from userData to ExperienceCards */}
        <div className='container flex items-center py-20'>
          <div className='flex flex-col items-center gap-4 w-[100%]'>
          {userData.experience.map((exp, idx) => (
            <>

              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
            
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience
