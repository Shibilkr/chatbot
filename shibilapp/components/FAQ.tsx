"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "How secure is my data?",
    answer: "We use AES-256 encryption at rest and TLS 1.3 in transit. Your data is never used to train public models; your instance remains strictly private and isolated.",
  },
  {
    question: "Does it support multi-language?",
    answer: "Yes, Aetherial Logic supports over 95 languages natively, including automatic translation and regional sentiment detection.",
  },
  {
    question: "Can I export my model?",
    answer: "Absolutely. We believe in data sovereignty. You can export weights and configuration data for on-premise deployment at any time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-gutter mb-section-gap-mobile max-w-2xl mx-auto w-full">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-center mb-10">Common Questions</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleOpen(index)}
              className="faq-item group bg-surface-container rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="p-6 flex items-center justify-between">
                <span className="font-bold text-on-surface">{faq.question}</span>
                <span
                  className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                  expand_more
                </span>
              </div>
              <div
                className={`faq-content transition-all duration-300 px-6 pb-6 text-sm text-on-surface-variant ${
                  isOpen ? "max-h-[200px] opacity-100 block" : "max-h-0 opacity-0 hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
