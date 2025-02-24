import Image from "next/image";

export default function AppShowcase() {
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
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-medium">How It Works</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Everything at your fingertips
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            MoyiScan brings all your financial needs into one simple, secure
            app. Here's what you can do:
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li
                      key={item}
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
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 rounded-[2rem] blur-2xl" />
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={300}
                  className="relative rounded-2xl shadow-xl border border-white/20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
