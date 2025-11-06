import React from 'react'
import { projects } from "../../reset.js";

const work = () => {
  return (
    <section id='work' className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my recent projects and work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 transition-transform duration-300"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#8245ec] text-white text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8245ec] hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8245ec] hover:text-white transition-colors"
              >
        
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default work
