"use client";

import {
  BiRocket,
  BiShieldAlt2,
  BiCreditCard,
  BiSupport,
  BiTransfer,
  BiMobile,
  BiWallet,
  BiCheckShield,
} from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <BiRocket className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fast Transactions",
      desc: "Complete payments in seconds with our optimized payment flow",
    },
    {
      icon: <BiShieldAlt2 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Secure Payments",
      desc: "Bank-grade security with end-to-end encryption for all transactions",
    },
    {
      icon: <BiCreditCard className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Multiple Payment Options",
      desc: "Choose from various payment methods that suit your needs",
    },
    {
      icon: <BiSupport className="w-6 h-6 md:w-8 md:h-8" />,
      title: "24/7 Support",
      desc: "Get help anytime with our dedicated customer support team",
    },
    {
      icon: <BiTransfer className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Easy Transfers",
      desc: "Send money to anyone, anywhere with just a few taps",
    },
    {
      icon: <BiMobile className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile First",
      desc: "Designed for the best mobile experience possible",
    },
    {
      icon: <BiWallet className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Digital Wallet",
      desc: "Keep your money safe and accessible in your digital wallet",
    },
    {
      icon: <BiCheckShield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fraud Protection",
      desc: "Advanced fraud detection and prevention systems",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-8">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

        {/* Section Header */}
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose MoyiScan?
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Experience the future of digital payments with our innovative
            features designed to make your financial transactions seamless and
            secure.
          </p>
        </motion.div>

        {/* Features Grid - Now 4 columns on larger screens */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-gray-50 hover:bg-white p-6 rounded-2xl transition-all duration-300 hover:shadow-xl border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -left-4 -top-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl" />
        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl" />
      </div>
    </section>
  );
}
