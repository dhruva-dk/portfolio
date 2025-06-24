import HomeCard from "@/components/home/HomeCard";
import userData from "@/constants/user";

export default function Home() {
  return (
    <section className="container">
      <div className="w-full py-12 md:py-20 text-center flex-col">
        <div className="flex flex-wrap justify-center items-center text-center py-4">
          <h1 className="mr-2 text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
            The Intersection of Code and Capture.
          </h1>
        </div>
        <p className="mx-auto text-muted-foreground text-xl md:text-2xl">
          {userData.home.heroText}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-20">
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
    </section>
  );
}
