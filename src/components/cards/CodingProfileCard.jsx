import React from "react";
import Tilt from "react-parallax-tilt";

const CodingProfileCard = ({ link, image, name }) => {
  console.log("links", link);
  console.log("image", image);
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="">
        <Tilt
          glareEnable={false}
          glareMaxOpacity={0.45}
          scale={1.05}
          transitionSpeed={250}
          className="border border-gray-800 rounded-2xl"
        >
          <img className="h-60 w-90 rounded-2xl" src={image} alt={name} />
        </Tilt>
      </div>
    </a>
  );
};

export default CodingProfileCard;
