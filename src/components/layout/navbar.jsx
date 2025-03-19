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
      setNavbarBg("bg-white shadow-md text-blue-500");
      return; // Skip scroll detection for login/register pages
    }

    // Function to detect scroll and change navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-white shadow-md text-blue-500");
      } else {
        setNavbarBg("bg-transparent text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="text-4xl font-extrabold tracking-wide">Consultancy</div>

      <div className="flex items-center space-x-6">
        <Link href="/">
          <span className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${activeSection === "/" ? "bg-blue-500 text-white shadow-md" : "hover:bg-blue-500 hover:text-white"}`}>
            Home
          </span>
        </Link>
        {["AboutUs", "ContactUs"].map((section) => (
          <Link key={section} href={`/#${section.toLowerCase()}`}>
            <span className={`px-4 py-2 rounded-full font-semibold transition-all cursor-pointer ${activeSection === `/${section.toLowerCase()}` ? "bg-blue-500 text-white shadow-md" : "hover:bg-blue-500 hover:text-white"}`}>
              {section}
            </span>
          </Link>
        ))}

        <Link href="/profile">
          <User className="cursor-pointer hover:opacity-80" size={24} />
        </Link>
      </div>
    </nav>
  );
}
