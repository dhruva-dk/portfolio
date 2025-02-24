'use client';

import { cn } from '@/utils/cn';
import Link from 'next/link';
import Image from 'next/image';
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    //alternate between elements 3 and 2 columns wide
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto',

        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
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
  link?: string;
  imgUrl?: string;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-md group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
        className
      )}
    >
      <div className="max-w-[100%] relative w-full aspect-[16/9] overflow-hidden">
        <Link href={`${link}`} rel="noopener noreferrer" target="_blank">
          <Image
            src={`${imgUrl}`}
            alt="project.title"
            width={600}
            height={600}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '0.25rem',
            }}
          />
        </Link>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-xl mb-2 mt-2">{title}</div>
          <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 mb-4">
            {description}
          </div>
        </div>

        <div className="mt-auto font-sans font-semibold">{technologies}</div>
      </div>
    </div>
  );
};
