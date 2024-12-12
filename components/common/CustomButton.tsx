import React from "react";

interface CustomButtonProps {
  color: string;
  textColor: string;
  text: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({ color, textColor, text, className, onClick, type = "button" }: CustomButtonProps) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-md ${color} ${textColor} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
