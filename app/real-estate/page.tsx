import React from 'react';
import Image from 'next/image';

const RealEstate = () => {
  const baseImgUrl = '/real-estate';
  return (
    <section>
      <div className="max-w-6xl mx-auto mt-16 md:mt-60">
        <div className=" container">
          <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
            Real Estate Photography
          </h1>
        </div>
      </div>
      <div className="bg-card -mt-6">
        <div className="container grid grid-cols-1 md:grid-cols-2 py-20 gap-2">
          {[...Array(16)].map((x, i) => (
            <div
              key={i}
              className="max-w-[100%] relative w-full aspect-[3/2] overflow-hidden shadow-xl"
            >
              {' '}
              <Image
                src={`${baseImgUrl}/${i + 1}.jpg`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
