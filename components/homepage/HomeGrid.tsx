import HomeCard from './HomeCard';

export default function HomeGrid() {
  return (
    <div className="text-foreground p-12 ">
      <div className="max-w-6xl mx-auto">
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
    </div>
  );
}
