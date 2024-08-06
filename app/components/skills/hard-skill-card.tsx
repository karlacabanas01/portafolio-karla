"use client";
import Image from "next/image";
import React, { useState } from "react";

const HardSkillCard = ({
  skillName,
  percentage,
  level,
  bgColor,
  circleColor,
  image,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-row relative ${bgColor} p-4 rounded-lg w-72 h-72 flex items-center justify-center`}
      data-skill={skillName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Image width={200} height={200} src={image} alt={skillName} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h3 className="text-2xl font-bold mb-2">{skillName}</h3>
          <div className="circular-chart blue mx-auto w-32">
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
                stroke={circleColor}
                strokeWidth="2.8"
                strokeDasharray={`${percentage}, 100`}
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
                {percentage}%
              </text>
            </svg>
          </div>
          <div className="skill-level mt-2">{level}</div>
        </div>
      )}
    </div>
  );
};

export default HardSkillCard;
