"use client";

import Image from "next/image";
import { BiQr, BiMobile, BiDownload } from "react-icons/bi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AppDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  return (
    <section
      id="download"
      className="relative py-20 md:py-24 overflow-hidden -mx-4 sm:-mx-6 md:-mx-8"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 py-10 sm:py-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            className="text-center lg:text-left space-y-6 md:space-y-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm"
            >
              <BiDownload className="w-5 h-5" />
              <span className="text-sm">Download App</span>
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <motion.h2
                variants={slideUp}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              >
                Get Started with{" "}
                <span className="text-brand-secondary">MoyiScan</span>
              </motion.h2>

              <motion.p
                variants={slideUp}
                className="text-base md:text-lg text-white/90 max-w-xl mx-auto lg:mx-0"
              >
                Download our mobile app and experience the future of digital
                payments. Available on iOS and Android devices.
              </motion.p>
            </div>

            {/* Download Options */}
            <motion.div
              variants={slideUp}
              className="space-y-8 md:space-y-10 pt-4"
            >
              {/* Store Badges */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <motion.a
                  href="#"
                  className="transform hover:scale-105 transition-transform duration-300"
                  variants={fadeIn}
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on App Store"
                    width={200}
                    height={60}
                    className="h-[50px] md:h-[60px] w-auto mx-auto lg:mx-0"
                  />
                </motion.a>

                <motion.a
                  href="#"
                  className="transform hover:scale-105 transition-transform duration-300"
                  variants={fadeIn}
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-[50px] md:h-[60px] w-auto mx-auto lg:mx-0"
                  />
                </motion.a>
              </div>

              {/* QR Code Section */}
              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl max-w-md mx-auto lg:mx-0"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-lg sm:rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/qr-code.png"
                    alt="Download App QR Code"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Scan to Download
                  </h3>
                  <p className="text-sm sm:text-base text-white/80">
                    Point your camera at the QR code to download the app
                    instantly
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            className="relative mt-12 lg:mt-0 px-4 sm:px-6"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-[2rem] sm:rounded-[3rem] blur-2xl" />
            <div className="relative">
              <Image
                src="/app-preview-download.png"
                alt="MoyiScan App Preview"
                width={500}
                height={1000}
                className="mx-auto rounded-2xl sm:rounded-[2rem] shadow-2xl max-w-[280px] sm:max-w-sm lg:max-w-none"
              />

              {/* Feature Highlights - Hide on mobile */}
              <div className="hidden md:block">
                <motion.div
                  className="absolute -right-12 top-1/4 transform rotate-6"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg">
                    <BiMobile className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-12 bottom-1/4 transform -rotate-6"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg">
                    <BiQr className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
