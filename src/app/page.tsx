import HomeCard from "@/components/homepage/HomeCard";
import userData from "@/constants/user";

export default function Home() {
  return (
    <main>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-8 text-center flex-col max-w-[1200px]">
          <div className="flex flex-wrap justify-center items-center text-center py-4">
            <h1 className="mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
              The Intersection of Code and Capture.
            </h1>
          </div>
          <p className="mx-auto text-muted-foreground text-xl md:text-2xl">
            {userData.heroText}
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto text-foreground p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HomeCard
            title="Experience"
            description="View the timeline of my professional and academic career."
            buttonText="View Experience"
            href="/experience"
          />
          <HomeCard
            title="Projects"
            description="Check out some of my favorite projects I have worked on."
            buttonText="View Projects"
            href="/projects"
          />
          <HomeCard
            title="Photography"
            description="See some of my favorite photos."
            buttonText="View Photography"
            href="/photography"
          />
          <HomeCard
            title="About Me"
            description="Learn more about me and my interests."
            buttonText="About Me"
            href="/about"
          />
        </div>
      </div>
    </main>
  );
}
