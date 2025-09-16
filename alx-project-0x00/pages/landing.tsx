import React from "react";
import Card from "@/components/Card"; // adjust path if needed

const Landing: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
