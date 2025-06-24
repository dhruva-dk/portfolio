import userData from "@/constants/user";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-16 md:mt-60">
        <div className="container">
          <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
            About Me
          </h1>
        </div>
      </div>
      <div className="bg-card -mt-6">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-5 md:gap-y-20 gap-x-20 px-8">
          <div className="inline-flex flex-col">
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={`mailto:${userData.info.email}`}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Email
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.info.resumeUrl}
                  download="resume.pdf"
                  target="_blank"
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Resume
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.info.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.info.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="text-xl md:text-2xl font-bold mt-4">
              Key Technologies:
            </h1>

            <div className="flex flex-row flex-wrap justify-center sm:justify-start mb-8 items-center w-full">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="Java"
                width={80}
                height={80}
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="Python"
                width={80}
                height={80}
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="TypeScript"
                width={80}
                height={80}
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform dark:invert"
                alt="React"
                width={80}
                height={80}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
