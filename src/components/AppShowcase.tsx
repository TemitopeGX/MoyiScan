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
    <section className="py-20 md:py-24 bg-gray-50 -mx-4 sm:-mx-6 md:-mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <motion.div
          ref={ref}
          className="text-center mb-20 px-4"
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
            className="text-gray-600 max-w-2xl mx-auto px-4"
            variants={fadeIn}
          >
            MoyiScan brings all your financial needs into one simple, secure
            app. Here&apos;s what you can do:
          </motion.p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 md:gap-16 lg:gap-20`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.div
                className="flex-1 space-y-6 text-center lg:text-left px-6 sm:px-0"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
              >
                <h3 className="text-2xl font-bold text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <div className="px-4 sm:px-0">
                  <ul className="space-y-4 bg-white/50 p-6 rounded-xl">
                    {[
                      { value: "2M+", label: "Active Users" },
                      { value: "₦5B+", label: "Monthly Transactions" },
                      { value: "4.8/5", label: "User Rating" },
                    ].map((stat, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeIn}
                        className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm"
                      >
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="text-lg font-semibold text-brand-primary">
                          {stat.value}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="flex-1 relative px-6 sm:px-0"
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
