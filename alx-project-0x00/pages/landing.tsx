import React from "react";
import Card from "@/components/Card"; // adjust path if needed

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <div className="p-10 flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Landing;
