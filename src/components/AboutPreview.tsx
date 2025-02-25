"use client";

import Link from "next/link";
import { BiGroup, BiMoney, BiStar } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden -mx-4 sm:-mx-6 md:-mx-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Content - Now centered and full width */}
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Transforming Digital
            <br /> Payments in Africa
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-white/90 mb-12 max-w-2xl mx-auto"
          >
            We&apos;re building the future of digital payments, making
            transactions faster, safer, and more accessible for everyone across
            Africa.
          </motion.p>

          {/* Stats Grid - Now 3 columns by default */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 mx-4 sm:mx-0"
            variants={staggerChildren}
          >
            {[
              {
                value: "2M+",
                label: "Active Users",
                icon: <BiGroup className="w-6 h-6" />,
              },
              {
                value: "₦5B+",
                label: "Monthly Transactions",
                icon: <BiMoney className="w-6 h-6" />,
              },
              {
                value: "4.8/5",
                label: "User Rating",
                icon: <BiStar className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white group hover:bg-white/20 transition-colors duration-300"
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
                <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Elements - Repositioned */}
        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-secondary/40 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute -left-4 -top-4 w-40 h-40 bg-brand-primary/40 rounded-full blur-2xl animate-float" />
      </div>
    </section>
  );
}
