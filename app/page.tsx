import Image from "next/image";
import Link from "next/link";
import { Card } from "flowbite-react";
import { FaLinkedin } from "react-icons/fa";
import { MdContactMail, MdEmail } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import { DiGithub } from "react-icons/di";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <header className="bg-gray-900 p-4 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#about"
                className="text-white bg-transparent hover:bg-blue-500 px-4 py-3 rounded"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-white bg-transparent hover:bg-blue-500 px-4 py-3 rounded"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#soft-skills"
                className="text-white bg-transparent hover:bg-blue-500 px-4 py-3 rounded"
              >
                Soft Skills
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-white bg-transparent hover:bg-blue-500 px-4 py-3 rounded"
              >
                Projects
              </Link>
            </li>
          </ul>

          <div className="space-x-4">
            <a
              href="#"
              className="btn bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
              target="_blank"
            >
              <i className="fa fa-download"></i>
              <span>Descargar CV</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="w-full p-6 flex">
        <div className="flex flex-col w-1/2 ml-3 mt-8">
          <h1 className="text-2xl font-bold text-center">ABOUT ME</h1>
          <h2 className="text-xl">Hi! Im Tu Nombre</h2>
          <p className="text-lg">
            My full name is Tu Nombre Completo, I am XX years old and I am very
            excited to get my first job in a company. I am a responsible,
            honest, self-taught, and organized young man. Finally, I live in Tu
            Ciudad.
          </p>
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <Image
            width={150}
            height={150}
            src="/img/image.jpeg"
            alt="Tu Nombre"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Skills */}
      <Card className="text-center mt-8 mb-8 ">
        <h2 className="text-4xl font-bold mb-4">SKILLS</h2>
        <div className="flex flex-auto mr-2">
          <div className="flex flex-wrap justify-center gap-4 mr-2">
            <div className="flex flex-wrap justify-center gap-4 w-1/4 p-2">
              <div
                className="skill relative bg-blue-700 p-4 rounded-lg w-72 h-72 flex items-center justify-center"
                data-skill="HTML"
              >
                <div className="skill-content text-center">
                  <h3 className="text-xl font-bold mb-2">React</h3>
                  <div className="circular-chart blue mx-auto">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <circle
                        className="circle-bg"
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#eeeeee"
                        strokeWidth="2.8"
                      ></circle>
                      <circle
                        className="circle"
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#007bff"
                        strokeWidth="2.8"
                        strokeDasharray="70, 100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                      ></circle>
                      <text
                        x="18"
                        y="20.35"
                        className="percentage"
                        fill="#ffffff"
                        fontSize="5"
                        textAnchor="middle"
                      >
                        70%
                      </text>
                    </svg>
                  </div>
                  <div className="skill-level mt-2">Intermediate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 w-1/4 p-2">
              <div
                className="skill relative bg-blue-700 p-4 rounded-lg w-72 h-72 flex items-center justify-center"
                data-skill="HTML"
              >
                <div className="skill-content text-center">
                  <h3 className="text-xl font-bold mb-2">React</h3>
                  <div className="circular-chart blue mx-auto">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <circle
                        className="circle-bg"
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#eeeeee"
                        strokeWidth="2.8"
                      ></circle>
                      <circle
                        className="circle"
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#007bff"
                        strokeWidth="2.8"
                        strokeDasharray="70, 100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 18 18)"
                      ></circle>
                      <text
                        x="18"
                        y="20.35"
                        className="percentage"
                        fill="#ffffff"
                        fontSize="5"
                        textAnchor="middle"
                      >
                        70%
                      </text>
                    </svg>
                  </div>
                  <div className="skill-level mt-2">Intermediate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Soft Skills */}
      <Card className="text-center mt-8 mb-8">
        <h2 className="text-3xl font-bold mt-10">SOFT SKILLS</h2>
        <div className="flex flex-wrap justify-center gap-4 mr-2">
          <Card className="flex flex-wrap justify-center w-1/4 p-2">
            <div className="soft-skill">
              <Image
                width={150}
                height={150}
                src="/img/image.png"
                alt="Communication"
                className="mb-2"
              />
              <h3 className="text-xl font-bold">Communication</h3>
            </div>
          </Card>

          <Card className="flex flex-wrap justify-center w-1/4 p-2">
            <div className="soft-skill">
              <Image
                width={150}
                height={150}
                src="/img/image.png"
                alt="Communication"
                className="mb-2"
              />
              <h3 className="text-xl font-bold">Communication</h3>
            </div>
          </Card>

          <Card className="flex flex-wrap justify-center w-1/4 p-2 mb-10">
            <div className="soft-skill">
              <Image
                width={150}
                height={150}
                src="/img/image.png"
                alt="Communication"
                className="mb-2"
              />
              <h3 className="text-xl font-bold">Communication</h3>
            </div>
          </Card>
        </div>
      </Card>

      <Card id="projects" className="text-center mt-8 mb-8">
        <h2 className="text-3xl font-bold mb-4">PROJECTS</h2>
      </Card>

      <Card className="flex flex-col items-center text-center p-4">
        <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:your.email@example.com"
            className="flex items-center bg-gray-500 text-white rounded-full px-4 py-2 space-x-2 hover:bg-gray-600"
          >
            <MdEmail />
            <span>Contact</span>
          </Link>

          <Link
            href="https://linkedin.com/in/your-profile"
            className="flex items-center bg-blue-700 text-white rounded-full px-4 py-2 space-x-2 hover:bg-blue-800"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/your-username"
            className="flex items-center bg-gray-900 text-white rounded-full px-4 py-2 space-x-2 hover:bg-gray-700"
          >
            <BsGithub />
            <span>GitHub</span>
          </Link>
        </div>
      </Card>

      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
