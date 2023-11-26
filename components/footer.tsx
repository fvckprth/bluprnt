import Image from 'next/image';
import Link from 'next/link';

export default function Subscribe() {
  return (
    <div className='pt-12 md:pt-20' style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
      <div className='mx-6 md:mx-40 flex flex-row justify-between text-newgray text-sm md:text-base border-t'>
        <div className='py-4 md:py-6 flex flex-col space-y-1 md:space-y-2'>
            <div className='flex flex-row items-center'>
                <p className='mr-1'>Designed by</p>
                <Image 
                    src="/images/parth_avatar.jpeg"
                    width={120} 
                    height={120} 
                    alt="Parth Patel Avatar"
                    className='h-4 w-4 md:h-6 md:w-6 rounded-full'
                />
                <Image 
                    src="/images/parth_signature.svg"
                    width={120} 
                    height={120} 
                    alt="Parth Patel Signature"
                    className='h-4 w-8 md:h-6 md:w-12'
                />
            </div>
            <div>
                <p>All rights reserved.</p>
            </div>
        </div>
        <div className='py-4 md:py-6 flex flex-col items-end space-y-1 md:space-y-2'>
            <div>
                <p>v.2023.11</p>
            </div>
            <div>
                <Link href="http://parth.ski">
                    <div className='flex flex-row border-b hover:text-newblue hover:border-b-newblue arrow'>
                        <p className='flex align-bottom items-center'>parth.ski</p>
                        <Image 
                            src="/icons/default_arrow.svg"
                            width={16}
                            height={16} 
                            alt="Arrow Icon"
                            className='h-3 w-3 md:h-4 md:w-4 ml-1 self-center'
                        />
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}