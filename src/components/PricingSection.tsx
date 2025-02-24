import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      price: "Free",
      features: [
        "Send money to any bank",
        "Buy airtime & data",
        "Basic bill payments",
        "24/7 support",
      ],
    },
    {
      name: "Pro",
      description: "For power users",
      price: "₦1,000",
      features: [
        "All Basic features",
        "Higher transaction limits",
        "Priority support",
        "Advanced analytics",
        "Custom notifications",
      ],
      popular: true,
    },
    {
      name: "Business",
      description: "For businesses",
      price: "Custom",
      features: [
        "All Pro features",
        "Multiple user accounts",
        "API access",
        "Dedicated account manager",
        "Custom integration",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-medium">Pricing</span>
          <h2 className="text-4xl font-bold mt-4 mb-6">
            Choose the plan that works for you
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-brand-primary text-white ring-4 ring-brand-primary/20"
                  : "bg-white"
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p
                className={`${
                  plan.popular ? "text-white/80" : "text-gray-600"
                } mt-2`}
              >
                {plan.description}
              </p>
              <div className="mt-6 mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span
                    className={`${
                      plan.popular ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    /month
                  </span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className={`block text-center py-3 px-6 rounded-xl font-medium transition-all ${
                  plan.popular
                    ? "bg-white text-brand-primary hover:bg-gray-100"
                    : "bg-brand-primary text-white hover:bg-brand-accent"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
