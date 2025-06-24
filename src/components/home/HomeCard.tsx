import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface HomeCardProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const HomeCard: React.FC<HomeCardProps> = ({
  title,
  description,
  buttonText,
  href,
}) => {
  return (
    <Card
      className="min-h-[200px] flex flex-col justify-between 
                 transition-all duration-300 ease-in-out 
                 hover:shadow-lg hover:translate-x-2 hover:-translate-y-2"
    >
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm h-12">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link href={href} passHref>
          <Button variant={"outline"}>{buttonText}</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
