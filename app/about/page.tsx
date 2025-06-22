import userData from '@/constants/user';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-16 md:mt-60">
        <div className=" container">
          <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
            About Me
          </h1>
        </div>
      </div>
      <div className="bg-card -mt-6">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-5 md:gap-y-20 gap-x-20 px-8">
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                Any inquiries? Send an{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email.
                </a>{' '}
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I am always open to new opportunities. If you are hiring, check
                my{' '}
                <a
                  href={userData.resumeUrl}
                  download="resume.pdf"
                  target="_blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  resume.
                </a>
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
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
                  href={userData.socialLinks.linkedin}
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
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xl md:text-3xl rounded-md px-2 py-2 inline-block font-bold mt-4">
              I have experience with:
            </h1>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start my-8 items-center w-full">
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
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="Flutter"
                width={80}
                height={80}
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="Firebase"
                width={80}
                height={80}
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
                alt="Git"
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
