import Link from "next/link";

import userData from "@/constants/user";
import ModeToggle from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="border-solid border-b-2 border-muted ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="w-1/4">
          <Link className="block text-left" href="/">
            <h1 className="text-xl font-bold text-foreground">
              {userData.info.name}
            </h1>
          </Link>
        </div>
        <div className="flex-grow text-center hidden md:block">
          <div className="inline-flex items-center space-x-6">
            <Link
              href="/photography"
              className="text-muted-foreground hover:text-foreground"
            >
              Photography
            </Link>
            <Link
              href="/experience"
              className="text-muted-foreground hover:text-foreground"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
