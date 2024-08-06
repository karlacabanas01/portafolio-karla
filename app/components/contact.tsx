import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import Container from "./container";

const ContactLink = () => {
  const contactData = [
    {
      href: "mailto:karlacabanas01@gmail.com",
      className: "bg-red-800 text-white hover:bg-gray-300",
      icon: <MdEmail />,
      label: "Contact",
    },
    {
      href: "https://www.linkedin.com/in/karla-a%C3%ADda-caba%C3%B1as-castillo-3548631bb/",
      className: "bg-blue-800 text-white hover:bg-gray-300",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/karlacabanas01",
      className: "bg-gray-800 text-white hover:bg-gray-300",
      icon: <BsGithub />,
      label: "GitHub",
    },
  ];

  return (
    <Container title={"CONTACT"}>
      {contactData.map((contact) => (
        <Link
          key={contact.label}
          href={contact.href}
          className={contact.className}
          target="_blank"
        >
          {contact.icon}
          <span>{contact.label}</span>
        </Link>
      ))}
    </Container>
  );
};

export default ContactLink;
