"use client"

import Plan from '@/components/subscription/plan'
import Service from '@/components/subscription/service'
import { Element } from 'react-scroll';

export default function Subscribe() {
  return (
    <Element name="subscribe">
        <div className='pt-20'>
        <div className='px-40 flex flex-col space-y-12'>
            <div className='text-7xl font-bold'><span className="text-newblue">
            BluPrnt</span> your <br/>
            future, today
            </div>
            <Plan />
            <Service />
        </div>
        </div>
    </Element>
  );
}