import React, { useState } from "react";
import HardSkillCard from "./hard-skill-card";
import Container from "../container";
import { Button } from "flowbite-react";

const HardSkillsData = [
  {
    skillName: "React",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "JavaScript",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "TypeScript",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "NextJS",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "HTML5",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "CSS",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "Tailwind",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "Github",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "Cypress",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "React Testing Library",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "MongoDB",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
  {
    skillName: "Docker",
    percentage: 70,
    level: "Intermediate",
    bgColor: "bg-gray-300",
    circleColor: "#007bff",
    image: "/img/react.png",
  },
];

const HardSkills: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [expanded, setExpanded] = useState(false);

  const toggleSkills = () => {
    if (expanded) {
      setVisibleCount(6);
    } else {
      setVisibleCount(HardSkillsData.length);
    }
    setExpanded(!expanded);
  };

  return (
    <Container title="HARD SKILLS">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {HardSkillsData.slice(0, visibleCount).map((skill) => (
            <HardSkillCard
              key={skill.skillName}
              skillName={skill.skillName}
              percentage={skill.percentage}
              level={skill.level}
              bgColor={skill.bgColor}
              circleColor={skill.circleColor}
              image={skill.image}
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

export default HardSkills;
