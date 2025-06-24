import React from "react";
import Image from "next/image";

const Photography = () => {
  const baseImgUrl = "/photography";
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-16 md:mt-60">
        <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
          Photography
        </h1>
      </div>
      <div className="bg-card -mt-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
          {[...Array(10)].map((x, i) => (
            <div
              key={i}
              className="max-w-[100%] relative w-full aspect-[3/2] overflow-hidden shadow-xl group"
            >
              {" "}
              <Image
                src={`${baseImgUrl}/${i + 1}.jpg`}
                className="transition-all duration-300
             group-hover:scale-105 group-hover:brightness-110"
                alt="project.title"
                width={600}
                height={600}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
