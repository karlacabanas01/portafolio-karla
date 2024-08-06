"use client";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Container from "./components/container";
import AboutMe from "./components/about-me";
import NavigationBar from "./components/nav";
import ContactLink from "./components/contact";
import HardSkills from "./components/skills/hard-skill";
import SoftSkills from "./components/skills/soft-skill";
import { Footer } from "flowbite-react";
import { GaleryBlog } from "./components/galery-blogs";
import GaleryProyect from "./components/galery-proyect";

export default function Home() {
  const links = [
    { href: "#about", label: "About me" },
    { href: "#hard-skills", label: "Hard Skills" },
    { href: "#soft-skills", label: "Soft Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="bg-gray-900 p-4 sticky top-0 z-50">
        <NavigationBar links={links} />
      </header>

      <AboutMe
        name="Karla Cabañas"
        fullName="Karla Aída Cabañas Castillo"
        age={24}
        city="Talca"
        imageUrl="/img/image.jpeg"
      />

      <HardSkills />
      <SoftSkills />

      <GaleryProyect />
      <GaleryBlog />

      <ContactLink />

      <Footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <p>&copy; 2024 karcabcas. Todos los derechos reservados.</p>
      </Footer>
    </>
  );
}
