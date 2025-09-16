import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
  styles = "",
}) => {
  // Define size classes
  let sizeClass = "";
  if (size === "small") sizeClass = "px-2 py-1 text-sm";
  else if (size === "medium") sizeClass = "px-4 py-2 text-base";
  else if (size === "large") sizeClass = "px-6 py-3 text-lg";

  return (
    <button
      className={`${sizeClass} ${shape} bg-blue-500 text-white font-semibold ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
