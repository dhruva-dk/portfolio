import React from "react";
import userData from "@/constants/user";
import { ExperienceCard } from "@/components/experience/ExperienceCard";

const Experience = () => {
  return (
    <section className="container">
      <div className="mt-16 md:mt-60">
        <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-card -mt-6 py-20 flex flex-col items-center gap-4">
        {userData.experience.map((exp, idx) => (
          <React.Fragment key={idx}>
            <ExperienceCard
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === userData.experience.length - 1 ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-black dark:bg-white rounded-full z-10">
                  <div className="w-4 h-4 bg-black dark:bg-white rounded-full z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Experience;
