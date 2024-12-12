import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="flex-1 min-w-[280px] max-w-[450px] flex flex-col gap-6 p-6 bg-white rounded-lg shadow-sm">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full aspect-video object-cover rounded-lg"
      />
      <h3 className="text-xl md:text-2xl font-bold font-montserrat text-[#1E1E1E]">
        {title}
      </h3>
      <p className="text-base font-normal font-montserrat text-[#1E1E1E] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
