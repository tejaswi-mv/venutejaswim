'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTheme } from '../../../contexts/ThemeContext';

function ProjectCard({ project }) {
  const { theme } = useTheme();

  return (
    <div className="bg-card border border-card-border relative rounded-lg bg-gradient-theme w-full h-full flex flex-col hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      {/* Header */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-secondary"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-secondary to-transparent"></div>
      </div>
      
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center ml-3 text-primary text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="px-3 sm:px-4 lg:px-8 pb-3 sm:pb-4">
          <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              unoptimized={project.image.endsWith('.gif')}
            />
          </div>
        </div>
      )}

      {/* Project Info */}
      <div className="overflow-hidden border-t-[2px] border-primary/20 px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-8 flex-1 flex flex-col">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-text-primary font-semibold text-base sm:text-lg mb-2">{project.name}</h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            {project.description}
          </p>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-3 sm:mb-4">
            <h4 className="text-text-primary font-medium text-xs sm:text-sm mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        <div className="mb-3 sm:mb-4">
          <h4 className="text-text-primary font-medium text-xs sm:text-sm mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="px-1.5 sm:px-2 py-1 bg-secondary/10 text-secondary text-xs rounded border border-secondary/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Role */}
        <div className="mb-3 sm:mb-4">
          <span className="text-text-secondary text-xs sm:text-sm">Role: </span>
          <span className="text-orange-400 font-medium text-xs sm:text-sm">{project.role}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              <FaPlay size={12} />
              Live Demo
              <FaExternalLinkAlt size={10} />
            </Link>
          )}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-xs sm:text-sm font-medium"
            >
              <FaGithub size={12} />
              Source Code
              <FaExternalLinkAlt size={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;