// PlusIcon.js
import React from 'react';

interface PlusIconProps {
  className: string;
}

const PlusIcon = ({ className }: PlusIconProps) => (
  <svg className={className} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_111_306)">
      <path d="M10.5 20.5C10.5 21.3284 11.1716 22 12 22C12.8284 22 13.5 21.3284 13.5 20.5V14H20C20.8284 14 21.5 13.3284 21.5 12.5C21.5 11.6716 20.8284 11 20 11H13.5V4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5V11H4C3.17157 11 2.5 11.6716 2.5 12.5C2.5 13.3284 3.17157 14 4 14H10.5V20.5Z" fill="#007AFF"/>
    </g>
    <defs>
      <clipPath id="clip0_111_306">
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
      </clipPath>
    </defs>
  </svg>
);

export default PlusIcon;