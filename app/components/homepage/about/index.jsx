// @flow strict

import { personalData } from "@/utils/data/personal-data";


function AboutSection() {
  return (
    <div id="about" className="my-8 sm:my-12 lg:my-16 relative mx-4 sm:mx-6 lg:mx-8 xl:mx-12">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-black w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-black"></span>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="font-semibold mb-6 sm:mb-8 text-white text-xl sm:text-2xl lg:text-3xl uppercase tracking-wider">
            Who I am?
          </p>
          <div className="bg-gradient-to-r from-white to-gray-100 dark:from-black dark:to-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-black dark:border-white">
            <p className="text-black dark:text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              {personalData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;