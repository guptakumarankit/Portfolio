import React from "react";
import ProjectsCard from "./cards/ProjectsCard";
import { ProjectsInfo } from "../assets/assets";
import SlideIn from "./animation/SlideIn"; // <-- import the animation wrapper

const Projects = () => {
  return (
    <div id="project" className="mt-20 flex flex-col items-center text-center text-white space-y-5 ml-[10%] mr-[10%]">
      <div className="border-b-3 border-[#8245ec] text-4xl font-bold ">
        PROJECTS
      </div>
      <div className="text-2xl max-w-4xl font-semibold text-gray-400">
        A showcase of the projects I have worked on, highlighting my skills and
        experience in various technologies
      </div>

      <div className="mt-10 relative w-full h-full mb-10">
        {/* Vertical Line in the center */}
        <div className="absolute md:left-1/2 top-0 h-full border-5 rounded border-gray-300" />

        {ProjectsInfo.map((data) => (
          <div key={data.id} className="flex justify-center mt-12 relative">
            {data.id % 2 === 0 ? (
              <SlideIn direction="left">
                <div className="flex md:w-[80%] ml-7 md:ml-17">
                  <ProjectsCard data={data} />
                  {/* Circle */}
                  <span className="absolute w-10 h-10 rounded-full bg-green-500 border-3 md:left-1/2 -translate-x-11 md:-translate-x-4"></span>
                  {/* Triangle */}
                  <span className="absolute w-0 h-0 md:border-t-[10px] md:border-b-[10px] md:border-l-[25px] border-t-transparent border-b-transparent border-l-[#3c355e] left-[45%] mt-3 ml-3"></span>
                </div>
              </SlideIn>
            ) : (
              <SlideIn direction="right">
                <div className="md:w-[80%] md:flex md:justify-end ml-7 md:ml-39 ">
                  <ProjectsCard data={data} />
                  {/* Circle */}
                  <span className="absolute w-10 h-10 rounded-full bg-purple-600 border-3 -left-4 top-0 md:left-1/2 md:-translate-x-4"></span>
                  {/* Triangle */}
                  <span className="absolute w-0 h-0 md:border-t-[10px] md:border-b-[10px] md:border-r-[25px] border-t-transparent border-b-transparent border-r-[#3c355e] md:right-[45%] mt-3 mr-1"></span>
                </div>
              </SlideIn>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
