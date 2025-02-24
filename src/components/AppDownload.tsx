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
      className="relative py-12 md:py-24 overflow-hidden -mx-4 sm:-mx-6 md:-mx-8"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            className="text-center lg:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 text-white mb-6 md:mb-8 backdrop-blur-sm"
            >
              <BiDownload className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm">Download App</span>
            </motion.div>

            <motion.h2
              variants={slideUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
            >
              Get Started with
              <span className="text-brand-secondary"> MoyiScan</span>
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="text-base md:text-lg text-white/90 mb-8 md:mb-12"
            >
              Download our mobile app and experience the future of digital
              payments. Available on iOS and Android devices.
            </motion.p>

            {/* Download Options */}
            <motion.div variants={slideUp} className="space-y-6 md:space-y-8">
              {/* Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
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
                    className="h-[45px] md:h-[60px] w-auto"
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
                    className="h-[45px] md:h-[60px] w-auto"
                  />
                </motion.a>
              </div>

              {/* QR Code Section */}
              <motion.div
                variants={fadeIn}
                className="flex items-center justify-center lg:justify-start gap-4 md:gap-6 p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl max-w-md"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src="/qr-code.png"
                    alt="Download App QR Code"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                    Scan to Download
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    Point your camera at the QR code to download the app
                    instantly
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            className="relative mt-8 lg:mt-0"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-[2rem] md:rounded-[3rem] blur-2xl" />
            <div className="relative">
              <Image
                src="/app-preview-download.png"
                alt="MoyiScan App Preview"
                width={500}
                height={1000}
                className="mx-auto rounded-[1.5rem] md:rounded-[2rem] shadow-2xl max-w-xs md:max-w-sm lg:max-w-none"
              />

              {/* Feature Highlights */}
              <motion.div
                className="absolute -right-4 md:-right-12 top-1/4 transform rotate-6"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg">
                  <BiMobile className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-4 md:-left-12 bottom-1/4 transform -rotate-6"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-lg">
                  <BiQr className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
