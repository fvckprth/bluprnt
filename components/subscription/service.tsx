import Image from 'next/image';
import { Button } from '../ui/button';

export default function Service() {
    return (
      <div className='flex flex-row gap-12'>
          <div className='flex flex-col w-full bg-cardbg p-6 rounded-3xl'>
            <div className='space-y-3 pb-10'>
              <div className='text-2xl font-bold'>Intro Call</div>
              <p className='text-xl text-newgray'>Book a <strong>15-min</strong> intro call to <br/>learn more about BluPrnt</p>
            </div>
            <div className='space-y-3'>
              <Button variant="white" size="withicon">
                  <Image 
                    src="/icons/book_call.svg" 
                    alt="Book Call Icon"
                    width={32}
                    height={32} 
                    className='mr-2'
                  />
                  Book call
              </Button>
            </div>
          </div>
          <div className='flex flex-col w-full bg-cardbg p-6 rounded-3xl'>
            <div className='space-y-3 pb-10'>
              <div className='text-2xl font-bold'>Refer & Earn</div>
              <p className='text-xl text-newgray'>Get <strong>$500</strong> for every<br/>client that you bring in</p>
            </div>
            <div className='space-y-3'>
              <Button variant="white" size="withicon">
                  <Image 
                    src="/icons/share.svg" 
                    alt="Share BluPrnt"
                    width={32}
                    height={32} 
                    className='mr-2'
                  />
                  Share BluPrnt 
              </Button>
            </div>
          </div>
          <div className='flex flex-col w-full bg-cardbg p-6 rounded-3xl'>
            <div className='space-y-3 pb-10'>
              <div className='text-2xl font-bold'>Custom Request</div>
              <p className='text-xl text-newgray'>I&apos;m <strong>here to listen</strong> & make it<br/>happen however you want</p>
            </div>
            <div className='space-y-3'>
              <Button variant="white" size="withicon">
                  <Image 
                    src="/icons/share_brief.svg" 
                    alt="Send Brief"
                    width={32}
                    height={32} 
                    className='mr-2'
                  />
                  Send brief 
              </Button>
            </div>
          </div>
      </div>
    );
  }