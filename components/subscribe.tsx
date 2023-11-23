import Image from 'next/image';
import Plan from '@/components/subscription/plan'
import Service from '@/components/subscription/service'

export default function Subscribe() {
  return (
    <div className='py-40'>
      <div className='px-40 flex flex-col space-y-12'>
        <div className='text-7xl pt-12 font-bold'><span className="text-newblue">
          BluPrnt</span> your <br/>
          future, today
        </div>
        <Plan />
        <Service />
      </div>
    </div>
  );
}