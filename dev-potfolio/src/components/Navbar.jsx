import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(true);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECT", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? 'bg-white text-gray-900' : 'text-white'}`}>
        <div className="flex items-center justify-between">
          <div className="mx-7">
            <h4 className="text-4xl uppercase font-bold">
              Ra<span className="text-cyan-600">BB</span>I
            </h4>
          </div>
          <div className="text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
            <ul className="flex items-center gap-1 py-2 text-lg">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
