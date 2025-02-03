import React from "react";

export type ButtonProps = {
  label: string;
  color: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  color,
  size,
  onClick,
}) => {
  const colorClasses: Record<ButtonProps["color"], string> = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const sizeClasses: Record<ButtonProps["size"], string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const className = `rounded ${colorClasses[color]} ${sizeClasses[size]} hover:opacity-80`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
