import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white border-t border-cyan-700/30">
      <div className="flex flex-col items-center gap-2">
        <span>Copyright © Rabbi kindalo (jamadrac). All Rights reserved.</span>
        <a href="#home" className="text-cyan-400 hover:underline text-xs">Back to top ↑</a>
      </div>
    </div>
  );
};
 
export default Footer;
