import React from "react";
import Image from "next/image";

interface AboutTechImageProps {
  src: string;
  alt: string;
}

const AboutTechImage: React.FC<AboutTechImageProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={80}
    height={80}
    className="h-20 w-20 mx-4 my-4 hover:scale-110 transition-transform"
    unoptimized
  />
);

export default AboutTechImage;
