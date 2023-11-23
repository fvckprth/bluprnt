import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div className="flex flex-col text-8xl pt-12 px-40 font-bold">
        <div>Unlimited design.</div>
        <div>Flat monthly fee.</div>
        <div><span className="text-newblue">BluPrnt</span> for success.</div>
        <div className='space-x-6'>
            <Button variant="blue">
                View plans
            </Button>
            <Button variant="white">
                Book intro
            </Button>
        </div>
    </div>
  );
}
