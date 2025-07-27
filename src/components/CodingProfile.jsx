import React from 'react'
import { codingPlatform } from '../assets/assets';
import CodingProfileCard from './cards/CodingProfileCard';

const CodingProfile = () => {
  return (
     <div id='profile' className="mt-20 flex flex-col items-center text-white space-y-5 mx-[10%] text-center">
      <div className="border-b-4 border-[#8245ec] text-4xl font-bold">
        CODING PROFILE
      </div>
      <div className="text-2xl font-semibold text-gray-400 max-w-4xl">
        My education has been a journey of learning and development. Here are
        the details of my academic background.
      </div>

       <div className='rounded-2xl grid md:grid-cols-3 gap-10 mt-10' >
        {codingPlatform.map((data) => (
          <div key={data.id} className=''>
            <CodingProfileCard link={data.link} image={data.image} name={data.Name} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default CodingProfile
