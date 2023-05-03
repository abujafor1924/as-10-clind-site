import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto text-center p-12">
      <h1 className="text-5xl font-bold p-6 ">
        <span className="text-yellow-700">Chef</span> Queen
      </h1>
      <div className="flex justify-center p-6">
        <button className="w-16 h-16 rounded-full border-2 text-yellow-700 bg-slate-50 hover:bg-cyan-600 text-4xl mx-2">
          <FaFacebookF className="text-yellow-700 mx-auto" />
        </button>
        <button className="w-16 h-16 rounded-full border-2 text-yellow-700 bg-slate-50 hover:bg-cyan-600 text-4xl mx-2">
          <FaTwitter className="text-yellow-700 mx-auto" />
        </button>
        <button className="w-16 h-16 rounded-full border-2 text-yellow-700 bg-slate-50 hover:bg-cyan-600 text-4xl mx-2">
          <FaLinkedinIn className="text-yellow-700 mx-auto" />
        </button>
        <button className="w-16 h-16 rounded-full border-2 text-yellow-700 bg-slate-50 hover:bg-cyan-600 text-4xl mx-2">
          <FaInstagramSquare className="text-yellow-700 mx-auto" />
        </button>
      </div>
      <p>© Domain. All Rights Reserved. Designed by HTML .... ... ..</p>
    </div>
  );
};

export default Footer;
