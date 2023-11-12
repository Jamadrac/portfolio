import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECT", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (<div className="box-border bg-gray-800 text-gray-100">
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"}`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            Ra<span className="text-cyan-600">BB</span>I
          </h4>
        </div>
        <div className={`${sticky ? "md:bg-white/0" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden`}
          onClick={toggleMenu}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        {open && (
          <div className="md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0">
            <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
              {menuLinks?.map((menu, i) => (
                <li key={i} className="px-6 hover:text-cyan-600">
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav></div>

  );
};

export default Navbar;
