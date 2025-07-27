import React from "react";

const EducationCards = ({ data }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1f1c2c] to-[#3c355e] border  p-6 rounded-3xl backdrop-blur-md text-white transition-transform transform hover:scale-105 duration-300 hover:shadow-[0_8px_30px_rgba(100,72,255,0.35)]">
      <div className="flex justify-center mb-4">
        <img
          src={data.logo}
          className="rounded-xl h-20 w-20 object-contain shadow-md"
          alt={data.name}
        />
      </div>
      <h1 className="font-semibold text-2xl text-center mb-2">{data.course}</h1>
      <div className="space-y-1 text-white/80">
        <p className="text-start font-medium">{data.name}</p>
        <div className="flex justify-between text-sm font-light">
          <p>{data.section}</p>
          <p>{data.percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCards;
