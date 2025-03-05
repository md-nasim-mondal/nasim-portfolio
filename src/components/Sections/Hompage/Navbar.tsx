"use client";
import useAppStore from "@/store/useAppStore";
import { useState, useEffect } from "react";
interface LinkItem {
  id: string;
  label: string;
}

const links: LinkItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  //   { id: 'experience', label: 'Experience' },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { scrollScreen, setScrollScreen } = useAppStore();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setScrollScreen(true);
      } else {
        setScrollScreen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollScreen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.getElementById(link.id));
      let currentSection = "home";

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full p-6 ${
        scrollScreen
          ? "bg-gradient-to-r from-[#1FB382] to-[#24DFDE] shadow-2xl"
          : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='text-xl font-bold text-white'>My Website</div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex space-x-6'>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                className={`block text-lg font-semibold transition-colors duration-300  hover:text-gray-500 hover:underline  ${
                  activeSection === link.id
                    ? "font-extrabold text-gray-900 border-b-2 border-gray-900 text-xl"
                    : "text-white font-semibold"
                }`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white'
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`lg:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-teal-500 rounded-xl p-4 space-y-2 w-32 text-center ml-auto`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`/#${link.id}`}
                className={`block text-lg font-semibold py-2 transition-colors duration-300 ${
                  activeSection === link.id
                    ? "font-bold border-b-2 border-white rounded-lg"
                    : "text-white font-semibold"
                }`}
                onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
