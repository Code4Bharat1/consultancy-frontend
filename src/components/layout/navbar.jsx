"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "lucide-react"; // Profile icon

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [navbarBg, setNavbarBg] = useState("bg-transparent text-white"); // Default transparent
  const pathname = usePathname();

  useEffect(() => {
    setActiveSection(pathname);

    // Check if on login or register page and apply white background
    if (pathname.includes("login") || pathname.includes("register")) {
      setNavbarBg("bg-white shadow-md text-orange-500");
      return; // Skip scroll detection for login/register pages
    }

    // Function to detect scroll and change navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white shadow-md text-orange-500"); // White navbar when scrolled
      } else {
        setNavbarBg("bg-transparent text-white"); // Transparent when at top
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 transition-all duration-300 ${navbarBg}`}>
      {/* Logo on the Left */}
      <div className="text-4xl font-extrabold tracking-wide">Consultancy</div>

      {/* Navbar Links on the Right */}
      <div className="flex items-center space-x-6">
        <Link key="home" href={`/`}>
          <span
            className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
              activeSection === `/`
                ? "bg-orange-500 text-white shadow-md"
                : "hover:bg-orange-500 hover:text-white"
            }`}
          >
            Home
          </span>
        </Link>
        {["AboutUs", "ContactUs"].map((section) => {
          const link = section.toLowerCase().replace(" ", "-");
          return (
            <Link key={section} href={`/#${link}`}>
              <span
                className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  activeSection === `/${link}`
                    ? "bg-orange-500 text-white shadow-md"
                    : "hover:bg-orange-500 hover:text-white"
                }`}
              >
                {section}
              </span>
            </Link>
          );
        })}

        {/* Profile Icon */}
        <Link href="/profile">
          <User className="cursor-pointer hover:opacity-80" size={24} />
        </Link>
      </div>
    </nav>
  );
}
