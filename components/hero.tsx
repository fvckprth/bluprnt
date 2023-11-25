"use client"

import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <div className="flex flex-col text-4xl md:text-8xl md:mx-40 pt-8 md:pt-12 font-bold">
        <div>Unlimited design.</div>
        <div>Flat monthly fee.</div>
        <div><span className="text-newblue">BluPrnt</span> for success.</div>
        <div className='flex flex-row box-content items-start pt-4 md:pt-0 space-x-4 md:space-x-6'>
            <motion.div
            whileTap={{ scale: 0.95 }}
            style={{ border: 'none', background: 'none' }}
            className='box-content'
            >
              <ScrollLink to="subscribe" smooth={true} duration={800}>
                <Button variant="blue">
                    View plans
                </Button>
              </ScrollLink>
            </motion.div>
            <Link href="https://cal.com/parthpatel/15min">
              <motion.div
              whileTap={{ scale: 0.95 }}
              style={{ border: 'none', background: 'none' }}
              >
                <Button variant="white">
                    Book intro
                </Button>
              </motion.div>
            </Link>
        </div>
    </div>
  );
}