import React, { useState } from "react";
import Image from "next/image";

const SoftSkillCard = ({ imageSrc, altText, title }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-2 w-72 h-72 ${isHovered ? "zoom-animation" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center justify-center w-full h-full bg-gray-300 rounded-md">
        <Image
          width={200}
          height={200}
          src={imageSrc}
          alt={altText}
          className="mb-2"
        />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default SoftSkillCard;
