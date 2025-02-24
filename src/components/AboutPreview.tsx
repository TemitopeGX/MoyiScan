import Link from "next/link";
import { BiGroup, BiMoney, BiStar } from "react-icons/bi";

export default function AboutPreview() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Content - Now centered and full width */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Transforming Digital
            <br /> Payments in Africa
          </h2>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            We're building the future of digital payments, making transactions
            faster, safer, and more accessible for everyone across Africa.
          </p>

          {/* Stats Grid - Now 3 columns by default */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
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
              <div
                key={index}
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
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
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
          </div>
        </div>

        {/* Decorative Elements - Repositioned */}
        <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-brand-secondary/40 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute -left-4 -top-4 w-40 h-40 bg-brand-primary/40 rounded-full blur-2xl animate-float" />
      </div>
    </section>
  );
}
