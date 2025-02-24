"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Quick VTU Services",
      description: "Top up airtime and data bundles with just a few taps",
      image: "/features/vtu.png",
    },
    {
      title: "Bank Transfers",
      description: "Send money to any Nigerian bank instantly",
      image: "/features/transfer.png",
    },
    {
      title: "Bill Payments",
      description: "Pay for utilities and services seamlessly",
      image: "/features/bills.png",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 -mx-4 sm:-mx-6 md:-mx-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span
            className="text-brand-primary font-medium"
            variants={fadeIn}
          >
            How It Works
          </motion.span>
          <motion.h2 className="text-4xl font-bold mt-4 mb-6" variants={fadeIn}>
            Everything at your fingertips
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            MoyiScan brings all your financial needs into one simple, secure
            app. Here&apos;s what you can do:
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div
                className="flex-1 space-y-4"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <h3 className="text-2xl font-bold text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeIn}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-brand-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Feature point {item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="flex-1 relative"
                variants={index % 2 === 0 ? slideInRight : slideInLeft}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 rounded-[2rem] blur-2xl" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="relative rounded-2xl shadow-xl border border-white/20"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
