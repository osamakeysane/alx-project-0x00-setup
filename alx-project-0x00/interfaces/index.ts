export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string; // Text that will appear on the button
  size?: "small" | "medium" | "large"; // Optional: button size
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // Optional: button border radius
  styles?: string; // Optional: any additional Tailwind CSS classes
}
