import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="w-full max-w-[400px] flex flex-col items-start gap-4 p-4 rounded-lg bg-white">
      <div className="w-full h-[250px] mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h2 className="text-[#1E1E1E] text-xl font-semibold font-montserrat">
        {title}
      </h2>
      <p className="text-[#1E1E1E] text-sm font-normal leading-relaxed font-montserrat">
        {description}
      </p>
      <button className="mt-4 px-5 py-2 text-base font-medium text-[#1E1E1E] bg-white border border-gray-200 rounded-md hover:bg-gray-100">
        Learn More
      </button>
    </div>
  );
};

export default Card;
