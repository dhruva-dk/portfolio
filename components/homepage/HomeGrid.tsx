import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import ContactButton from '@/components/homepage/ContactButton'
import HomeCard from "./HomeCard"

export default function HomeGrid() {
  return (
    <div className="text-foreground p-12 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* home cards for experience, projects, real estate photography, wildlife photography */}
          <HomeCard title="Experience" description="View the timeline of my professional and academic career." buttonText="View Experience" href="/experience" />
          <HomeCard title="Projects" description="Check out some of my favorite projects I have worked on." buttonText="View Projects" href="/projects" />
          <HomeCard title="Real Estate Photography" description="See some of my real estate photos if you are interested in my services." buttonText="View Real Estate" href="/real-estate" />
          <HomeCard title="Wildlife Photography" description="View a sample of my wildlife photography collection." buttonText="View Wildlife" href="/wildlife" />
          <HomeCard title="About Me" description="Learn more about me, my journey & my tech stack." buttonText="About Me" href="/about" />

          {/* Contact Card (spans 2 columns) */}
          <Card className=" min-h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl">Contact Me</CardTitle>
              <CardDescription className="text-sm h-12">Have any questions? Get in touch for collaborations or inquiries.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactButton />
            </CardContent>
          </Card>

          
          
        </div>
      </div>
    </div>
  )
}
