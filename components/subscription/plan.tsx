import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Plan() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      <div className="flex flex-col w-full bg-cardbg p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>Personal Plan</div>
          <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>$3,200 / mo</div>
          <p className="text-base md:text-xl text-newgray" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            Perfect for those with on-going <br /> needs for design work and
            growth
          </p>
        </div>
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="flex flex-col items-start">
            <Link href="https://buy.stripe.com/5kAcNU8gaefggKIbII">
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="blue">Get started</Button>
              </motion.div>
            </Link>
          </div>
          <p className="text-base md:text-xl text-newgray/50" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            Pause or cancel anytime
          </p>
        </div>
        <div className="flex flex-row gap-4 md:gap-8 text-sm md:text-xl" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
          <ul className="grid grid-col-1 gap-1 md:gap-2">
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/standard_support.svg"
                alt="Standard support"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newblue">Standard support</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/one_request.svg"
                alt="One request"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newblue">One request at a time</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/unlimited_revisions.svg"
                alt="One request"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Unlimited revisions</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/2-3_days.svg"
                alt="2-3 day turnaround"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">2-3 day turnaround</p>
            </li>
          </ul>
          <ul className="grid grid-col-1 gap-1 md:gap-2">
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/in-house.svg"
                alt="In-house quality"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray font-medium">In-house quality</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/senior.svg"
                alt="Senior designer"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Senior designer</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/slack.svg"
                alt="Managed via Slack"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Managed via Slack</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/invite.svg"
                alt="Invite your team"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Invite your team</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full bg-cardbg p-4 md:p-6 rounded-2xl md:rounded-3xl">
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="flex flex-row space-x-2">
            <div className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>Pro Plan</div>
            <div className="bg-neworange/25 text-neworange text-sm md:text-base font-bold rounded-full px-3 py-1" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
              For Teams
            </div>
          </div>
          <div className="text-3xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>$5,300 / mo</div>
          <p className="text-base md:text-xl text-newgray" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
            Perfect for startups and teams looking
            <br />
            for faster work and more requests
          </p>
        </div>
        <div className="space-y-2 md:space-y-3 pb-4 md:pb-10">
          <div className="flex flex-col items-start" style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
            <Link href="https://buy.stripe.com/28o6pwgMG4EG0LK289">
              <motion.div
                whileTap={{ scale: 0.95 }}
                style={{ border: "none", background: "none" }}
              >
                <Button variant="orange">Launch with teams</Button>
              </motion.div>
            </Link>
          </div>
          <p className="text-base md:text-xl text-newgray/50" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>Pause or cancel anytime</p>
        </div>
        <div className="flex flex-row gap-4 md:gap-8 text-sm md:text-xl" style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
        <ul className="grid grid-col-1 gap-1 md:gap-2">
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/certificate.svg"
                alt="Priority support"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-neworange">Priority support</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/rocket.svg"
                alt="Unlimited requests"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-neworange">Unlimited requests</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/unlimited_revisions.svg"
                alt="One request"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Unlimited revisions</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/2-3_days.svg"
                alt="2-3 day turnaround"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">2-3 day turnaround</p>
            </li>
          </ul>
          <ul className="grid grid-col-1 gap-1 md:gap-2">
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/in-house.svg"
                alt="In-house quality"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray font-medium">In-house quality</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/senior.svg"
                alt="Senior designer"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Senior designer</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/slack.svg"
                alt="Managed via Slack"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Managed via Slack</p>
            </li>
            <li className="flex items-center gap-1 md:gap-2">
              <Image
                src="/icons/invite.svg"
                alt="Invite your team"
                width={24}
                height={24}
                className="h-4 w-4 md:h-6 md:w-6"
              />
              <p className="text-newgray">Invite your team</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
