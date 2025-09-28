'use client';

import Link from 'next/link';
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t border-gray-200 py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Venu Tejaswi. All Rights Reserved.
      </p>
      <p className="flex items-center justify-center gap-1 text-sm mt-2">
        Made with <FaHeart className="text-red-500" /> by Venu Tejaswi
      </p>
    </div>
  );
};

export default Footer;