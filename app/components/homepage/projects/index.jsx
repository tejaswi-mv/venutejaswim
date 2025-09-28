'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div id='projects' className="relative z-10 my-12 lg:my-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-12">
      <div className="sticky top-10">
        {/* Enhanced Background Effects */}
        <div className="w-[120px] h-[120px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full absolute -top-6 left-0 translate-x-1/2 filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="w-[60px] h-[60px] bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full absolute -top-2 left-8 translate-x-1/2 filter blur-2xl opacity-30"></div>
        
        <div className="flex items-center justify-start relative">
          {/* Innovative Title with Gradient */}
          <div className="relative">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
              PROJECTS
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          {/* Animated Line */}
          <div className="flex-1 ml-6 relative">
            <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="pt-24">
        {/* Innovative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Background Decorative Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-1/3 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-lg"></div>
          
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in h-full group relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card with Enhanced Styling */}
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[1px] bg-white dark:bg-gray-900 rounded-xl"></div>
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <ProjectCard project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {projectsData.length > 3 && (
          <div className="flex justify-center mt-12">
            <div className="relative group">
              {/* Button Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Main Button */}
              <button
                onClick={() => setShowAll(!showAll)}
                className="relative px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  {showAll ? (
                    <>
                      <span>Show Less</span>
                      <span className="text-lg">↑</span>
                    </>
                  ) : (
                    <>
                      <span>Show All {projectsData.length} Projects</span>
                      <span className="text-lg">↓</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;