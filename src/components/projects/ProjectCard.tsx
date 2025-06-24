"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust the import path to your project structure

export const ProjectCard = ({
  className,
  title,
  description,
  technologies,
  link,
  imgUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  technologies?: string;
  link: string;
  imgUrl: string;
}) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg hover:translate-x-2 hover:-translate-y-2 transition-transform duration-200 flex flex-col",
        className
      )}
    >
      <CardHeader>
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
          {
            <Link href={link} rel="noopener noreferrer" target="_blank">
              <Image
                src={imgUrl || "/placeholder.png"} // Provide a fallback image
                alt={typeof title === "string" ? title : "Project image"}
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
          }
        </div>
      </CardHeader>
      <div className="flex flex-col flex-grow p-4">
        <CardTitle className="font-bold text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base mb-4">
          {description}
        </CardDescription>
        <div className="mt-auto">
          <p className="font-semibold text-sm">{technologies}</p>
        </div>
      </div>
    </Card>
  );
};
