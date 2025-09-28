'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

function HeroSection() {
  return (
    <main role="main" aria-label="Hero section">
      <section 
        className="min-h-screen flex flex-col lg:flex-row items-center relative overflow-hidden w-full"
        style={{ 
          backgroundColor: '#ffffff',
          paddingTop: '80px',
          minHeight: '100vh'
        }}
        aria-label="Introduction and profile"
      >
        {/* Vertical Text - Left Edge */}
        <div 
          className="absolute left-2 top-0 bottom-0 flex flex-col justify-center py-20 px-4 hidden lg:flex"
          style={{ 
            height: 'calc(100vh - 80px)',
            zIndex: 10,
            maxWidth: '120px',
            minHeight: '400px'
          }}
        >
          <p 
            className="m-0 text-xs font-normal tracking-wider uppercase whitespace-nowrap mb-16"
            style={{ 
              color: '#000000',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              textOrientation: 'mixed',
              lineHeight: '1.1'
            }}
          >
            Full Stack Engineer
          </p>
          <p 
            className="m-0 text-xs font-normal tracking-wider uppercase whitespace-nowrap"
            style={{ 
              color: '#000000',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              textOrientation: 'mixed',
              lineHeight: '1.1'
            }}
          >
        Product Developer
          </p>
        </div>

        {/* Main Content - Left Column */}
        <div className="z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start p-8 lg:pl-28">
          <article 
            className="w-full max-w-xl text-center lg:text-left"
            aria-label="Personal introduction and statistics"
          >
          {/* Statistics Container */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-6 sm:mb-8 justify-center lg:justify-start">
            <div aria-label="Projects completed">
              <span 
                className="block text-3xl sm:text-4xl lg:text-5xl font-light leading-none mb-1"
                style={{ color: '#000000' }}
              >
                +20
              </span>
              <span 
                className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider"
                style={{ color: '#333333' }}
              >
                Projects Automated 
              </span>
            </div>
            <div aria-label="Startups raised">
              <span 
                className="block text-3xl sm:text-4xl lg:text-5xl font-light leading-none mb-1"
                style={{ color: '#000000' }}
              >
                +10
              </span>
              <span 
                className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider"
                style={{ color: '#333333' }}
              >
                Technologies Mastered
              </span>
            </div>
            <div aria-label="Startups raised">
              <span 
                className="block text-3xl sm:text-4xl lg:text-5xl font-light leading-none mb-1"
                style={{ color: '#000000' }}
              >
                +6
              </span>
              <span 
                className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider"
                style={{ color: '#333333' }}
              >
                Products Developed
              </span>
            </div>
          </div>

          {/* Main Hello Headline */}
          <h1 
            className="text-8xl sm:text-7xl lg:text-8xl xl:text-9xl font-extralight leading-none m-0 mb-4"
            style={{ 
              color: '#000000',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '0.85'
            }}
          >
            Hello
          </h1>

          {/* Sub-headline */}
          <p 
            className="text-lg sm:text-xl lg:text-2xl mt-4 font-normal mb-8 sm:mb-12"
            style={{ 
              color: '#000000',
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            — It&apos;s Venu Tejaswi 
          </p>

          {/* Scroll Down Indicator */}
          <Link 
            href="#about"
            className="flex flex-col items-center lg:items-start no-underline mt-8 sm:mt-12 text-sm hover:opacity-70 transition-opacity duration-300"
            style={{ color: '#000000' }}
            aria-label="Scroll to about section"
          >
            <span>Scroll down</span>
            <span className="text-xl mt-1" aria-hidden="true">
              <FaArrowDown />
            </span>
          </Link>
          </article>
        </div>
        
        {/* Right Column - Image */}
        <aside 
          className="w-full lg:w-1/2 h-screen absolute top-9 right-5"
          aria-label="Profile image"
        >
          <div className="relative w-full h-full">
            <Image
              src="/profile1.svg"
              alt={`Professional headshot of ${personalData.name}, a design wizard`}
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </aside>
      </section>
    </main>
  );
};

export default HeroSection;