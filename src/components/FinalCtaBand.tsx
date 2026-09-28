import React from 'react';

interface FinalCtaBandProps {
  onOpenBooking: () => void;
}

export const FinalCtaBand: React.FC<FinalCtaBandProps> = ({ onOpenBooking }) => {
  return (
    <section className="bg-[#173330] text-[#F1F4EC] py-20 px-6 sm:px-8 text-center relative overflow-hidden">
      <div className="max-w-[700px] mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-semibold text-[#F1F4EC] mb-4 tracking-tight leading-tight">
          Ready to talk about your case?
        </h2>
        <p className="text-[#BDD0C9] text-base sm:text-lg mb-8 max-w-[46ch] mx-auto leading-relaxed">
          Free consultation. No obligation. A real answer, not a sales pitch.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#C6902E] hover:bg-[#d49c33] text-[#173330] px-8 py-3.5 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-[0_6px_20px_rgba(198,144,46,0.3)] cursor-pointer"
          >
            Book a consultation
          </button>
          <a
            href="tel:+20116114574"
            className="text-[#F1F4EC] hover:text-[#C6902E] font-bold text-sm sm:text-base border-b-2 border-[#C6902E] pb-1 transition-colors flex items-center gap-2"
          >
            <span>Call +2 011 611-4574</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
