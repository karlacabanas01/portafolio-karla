import { Card } from "flowbite-react";
import Container from "./container";

export function GaleryProyect() {
  const proyects = [
    {
      href: "https://page-post-3.vercel.app/",
      imgSrc: "/img/post3.png",
      imgAlt: "Meaningful alt text for an image that is not purely decorative",
      title: "Proyecto para post css",
      description: "Proyecto para post css",
    },
    {
      href: "https://page-post-3.vercel.app/",
      imgSrc: "/img/post3.png",
      imgAlt: "Meaningful alt text for an image that is not purely decorative",
      title: "Proyecto para post css",
      description: "Proyecto para post css",
    },
    {
      href: "https://page-post-3.vercel.app/",
      imgSrc: "/img/post3.png",
      imgAlt: "Meaningful alt text for an image that is not purely decorative",
      title: "Proyecto para post css",
      description: "Proyecto para post css",
    },
    {
      href: "https://page-post-3.vercel.app/",
      imgSrc: "/img/post3.png",
      imgAlt: "Meaningful alt text for an image that is not purely decorative",
      title: "Proyecto para post css",
      description: "Proyecto para post css",
    },
  ];

  return (
    <Container title={"PROYECTS"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {proyects.map((project) => (
          <Card
            key={project.title}
            className="max-w-sm"
            imgAlt={project.imgAlt}
            imgSrc={project.imgSrc}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default GaleryProyect;
