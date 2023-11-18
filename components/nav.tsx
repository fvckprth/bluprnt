import Image from 'next/image';

export default function Nav() {
  return (
    <div className="flex flex-row text-5xl">
        <Image 
            src="/icons/bluprnt.png" 
            width={48} 
            height={48} 
            alt="BluPrnt Logo"
            className='mr-3'
        />
        <div className='flex flex-row space-x-3'>
            <div className="text-newblue/25">BluPrnt</div>
            <div className="text-newwhite/25">by Parth Patel</div>
        </div>
    </div>
  );
}
