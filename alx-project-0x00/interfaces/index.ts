export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"; // include all shapes
  styles: string; // <-- this line was missing, add it
}
