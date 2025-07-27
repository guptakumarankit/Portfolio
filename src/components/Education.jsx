import React from "react";
import { education } from "../assets/assets";
import EducationCards from "./cards/EducationCards";

const Education = () => {
  return (
    <div id="education" className="flex mt-10 flex-col items-center text-white space-y-5 mx-[10%] text-center">
      <div className="border-b-4 border-[#8245ec] text-4xl font-bold">
        EDUCATION
      </div>
      <div className="text-2xl font-semibold text-gray-400 max-w-4xl">
        My education has been a journey of learning and development. Here are
        the details of my academic background.
      </div>

      <div className="mt-4 h-full w-full grid md:grid-cols-3 gap-8">
          {
            education.map((data) => (
              <div key={data.id}  className="">
                <EducationCards data={data}/>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Education;
