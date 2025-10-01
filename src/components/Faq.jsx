"use client";

import { useState } from "react";
import Head from "next/head";
import { faqData } from "@/lib/Data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Frequently Asked Questions</title>
        <meta
          name="description"
          content="Get answers to common questions about our plumbing services"
        />
      </Head>

      <div className="container mx-auto ">
        <div className="  bg-white rounded-lg shadow-lg p-[10px] md:p-[40px] lg:p-[120px]">
          <div className="text-center mb-12">
            <h1 className="font-class text-[24px] md:text-[32px] lg:text-[48px] text-[#1B1743] mb-4 gap-[16px] md:gap-[4px] lg:gap-[16px]">
              Frequently asked questions
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className=" overflow-hidden">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text:[16px] md:text-[20px] lg:text-[28px] font-semibold text-[#1B1743]">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 py-4">
                      <p className="text-[#2A2F32] text-[14px] md:text-[14px] lg:text-[18px] font-[400px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
