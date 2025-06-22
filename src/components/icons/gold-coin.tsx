import { SVGProps } from 'react';

const GoldCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fill="#B8860B"
      fontSize="12"
      fontWeight="bold"
    >
      GOLD
    </text>
  </svg>
);

export default GoldCoin; 