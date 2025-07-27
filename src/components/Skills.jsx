import React from 'react'
import { SkillsInfo } from '../assets/assets'
import SkillsCard from './cards/SkillsCard'

const Skills = () => {
  return (
    <div id='Skills' className='text-white mt-[10%] '>
      <div className='ml-[10%] mr-[10%] flex flex-col space-y-4 justify-center items-center'>
        <h1 className='border-b-3 border-[#8245ec] text-center text-4xl font-bold'>SKILLS</h1>
        <div className='font-semibold text-2xl text-center text-gray-400'>
            A collection of my technical skills and expertise honed through various projects
        </div>
        <div className='w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 '>
            {
               SkillsInfo.map((info) => (
                <SkillsCard key={info.title}  title={info.title} skills={info.skills}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Skills
