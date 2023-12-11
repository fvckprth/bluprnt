"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';

export default function Work() {
    const images = [
        { src: 'mock_01.png', title: 'Work 1', width: 742, height: 600, type: 'desktop' },
        { src: 'mock_02.png', title: 'Work 2', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_03.png', title: 'Work 3', width: 200, height: 600, type: 'mobile' },
        { src: 'solomon_01.png', title: 'Solomon 01', width: 742, height: 600, type: 'desktop' },
        { src: 'solomon_02.png', title: 'Solomon 02', width: 742, height: 600, type: 'desktop' },
        { src: 'solomon_03.png', title: 'Solomon 03', width: 200, height: 600, type: 'mobile' },
        { src: 'atlas_01.png', title: 'Atlas 01', width: 200, height: 600, type: 'mobile' },
        { src: 'atlas_02.png', title: 'Atlas 02', width: 742, height: 600, type: 'mobile' },
        { src: 'mock_04.png', title: 'Work 4', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_05.png', title: 'Work 5', width: 200, height: 600, type: 'mobile' },
        { src: 'amaya_01.png', title: 'Amaya 01', width: 742, height: 600, type: 'desktop' },
        { src: 'amaya_02.png', title: 'Amaya 02', width: 200, height: 600, type: 'mobile' },
        { src: 'mock_06.png', title: 'Work 6', width: 200, height: 600, type: 'mobile' },
        { src: '2030_calculator_01.png', title: '2030 Calculator 01', width: 200, height: 600, type: 'mobile'},
        { src: '2030_calculator_02.png', title: '2030 Calculator 02', width: 200, height: 600, type: 'mobile'},
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
                    <div className={`flex flex-row space-x-4 md:space-x-6 overflow-x-auto ${isScrolled ? '' : 'pl-4 md:pl-6'} hide-scrollbar`}>
                        {images.map((image, index) => {
                            const width = image.width;
                            const height = image.height;

                            return (
                                <div key={index} className="border border-newgray/25 shadow-sm rounded-xl m-2 flex-shrink-0">
                                        <Image
                                            src={`/images/mocks/${image.src}`}
                                            alt={image.title}
                                            width={width}
                                            height={height}
                                            priority={true}
                                            className="h-full rounded-xl"
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