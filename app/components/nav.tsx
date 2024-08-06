"use client";
import React from "react";
import Link from "next/link";
interface NavLink {
  href: string;
  label: string;
}

const NavigationBar = () => {
  const links: NavLink[] = [
    { href: "#about", label: "About me" },
    { href: "#hard-skills", label: "Hard Skills" },
    { href: "#soft-skills", label: "Soft Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="bg-gray-900 p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          {links.map((link: any, index: any) => (
            <li key={link}>
              <Link
                href={link.href}
                className="text-white bg-transparent hover:bg-blue-500 px-4 py-3 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
