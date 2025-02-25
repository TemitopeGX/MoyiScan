"use client";

import { motion } from "framer-motion";
import { BiUser, BiMoney, BiStar } from "react-icons/bi";

export default function StatsSection() {
  const stats = [
    {
      icon: <BiUser className="w-6 h-6" />,
      value: "2M+",
      label: "Active Users",
    },
    {
      icon: <BiMoney className="w-6 h-6" />,
      value: "₦5B+",
      label: "Monthly Transactions",
    },
    {
      icon: <BiStar className="w-6 h-6" />,
      value: "4.8/5",
      label: "User Rating",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90 -mx-4 sm:-mx-6 md:-mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm px-4 py-6 sm:p-8 rounded-2xl text-center mx-4 sm:mx-0"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-white/10 rounded-xl text-white">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
