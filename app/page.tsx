import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}
