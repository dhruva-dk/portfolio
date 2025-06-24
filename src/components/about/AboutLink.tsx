import React from "react";

type AboutLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const AboutLink: React.FC<AboutLinkProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <div className="flex flex-row justify-start items-center">
    <a
      {...rest}
      className={`flex items-center space-x-4 group text-lg font-bold text-muted-foreground overflow-hidden ${className}`}
    >
      <span className="my-4">&rarr;</span>
      <span className="relative">
        <span className="absolute bottom-0 left-0 h-0.5 w-full -translate-x-40 bg-muted-foreground transition-transform duration-300 group-hover:translate-x-0" />
        {children}
      </span>
    </a>
  </div>
);

export default AboutLink;
