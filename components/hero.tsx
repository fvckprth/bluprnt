"use client"

import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from "framer-motion"
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <div className="flex flex-col text-8xl px-40 pt-12 font-bold">
        <div>Unlimited design.</div>
        <div>Flat monthly fee.</div>
        <div><span className="text-newblue">BluPrnt</span> for success.</div>
        <div className='flex flex-row space-x-6'>
            <motion.div
            whileTap={{ scale: 0.95 }}
            style={{ border: 'none', background: 'none' }}
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