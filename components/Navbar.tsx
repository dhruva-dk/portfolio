import Link from 'next/link'
import { ModeToggle } from './ui/mode-toggle'

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
        <Link href="/">
            <h1 className="text-xl font-bold">Dhruva Kumar</h1>
            <p className="text-sm text-gray-400">Developer & Photographer</p>
        </Link>
        </div>
        <div className="flex items-center space-x-6 invisible md:visible">
          <Link href="/real-estate" className="hover:text-gray-300">Real Estate</Link>
          <Link href="/wildlife" className="hover:text-gray-300">Wildlife</Link>
          <Link href="/experience" className="hover:text-gray-300">Experience</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          
          
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar