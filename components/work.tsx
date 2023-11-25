"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';

export default function Work() {
    const images = [
        { src: 'mock_01.png', title: 'Work 1', width: 742, height: 600, type: 'desktop' },
        { src: 'mock_02.png', title: 'Work 2', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_03.png', title: 'Work 3', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_04.png', title: 'Work 4', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_05.png', title: 'Work 5', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_06.png', title: 'Work 6', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_07.png', title: 'Work 7', width: 742, height: 600, type: 'desktop' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (e: any) => {
        if (e.target.scrollLeft > 0 && !isScrolled) {
            setIsScrolled(true);
        } else if (e.target.scrollLeft === 0 && isScrolled) {
            setIsScrolled(false);
        }
    };

    return (
        <div className='pt-12 md:pt-20'>
            <div className='px-6 md:px-40 pb-4 md:pb-12'>
                <div className='text-3xl md:text-7xl font-bold' style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
                    Some of <br/>
                    our work
                </div>
            </div>
            <div onScroll={handleScroll}>
                <ScrollArea>
                    <div className={`flex space-x-4 md:space-x-6 overflow-x-auto ${isScrolled ? '' : 'pl-4 md:pl-6'} hide-scrollbar`}>
                        {images.map((image, index) => {
                            const width = image.width;
                            const height = image.height;

                            return (
                                <div key={index} className="border border-newgray/25 shadow-sm rounded-2xl m-2 flex-shrink-0">
                                        <Image
                                            src={`/images/mocks/${image.src}`}
                                            alt={image.title}
                                            width={width}
                                            height={height}
                                            priority={true}
                                            className="h-full rounded-2xl"
                                        />
                                    </div>
                            );
                        })}
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
}