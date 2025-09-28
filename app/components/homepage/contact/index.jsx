// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-black mx-4 sm:mx-6 lg:mx-8 xl:mx-12">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-black w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-black"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <ContactForm />
        <div className="lg:w-3/4">
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-9">
            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3 text-black">
              <MdAlternateEmail
                className="bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer flex-shrink-0"
                size={32}
              />
              <span className="break-all">{personalData.email}</span>
            </p>
            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3 text-black">
              <IoMdCall
                className="bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer flex-shrink-0"
                size={32}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-xl flex items-center gap-3 text-black">
              <CiLocationOn
                className="bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer flex-shrink-0"
                size={32}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-16 flex flex-wrap items-center gap-3 sm:gap-5 lg:gap-10">
            {personalData.github && (
              <Link target="_blank" href={personalData.github}>
                <IoLogoGithub
                  className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={40}
                />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link target="_blank" href={personalData.linkedIn}>
                <BiLogoLinkedin
                  className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={40}
                />
              </Link>
            )}
            {personalData.twitter && (
              <Link target="_blank" href={personalData.twitter}>
                <FaXTwitter
                  className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={40}
                />
              </Link>
            )}
            {personalData.stackOverflow && (
              <Link target="_blank" href={personalData.stackOverflow}>
                <FaStackOverflow
                  className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={40}
                />
              </Link>
            )}
            {personalData.facebook && (
              <Link target="_blank" href={personalData.facebook}>
                <FaFacebook
                  className="bg-gray-200 p-2 sm:p-3 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
                  size={40}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;