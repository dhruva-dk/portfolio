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
    <div className="relative border bg-white dark:bg-black p-4 border-muted rounded-md shadow-xl  z-10 mx-4 max-w-[500px] justify-center  ">
      <h1 className="absolute -top-8 md:-top-10 text-xl md:text-4xl text-gray-500 font-extrabold">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-400 my-2">{desc}</p>
    </div>
  );
};
