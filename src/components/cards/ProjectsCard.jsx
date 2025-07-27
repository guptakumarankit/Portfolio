import React from 'react'

const ProjectsCard = ({data}) => {
    // console.log(data.tags);
  return (
        <div className="border-2 border-gray-700 rounded-2xl text-white flex flex-col gap-5 md:w-1/2 p-4">
            <img src={data.image}  alt={data.title} className='rounded' />
            <div className='text-2xl font-bold flex justify-center '>{data.title}</div>
            <div className='font-semibold text-gray-500'>{data.description}</div>
            <div className='flex gap-2 flex-wrap text-white font-semibold'>
                {
                    data.tags.map((techstack) => (
                        <button className='border-2 border-gray-600 rounded-2xl px-2 text-gray-200' key={techstack}>{techstack}</button>
                    ))
                }
            </div>
            <div className='flex md:flex-row flex-col gap-4 md:gap-8'>
                <button className="inline-block text-white px-5 py-1 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105" style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
                    <a href={data.github} target='_blank'>Source Code</a>
                </button>
                <button className="inline-block text-white py-1 px-5 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105" style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
                    <a href={data.livePage} target='_blank'>Live-Page</a>
                </button>
            </div>
        </div>
  )
}

export default ProjectsCard
