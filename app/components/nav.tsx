"use client";
import React from "react";
import Link from "next/link";
interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
}
const NavigationBar = ({ links }: Props) => {
  return (
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
  );
};

export default NavigationBar;
