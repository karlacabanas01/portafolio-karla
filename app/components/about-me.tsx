import React from "react";
import Image from "next/image";

const AboutMe = ({ name, fullName, age, city, imageUrl }: any) => {
  return (
    <div className="flex flex-row items-center mt-8 text-center justify-center">
      <div className="flex flex-col w-1/2 p-4">
        <h1 className="text-3xl font-bold">ABOUT ME</h1>
        <h2 className="text-2xl beiruti-font-bold">Hi! Im {name}</h2>
        <p className="text-lg beiruti-font">
          My full name is {fullName}, I am {age} years old and I am very excited
          to get my first job in a company. I am a responsible, honest,
          self-taught, and organized young man. Finally, I live in {city}.
        </p>
      </div>

      <div className="flex flex-col w-1/3 justify-center items-center">
        <Image
          width={150}
          height={150}
          src={imageUrl}
          alt={name}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default AboutMe;
