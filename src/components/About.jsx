import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div id='about' className='text-white mt-10'>
      <div className='ml-[10%] mr-[10%] md:flex'>
        <div className='md:w-1/2 space-y-2'>
        {/* left side */}
        <h1 className='text-6xl font-bold'>Hi, I am</h1>
        <h2 className='text-6xl font-bold'>Ankit Gupta</h2>
        {/* skills heading with typing effect */}
        <h3 className='text-3xl font-semibold mb-4 text-[#8245ec] '>
            <span className='text-white'> I am a </span>
             <Typewriter
                words={[
                "Full Stack MERN Developer",
                "Compatative Coder", "FrontEnd Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </h3>

        <div className='text-gray-400 mb-10 mt-8 leading-relaxed'>
            I am a full-stack developer in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
        </div>

        <a href="https://drive.google.com/file/d/1TpQUPyjK8LSt9uFAN33zY9V5nNdEeNLM/view?usp=sharing"
         target='_blank'
         className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
         style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            DOWNLOAD CV
         </a>
        </div>

      {/* right side */}
      <div className='md:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
            <Tilt
                glareEnable={false}
                glareMaxOpacity={0.45}
                scale={1.05}
                transitionSpeed={250}
                className=" w-full h-full md:w-[80%]  bg-[#050414] text-white rounded-lg shadow-lg"
                >
                <img src={assets.profilePic}  alt="Ankit Gupta"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
            </Tilt>  
      </div>
      </div>
    </div>
  )
}

export default About
