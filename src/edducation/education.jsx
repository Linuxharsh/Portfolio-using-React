import React from 'react'
import { education } from '../../reset.js'

const Education = () => {
  return (
    <section id='education' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My educational background and qualifications
        </p>
      </div>
      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {edu.img && (
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.school}</h3>
                <p className="text-[#8245ec] font-medium mb-2">{edu.degree}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.date}</p>
                <p className="text-gray-300 text-sm mb-2">Grade: {edu.grade}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
