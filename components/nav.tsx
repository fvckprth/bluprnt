import Image from 'next/image';

export default function Nav() {
  return (
    <div className="flex flex-row text-3xl mx-40 py-6 border-b">
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
