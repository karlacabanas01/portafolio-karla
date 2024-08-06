import React, { useState } from "react";
import Container from "../container";
import SoftSkillCard from "../soft-skill-card";
import { Button } from "flowbite-react";

const softSkillsData = [
  {
    imageSrc: "/img/image.png",
    altText: "Communication",
    title: "Communication",
  },
  { imageSrc: "/img/image.png", altText: "Teamwork", title: "Teamwork" },
  {
    imageSrc: "/img/image.png",
    altText: "Problem Solving",
    title: "Problem Solving",
  },
  {
    imageSrc: "/img/image.png",
    altText: "Adaptability",
    title: "Adaptability",
  },
  { imageSrc: "/img/image.png", altText: "Creativity", title: "Creativity" },
  { imageSrc: "/img/image.png", altText: "Work Ethic", title: "Work Ethic" },
  {
    imageSrc: "/img/image.png",
    altText: "Time Management",
    title: "Time Management",
  },
];

const SoftSkills: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [expanded, setExpanded] = useState(false);

  const toggleSkills = () => {
    if (expanded) {
      setVisibleCount(6);
    } else {
      setVisibleCount(softSkillsData.length);
    }
    setExpanded(!expanded);
  };
  return (
    <Container title="SOFT SKILLS">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {softSkillsData.slice(0, visibleCount).map((skill) => (
            <SoftSkillCard
              key={skill.title}
              imageSrc={skill.imageSrc}
              altText={skill.altText}
              title={skill.title}
            />
          ))}
        </div>
        <Button
          onClick={toggleSkills}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {expanded ? "Mostrar menos" : "Ver más"}
        </Button>
      </div>
    </Container>
  );
};

export default SoftSkills;
