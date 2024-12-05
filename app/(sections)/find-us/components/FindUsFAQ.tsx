"use client";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { useState } from "react";

const faqs = [
  {
    question: "What is ZenCharge?",
    answer: "ZenCharge is a network of EV charging stations...",
  },
  {
    question: "Where can I find ZenCharge stations?",
    answer: "Our stations are located across major highways...",
  },
  {
    question: "What services do you offer?",
    answer: "We offer fast EV charging, dining options...",
  },
  {
    question: "How can I become a franchise partner?",
    answer: "To become a franchise partner...",
  },
];

export default function FindUsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-0">
      <div>
        <h2 className="text-[32px] md:text-[47px] font-bold mb-3 md:mb-5 tracking-tight leading-tight">
          Questions?
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
          Explore our frequently asked questions to learn more about our EV
          charging services and how we can enhance your travel experience.
        </p>
        <button className="px-4 md:px-6 py-2.5 md:py-3 text-[#2D3E50] bg-white shadow-sm rounded text-sm md:text-base">
          Learn More
        </button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-black pb-3 md:pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl md:text-[27px] font-semibold tracking-tight leading-tight">
                {faq.question}
              </h3>
              <ChevronDownIcon
                className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <div className="mt-3 md:mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
