"use client";

import { useState } from "react";
import {
  BiEnvelope,
  BiPhone,
  BiMap,
  BiSend,
  BiLoaderAlt,
} from "react-icons/bi";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-gray-600 mb-8">
              We&apos;d love to hear from you. Please fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <BiEnvelope className="w-6 h-6" />,
                    title: "Email",
                    content: "support@moyiscan.com",
                    link: "mailto:support@moyiscan.com",
                  },
                  {
                    icon: <BiPhone className="w-6 h-6" />,
                    title: "Phone",
                    content: "+234 800 MOYI SCAN",
                    link: "tel:+2348000000000",
                  },
                  {
                    icon: <BiMap className="w-6 h-6" />,
                    title: "Office",
                    content: "Lagos, Nigeria",
                    link: "#",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="text-brand-primary">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                    (platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="px-4 py-2 bg-gray-50 rounded-lg text-gray-600 hover:bg-brand-primary hover:text-white transition-colors duration-300"
                      >
                        {platform}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all duration-300"
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
