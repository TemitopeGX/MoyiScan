"use client";

import { useState } from "react";
import {
  BiEnvelope,
  BiPhone,
  BiMap,
  BiSend,
  BiLoaderAlt,
} from "react-icons/bi";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="pt-20 bg-white">
      {/* Header Section with Gradient */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-16 mb-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-white/90">
              We&apos;d love to hear from you. Please fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              variants={slideIn}
              className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100"
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <BiEnvelope className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600">support@moyiscan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <BiPhone className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600">+234 800 MOYI SCAN</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-primary/10 rounded-lg">
                    <BiMap className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Office
                    </h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-600 hover:text-brand-primary transition-colors"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeIn}
              className="md:col-span-2 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl hover:bg-brand-accent transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <BiLoaderAlt className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <BiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
