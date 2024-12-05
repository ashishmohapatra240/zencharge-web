import React from "react";

interface CustomButtonProps {
  color?: string;
  textColor?: string;
  text?: string;
  isOutlined?: boolean;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "bg-white",
  textColor = "text-[#2D3E50]",
  text = "Button",
  isOutlined = false,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 
        ${isOutlined ? "border-2 border-[#F3F4F6]" : color}
        ${isOutlined ? "text-[#F3F4F6] font-semibold" : textColor}
        w-${isOutlined ? "[200px]" : "[160px]"} 
        h-[40px] px-4 py-3 rounded-[0px] text-base font-montserrat
        ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
