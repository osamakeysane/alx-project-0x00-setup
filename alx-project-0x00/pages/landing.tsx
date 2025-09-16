import React from "react";
import Card from "@/components/Card"; // adjust path if needed
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <div className="flex gap-4 mt-4">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button
          title="Large Button"
          size="large"
          shape="rounded-full"
          styles="bg-green-500"
        />
      </div>
    </div>
  );
};

export default Landing;
