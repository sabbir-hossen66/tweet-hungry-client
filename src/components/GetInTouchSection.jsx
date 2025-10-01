"use client";
import { ArrowRight } from "lucide-react";

const GetInTouchSection = () => {
  return (
    <section className="w-full bg-white py-8 px-4 sm:py-12 md:py-16 lg:py-20 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0058FF] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-bold mb-4 sm:mb-6">
              Get In Touch
            </h2>

            <p className="text-white text-[14px] md:text-[14px] lg:text-[18px] mb-8 sm:mb-10 md:mb-12 leading-relaxed opacity-95 max-w-3xl mx-auto">
              Contact us now to enquire our plumbing services, whether you have
              a commercial project that requires support, or a domestic plumbing
              task that needs the attention of a trusted professional.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-[#0058FF] font-[700] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-[14px] md:text-[16px] lg:text-[16px]">
              Book a Professional Plumber
              <ArrowRight className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h[24px] sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
