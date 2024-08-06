import { Card } from "flowbite-react";
import React from "react";

const Container = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="w-full text-center mb-8 mt-8">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 overflow-x-hidden">
        {children}
      </div>
    </Card>
  );
};

export default Container;
