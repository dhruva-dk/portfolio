import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomeGrid() {
  return (
    <div className="text-foreground p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience Card */}
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>My tech stack and professional experience</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/experience" passHref>
                <Button variant="outline">View Details</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Projects Card */}
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>My personal and business software development projects</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/projects" passHref>
                <Button variant="outline">View Projects</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Real Estate Photography Card */}
          <Card>
            <CardHeader>
              <CardTitle>Real Estate Photography</CardTitle>
              <CardDescription>Portfolio of real estate photography work</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/real-estate-photography" passHref>
                <Button variant="outline">View Gallery</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Wildlife Photography Card */}
          <Card>
            <CardHeader>
              <CardTitle>Wildlife Photography</CardTitle>
              <CardDescription>Collection of wildlife photography shots</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/wildlife-photography" passHref>
                <Button variant="outline">View Gallery</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}