import userData from "@/constants/user";
import React from "react";
import AboutLink from "@/components/about/AboutLink";
import AboutTechImage from "@/components/about/AboutTechImage";

const About = () => {
  return (
    <section className="container">
      <div className="mt-16 md:mt-60">
        <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-y-20 gap-x-20 mx-auto">
        <div className="inline-flex flex-col">
          <h1 className="text-xl font-semibold">Links</h1>
          <div className="mt-4 ml-4">
            <AboutLink href={`mailto:${userData.info.email}`}>Email</AboutLink>
            <AboutLink href={userData.info.resumeUrl} download target="_blank">
              Resume
            </AboutLink>
            <AboutLink href={userData.info.socialLinks.github}>
              GitHub
            </AboutLink>
            <AboutLink href={userData.info.socialLinks.linkedin}>
              LinkedIn
            </AboutLink>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2">
          {userData.about.description?.map((desc, idx) => (
            <p key={idx} className="text-xl text-muted-foreground">
              {desc}
            </p>
          ))}
          <h1 className="text-xl md:text-2xl font-bold mt-4">
            Key Technologies:
          </h1>
          <div className="flex flex-row flex-wrap justify-center sm:justify-start mb-8 items-center w-full">
            <AboutTechImage
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Java"
            />
            <AboutTechImage
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="Python"
            />
            <AboutTechImage
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
            <AboutTechImage
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
