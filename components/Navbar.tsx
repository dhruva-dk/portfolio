import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Dhruva Kumar</h1>
          <p className="text-sm text-gray-400">Developer & Photographer</p>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/experience" className="hover:text-gray-300">Experience</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar