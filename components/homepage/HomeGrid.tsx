import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import ContactButton from '@/components/homepage/ContactButton'
import HomeCard from "./HomeCard"

export default function HomeGrid() {
  return (
    <div className="text-foreground p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* home cards for experience, projects, real estate photography, wildlife photography */}
          <HomeCard title="Experience" description="View my tech stack and professional experience" buttonText="View Experience" href="/experience" />
          <HomeCard title="Projects" description="Check out some of my favorite projects I have worked on" buttonText="View Projects" href="/projects" />
          <HomeCard title="Real Estate Photography" description="See my real estate photos to decide if you want my services" buttonText="View Real Estate" href="/real-estate" />
          <HomeCard title="Wildlife Photography" description="View my wildlife photography collection as it grows" buttonText="View Wildlife" href="/wildlife" />
          

          {/* Contact Card (spans 2 columns) */}
          <Card className="md:col-span-2 md:items-center md:text-center min-h-[200px] flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="md:text-3xl">Contact Me</CardTitle>
              <CardDescription className="md:text-xl">Have any questions? Get in touch for collaborations or inquiries</CardDescription>
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
