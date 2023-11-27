import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"  

  const faqData = [
    {
      question: "Why BluPrnt?",
      answer: "With BluPrnt, high-quality design becomes accessible, adaptable, and affordable. Subscribe and get a senior designer in a private Slack channel, ready to turn around tasks in 2 days or less. Need changes? We revise until it's perfect."
    },
    {
      question: "Why subscription instead of hiring?",
      answer: "Hiring a designer can cost over $100,000 annually. BluPrnt is an ideal, flexible and cost-effective solution for anyone from startups seeking to validate their MVP for funding, to small teams and large corporations looking to offload their design work."
    },
    {
      question: "How does subscription work?",
      answer: "When you sign up, you'll receive a welcome email with all the details. We'll set you up on Linear, complete with a Loom tutorial on adding design issues, and invite you to your own personal Slack channel for direct communication."
    },
    {
      question: "What is your area of expertise?",
      answer: "We are great at designing digital interfaces, such as web, desktop, and mobile apps. We can also handle redesigns, landing pages, design systems, style guides, branding, and icons."
    },
    {
      question: "How soon will I get my designs?",
      answer: "Typically, you'll receive your designs within two business days. For more complex requests, the timeline might extend slightly, but we'll keep you informed every step of the way to manage expectations."
    },
    {
      question: "Do you work on existing designs?",
      answer: "Yes, we can work on existing designs. We love refining apps, prototypes, or wireframes to improve their design and usability."
    },
    {
      question: "Who are the designers?",
      answer: "You'll work directly with BluPrnt's founder, Parth, who has over 5+ years of experience, ensuring high-quality and quick responses. Sometimes, we collaborate with other designers, always maintaining top quality."
    },
    {
      question: "How will we communicate?",
      answer: "We use Slack, Loom, or email for communication."
    },
    {
      question: "What if I don’t like my designs?",
      answer: "No worries at all. We offer unlimited revisions. We'll continue to tweak it until it's exactly what you're looking for."
    },
    {
      question: "Is there a request limit?",
      answer: "For the personal plan, you can make one request at a time. With the team plan, there's no limit to the number of requests you can make."
    },
    {
      question: "How do I manage my subscription?",
      answer: "After signing up, we'll send you a welcome email with all the details you need, including a link to your client portal where you can control your subscription. Feel free to pause or cancel anytime you like."
    },
    {
      question: "What design software do you use?",
      answer: "We'll use Figma for all of our design work."
    },
    {
      question: "Do you code or develop?",
      answer: "Yes, we can take care of the building part too, depending on your project. That would be beyond the subscription scope, so please use our custom request form for such inquiries."
    },
  ];
  
  export default function FAQ() {
    return (
      <div>
        <div className='px-6 md:px-40 pt-12 md:pt-20 flex flex-col md:flex-row md:justify-between'  style={{ fontFamily: 'var(--font-sfRoundBold)' }}>
          <div className='pb-6 md:pb-0 text-3xl md:text-7xl font-bold'>
            Frequently <br/>
            asked questions
          </div>
          <div className='w-full md:w-[40%]'  style={{ fontFamily: 'var(--font-sfRoundMedium)' }}>
              <Accordion type="single" collapsible>
                {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                        {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
              </Accordion>
          </div>
        </div>
      </div>
    );
  }