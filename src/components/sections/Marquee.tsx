import React from 'react';
import { marqueeItems } from '../../data/portfolio';

export function Marquee(): JSX.Element {
  return (
    <div className="marquee-section relative z-10 w-full" aria-hidden="true">
      <div className="marquee-track">
        {/* Double the items for seamless infinite scroll loop */}
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={`${item}-${i}`} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}