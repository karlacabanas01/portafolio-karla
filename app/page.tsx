"use client";
import AboutMe from "./components/about-me";
import NavigationBar from "./components/nav";
import ContactLink from "./components/contact";
import HardSkills from "./components/skills/hard-skill";
import SoftSkills from "./components/skills/soft-skill";
import { Footer } from "flowbite-react";
import { GaleryBlog } from "./components/galery-blogs";
import GaleryProyect from "./components/galery-proyect";

export default function Home() {
  return (
    <>
      <NavigationBar />

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
