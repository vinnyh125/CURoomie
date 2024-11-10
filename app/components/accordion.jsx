import { useState, useRef, useEffect } from "react";

export default function Accordion() {
  const faqItems = [
    {
      question: "What is CURoomie?",
      answer:
        "CURoomie is a platform designed to help Cornell students find roommates both on and off campus.",
    },
    {
      question: "How does it work?",
      answer:
        "You can sign in or create an account using your Cornell email. Following account creation, you will answer some questions to determine your preferences, and our super cool and awesome algorithm will match as best we can :^)",
    },
    {
      question: "Who can use it?",
      answer:
        "Only those who have access to a Cornell email will be able to create an account and use our platform.",
    },
    {
      question: "Does it work for off-campus housing?",
      answer:
        "Yes! There will be an option to specify on-campus or off-campus, so our algorithm can match accordingly.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h1 className="font-staatliches text-4xl px-4 text-custom-navy pt-[15%]">
        Frequently Asked Questions
      </h1>
      <h2 className="text-lg px-4 pt-2 pb-4 text-custom-navy border-b border-custom-navy">
        Finding a roommate on or off campus can be stressful, demoralizing, and
        scary. To help with the process, we&apos;ve put together some common
        questions about our platform and how it can help aid you in your search.
      </h2>
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b border-custom-navy">
      <button
        onClick={toggleOpen}
        className="w-full text-left p-4 flex justify-between items-center"
      >
        <span className="text-xl font-bold text-custom-navy">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.08 1.04l-4.25 4.3a.75.75 0 01-1.08 0L5.23 8.25a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className="overflow-hidden transition-all duration-200 ease-in-out"
      >
        <div className="pb-4 px-4 text-custom-burgandy">{answer}</div>
      </div>
    </div>
  );
}
