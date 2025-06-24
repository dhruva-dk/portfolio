import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust the import path as needed

interface ExperienceCardProps {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  desc,
  year,
  company,
  companyLink,
}) => {
  return (
    <Card className="relative z-10 mx-4 w-full max-w-[500px] overflow-visible">
      <h2 className="absolute -top-8 text-xl md:-top-10 md:text-4xl text-muted-foreground font-extrabold">
        {year}
      </h2>

      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Link
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:underline"
        >
          {company}
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  );
};
