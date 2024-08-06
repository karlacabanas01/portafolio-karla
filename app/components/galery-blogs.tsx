import React from "react";
import { Card } from "flowbite-react";
import Link from "next/link";
import Container from "./container";
export function GaleryBlog() {
  // Cambiar Links
  const blogsData = [
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Introducción a CSS: Parte 1",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Introducción a CSS: Parte 2",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Introducción a CSS: Parte 3",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Introducción a CSS: Parte 4",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Testing Unitario FrontEnd",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
    {
      imgSrc: "/img/Programmer.png",
      title: "Introducción a CSS",
      description: "Introducción al Testing E2E",
      href: "https://www.kranio.io/blog/introduccion-a-css-parte-4-preprocesadores-y-frameworks-para-un-desarrollo-web-eficiente",
    },
  ];
  return (
    <Container title="BLOGS">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {blogsData.map((blog) => (
          <Link href={blog.href} target="_blank" key={blog.title}>
            <Card className="max-w-sm" imgSrc={blog.imgSrc} horizontal>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
