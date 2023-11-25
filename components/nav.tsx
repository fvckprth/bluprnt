import Image from 'next/image';

export default function Nav() {
  return (
    <div className="flex flex-row text-xl mx-6 md:text-3xl md:mx-40 py-4 md:py-12 border-b" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
        <Image 
            src="/icons/bluprnt.svg"
            width={24}
            height={24}
            alt="BluPrnt Logo"
            className='mr-1'
        />
        <div className='flex flex-row ml-1 font-bold'>
            <div className="text-newgray/50"><span className='text-newblue'>BluPrnt</span> by Parth Patel</div>
        </div>
    </div>
  );
}
