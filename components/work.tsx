"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';

export default function Work() {
  const images = ['mock_01.png', 'mock_02.png', 'mock_03.png', 'mock_04.png', 'mock_05.png', 'mock_06.png', 'mock_07.png'];
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e: any) => {
    if (e.target.scrollLeft > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (e.target.scrollLeft === 0 && isScrolled) {
      setIsScrolled(false);
    }
  };

  return (
    <div className='pt-40'>
      <div className='px-40 mb-12'>
        <div className='text-7xl pt-12 font-bold'>
          Some of <br/>
          our work
        </div>
      </div>
      <div onScroll={handleScroll}>
        <ScrollArea>
          <div className={`flex space-x-4 overflow-x-auto ${isScrolled ? '' : 'pl-6'} hide-scrollbar`}>
            {images.map((image, index) => (
              <div key={index} className="border border-newblack/25 rounded-2xl m-2 flex-shrink-0">
                <img 
                    src={`/images/mocks/${image}`} 
                    alt={`Work ${index + 1}`} 
                    className='h-[600px] rounded-2xl object-cover'
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}