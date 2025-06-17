import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuLinks.map((link) => link.link.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-50 ${
        sticky ? "bg-slate-900/90 backdrop-blur-sm" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4 md:px-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-cyan-600">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuLinks.map((menu, i) => (
              <a
                key={i}
                href={menu.link}
                className={`text-sm font-medium ${
                  activeSection === menu.link.slice(1)
                    ? "text-cyan-600"
                    : "text-gray-300 hover:text-cyan-500"
                } transition-colors duration-300`}
                onClick={() => setActiveSection(menu.link.slice(1))}
              >
                {menu.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-gray-300 hover:text-cyan-500 transition-colors duration-300"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: "60px" }}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu Sidebar */}
        <div
          className={`md:hidden fixed top-[60px] right-0 w-64 h-[calc(100vh-60px)] bg-slate-900/95 backdrop-blur-md 
            shadow-xl transition-transform duration-300 ease-in-out transform
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col items-start gap-6 p-6">
            {menuLinks.map((menu, i) => (
              <a
                key={i}
                href={menu.link}
                onClick={() => {
                  setOpen(false);
                  setActiveSection(menu.link.slice(1));
                }}
                className={`text-lg font-medium w-full px-4 py-2 rounded-lg
                  ${
                    activeSection === menu.link.slice(1)
                      ? "text-cyan-600 bg-slate-800"
                      : "text-gray-300 hover:text-cyan-500 hover:bg-slate-800"
                  } transition-all duration-300`}
              >
                {menu.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
