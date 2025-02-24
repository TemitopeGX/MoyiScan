"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is MoyiScan?",
      answer:
        "MoyiScan is a digital payment solution that enables fast, secure, and convenient transactions across Africa. Our platform supports various payment methods including QR codes, bank transfers, and mobile payments.",
    },
    {
      question: "How do I get started with MoyiScan?",
      answer:
        "Getting started is easy! Simply download the MoyiScan app from your device's app store, create an account, and follow the simple verification process. Once verified, you can start making payments immediately.",
    },
    {
      question: "Is MoyiScan secure?",
      answer:
        "Yes, MoyiScan employs bank-grade security measures including end-to-end encryption, two-factor authentication, and continuous monitoring to ensure your transactions are always secure.",
    },
    {
      question: "What payment methods are supported?",
      answer:
        "MoyiScan supports various payment methods including bank transfers, QR code payments, card payments, and mobile money transfers. We're constantly adding new payment options to serve you better.",
    },
    {
      question: "Are there any transaction fees?",
      answer:
        "MoyiScan maintains transparent and competitive pricing. While some transactions may incur minimal fees, many services are free. Check our pricing page for detailed information.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7. You can reach us through the app, email at support@moyiscan.com, or phone at +234 800 MOYI SCAN. We also offer live chat support.",
    },
    {
      question: "In which countries is MoyiScan available?",
      answer:
        "MoyiScan is currently available in Nigeria, with plans to expand across Africa. Stay tuned for updates on our expansion to other countries.",
    },
    {
      question: "What do I do if I encounter a problem?",
      answer:
        "If you encounter any issues, first check our in-app help section for quick solutions. If you need further assistance, contact our customer support team who will be happy to help resolve any problems.",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/90">
              Find answers to common questions about MoyiScan and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <BiChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 bg-gray-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8">
            Can't find the answer you're looking for? Please chat with our
            friendly team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-brand-primary text-white hover:bg-brand-accent transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
