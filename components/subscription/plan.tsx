import Image from 'next/image';
import { Button } from '../ui/button';

export default function Plan() {
    return (
      <div className='flex flex-row gap-12'>
          <div className='flex flex-col w-full bg-cardbg p-6 rounded-3xl'>
            <div className='space-y-3 pb-10'>
              <div className='text-2xl font-bold'>Personal Plan</div>
              <div className='text-5xl font-bold'>$3,200 / mo</div>
              <p className='text-xl text-newgray'>Perfect for those with on-going <br/> needs for design work and growth</p>
            </div>
            <div className='space-y-3 pb-10'>
              <Button variant="blue">
                  Get started
              </Button>
              <p className='text-xl text-newgray/50'>Pause or cancel anytime</p>
            </div>
            <div className='flex flex-row space-x-8 text-xl'>
              <ul className="grid grid-col-1 gap-2">
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/standard_support.svg'
                      alt="Standard support" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newblue'>Standard support</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/one_request.svg'
                      alt="One request" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newblue'>One request at a time</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/unlimited_revisions.svg'
                      alt="One request" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Unlimited revisions</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/2-3_days.svg'
                      alt="2-3 day turnaround" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>2-3 day turnaround</p>
                  </li>
              </ul>
              <ul className="grid grid-col-1 gap-2">
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/in-house.svg'
                      alt="In-house quality" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray font-medium'>In-house quality</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/senior.svg'
                      alt="Senior designer" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Senior designer</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/slack.svg'
                      alt="Managed via Slack" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Managed via Slack</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/invite.svg'
                      alt="Invite your team" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Invite your team</p>
                  </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col w-full bg-cardbg p-6 rounded-3xl'>
            <div className='space-y-3 pb-10'>
              <div className='flex flex-row space-x-2'>
                <div className='text-2xl font-bold'>Pro Plan</div>
                <div className='bg-neworange/25 text-neworange text-base font-bold rounded-full px-3 py-1'>For Teams</div>
              </div>
              <div className='text-5xl font-bold'>$5,600 / mo</div>
              <p className='text-xl text-newgray'>Perfect for startups and teams looking<br/>for faster work and more requests</p>
            </div>
            <div className='space-y-3 pb-10'>
              <Button variant="orange">
                  Launch with teams
              </Button>
              <p className='text-xl text-newgray/50'>Pause or cancel anytime</p>
            </div>
            <div className='flex flex-row space-x-8 text-xl'>
              <ul className="grid grid-col-1 gap-2">
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/certificate.svg'
                      alt="Priority support" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-neworange'>Priority support</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/rocket.svg'
                      alt="Unlimited requests" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-neworange'>Unlimited requests</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/unlimited_revisions.svg'
                      alt="One request" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Unlimited revisions</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/2-3_days.svg'
                      alt="2-3 day turnaround" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>2-3 day turnaround</p>
                  </li>
              </ul>
              <ul className="grid grid-col-1 gap-2">
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/in-house.svg'
                      alt="In-house quality" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray font-medium'>In-house quality</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/senior.svg'
                      alt="Senior designer" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Senior designer</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/slack.svg'
                      alt="Managed via Slack" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Managed via Slack</p>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image 
                      src='/icons/invite.svg'
                      alt="Invite your team" 
                      width={24} 
                      height={24} 
                    />
                    <p className='text-newgray'>Invite your team</p>
                  </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }