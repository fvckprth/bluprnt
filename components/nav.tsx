import Image from 'next/image';

export default function Nav() {
  return (
    <div className="flex flex-row text-5xl px-3 py-3 pb-12 border-b border-newwhite/25">
        <Image 
            src="/icons/bluprnt.svg"
            width={48} 
            height={48} 
            alt="BluPrnt Logo"
            className='mr-3'
        />
        <div className='flex flex-row space-x-3 font-bold'>
            <div className="text-newblue">BluPrnt</div>
            <div className="text-newgray/25">by Parth Patel</div>
        </div>
    </div>
  );
}
