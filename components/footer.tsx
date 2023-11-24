import Image from 'next/image';
import Link from 'next/link';

export default function Subscribe() {
  return (
    <div className='pt-20'>
      <div className='mx-40 flex flex-row justify-between text-newgray text-base border-t'>
        <div className='py-6 flex flex-col space-y-2'>
            <div className='flex flex-row items-center'>
                <p className='mr-1'>Made by</p>
                <Image 
                    src="/images/parth_avatar.jpeg"
                    width={120} 
                    height={120} 
                    alt="Parth Patel Avatar"
                    className='h-6 w-6 rounded-full'
                />
                <Image 
                    src="/images/parth_signature.svg"
                    width={120} 
                    height={120} 
                    alt="Parth Patel Signature"
                    className='h-6 w-12'
                />
            </div>
            <div>
                <p>All rights reserved.</p>
            </div>
        </div>
        <div className='py-6 flex flex-col items-end space-y-1'>
            <div>
                <p>v.2023.11</p>
            </div>
            <div>
                <Link href="http://www.parth.ski">
                    <div className='flex flex-row border-b hover:text-newblue hover:border-b-newblue arrow'>
                        <p className='flex items-center'>parth.ski</p>
                        <Image 
                            src="/icons/default_arrow.svg"
                            width={16}
                            height={16} 
                            alt="Arrow Icon"
                            className='ml-1'
                        />
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}