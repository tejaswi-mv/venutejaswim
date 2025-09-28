"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <p className="font-medium mb-4 sm:mb-5 text-black text-lg sm:text-xl uppercase">Contact with me</p>
      <div className="max-w-3xl text-black rounded-lg border border-black p-4 sm:p-5 bg-white">
        <p className="text-xs sm:text-sm text-gray-600">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base text-black">Your Name: </label>
            <input
              className="bg-white w-full border rounded-md border-gray-300 focus:border-black ring-0 outline-0 transition-all duration-300 px-3 py-2.5 text-black placeholder-gray-400 text-sm sm:text-base"
              type="text"
              maxLength="100"
              required={true}
              placeholder="Enter your full name"
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base text-black">Your Email: </label>
            <input
              className="bg-white w-full border rounded-md border-gray-300 focus:border-black ring-0 outline-0 transition-all duration-300 px-3 py-2.5 text-black placeholder-gray-400 text-sm sm:text-base"
              type="email"
              maxLength="100"
              required={true}
              placeholder="Enter your email address"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-xs sm:text-sm text-red-600">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base text-black">Your Message: </label>
            <textarea
              className="bg-white w-full border rounded-md border-gray-300 focus:border-black ring-0 outline-0 transition-all duration-300 px-3 py-2.5 text-black placeholder-gray-400 text-sm sm:text-base resize-none"
              maxLength="500"
              name="message"
              required={true}
              placeholder="Enter your message here..."
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-xs sm:text-sm text-red-600">
              All fields are required!
            </p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-black text-white px-6 sm:px-8 md:px-12 py-3 sm:py-3.5 text-center text-sm sm:text-base font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:bg-gray-800 hover:text-white hover:no-underline w-full sm:w-auto"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                <span>Sending Message...</span>:
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={18} />
                </span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;