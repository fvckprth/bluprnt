import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Service() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="flex flex-col w-full bg-cardbg p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="text-xl md:text-2xl font-bold"  style={{ fontFamily: 'var(--font-sfRoundBold)' }}>Intro Call</div>
          <p className="text-base md:text-xl text-newgray"  style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            Book a <strong>15-min</strong> intro call to <br />
            learn more about BluPrnt
          </p>
        </div>
        <div className="space-y-2 md:space-y-3" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
          <div className="flex flex-col items-start">
            <Link href="https://cal.com/parthpatel/15min">
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="white" size="withicon">
                  <Image
                    src="/icons/book_call.svg"
                    alt="Book Call Icon"
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8 mr-2"
                  />
                  Book call
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-cardbg p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>Refer & Earn</div>
          <p className="text-base md:text-xl text-newgray" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            Get <strong>$500</strong> for every
            <br />
            client that you bring in
          </p>
        </div>
        <div className="space-y-2 md:space-y-3" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
          <div className="flex flex-col items-start">
            <Link href="https://tally.so/r/mO7JBM">
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="white" size="withicon">
                  <Image
                    src="/icons/share.svg"
                    alt="Share BluPrnt"
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8 mr-2"
                  />
                  Share BluPrnt
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-cardbg p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>Custom Request</div>
          <p className="text-base md:text-xl text-newgray"  style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            I&apos;m <strong>here to listen</strong> & make it
            <br />
            happen however you want
          </p>
        </div>
        <div className="space-y-2 md:space-y-3" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
          <div className="flex flex-col items-start">
            <Link href="https://tally.so/r/mVzMM6">
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="white" size="withicon">
                  <Image
                    src="/icons/share_brief.svg"
                    alt="Send Brief"
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8 mr-2"
                  />
                  Send brief
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
