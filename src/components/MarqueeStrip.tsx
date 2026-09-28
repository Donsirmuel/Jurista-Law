import React from 'react';
import { TRUST_PHRASES } from '../data/firmData';

interface MarqueeStripProps {
  speed?: number; // duration in seconds
  onItemClick?: (phrase: string) => void;
}

export const MarqueeStrip: React.FC<MarqueeStripProps> = ({ speed = 25, onItemClick }) => {
  return (
    <div
      className="bg-[#173330] text-[#F1F4EC] overflow-hidden py-4 whitespace-nowrap border-y border-white/8 select-none relative z-20 group"
      aria-label="Key Firm Guarantees"
    >
      <div
        className="animate-marquee-continuous flex items-center"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Track 1 */}
        <div className="flex items-center shrink-0">
          {TRUST_PHRASES.map((phrase, idx) => (
            <div key={`track1-${idx}`} className="flex items-center shrink-0">
              <span
                onClick={() => onItemClick && onItemClick(phrase)}
                className={`font-serif text-[1.05rem] font-medium px-4 tracking-wide transition-colors ${
                  onItemClick ? 'cursor-pointer hover:text-[#C6902E]' : ''
                }`}
              >
                {phrase}
              </span>
              <span
                className="text-[#C6902E] font-normal px-2 text-xl leading-none select-none"
                aria-hidden="true"
              >
                •
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Identical duplicate for seamless 100% loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {TRUST_PHRASES.map((phrase, idx) => (
            <div key={`track2-${idx}`} className="flex items-center shrink-0">
              <span
                onClick={() => onItemClick && onItemClick(phrase)}
                className={`font-serif text-[1.05rem] font-medium px-4 tracking-wide transition-colors ${
                  onItemClick ? 'cursor-pointer hover:text-[#C6902E]' : ''
                }`}
              >
                {phrase}
              </span>
              <span
                className="text-[#C6902E] font-normal px-2 text-xl leading-none select-none"
                aria-hidden="true"
              >
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
