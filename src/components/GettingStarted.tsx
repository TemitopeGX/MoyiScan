import {
  BiDownload,
  BiUserPlus,
  BiWallet,
  BiRocket,
  BiMobile,
  BiShieldAlt2,
  BiCheckCircle,
  BiTransfer,
} from "react-icons/bi";

export default function GettingStarted() {
  const steps = [
    {
      title: "Download App",
      description: "Get the MoyiScan app from your device's app store",
      icon: <BiDownload className="w-12 h-12" />,
      subIcons: [
        <BiMobile key="mobile" className="w-6 h-6" />,
        <BiCheckCircle key="check" className="w-6 h-6" />,
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Create Account",
      description: "Sign up with your phone number and basic details",
      icon: <BiUserPlus className="w-12 h-12" />,
      subIcons: [
        <BiShieldAlt2 key="shield" className="w-6 h-6" />,
        <BiCheckCircle key="check" className="w-6 h-6" />,
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Fund Wallet",
      description: "Add money to your wallet using your preferred method",
      icon: <BiWallet className="w-12 h-12" />,
      subIcons: [
        <BiTransfer key="transfer" className="w-6 h-6" />,
        <BiCheckCircle key="check" className="w-6 h-6" />,
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Start Using",
      description: "Begin making payments and enjoying our services",
      icon: <BiRocket className="w-12 h-12" />,
      subIcons: [
        <BiTransfer key="transfer" className="w-6 h-6" />,
        <BiCheckCircle key="check" className="w-6 h-6" />,
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium bg-brand-primary/10 text-brand-primary rounded-lg">
            <span className="w-1 h-1 rounded-full bg-brand-primary" />
            Get Started
          </span>
          <h2 className="mt-8 text-4xl md:text-5xl font-bold text-gray-900">
            Start Your Journey
            <span className="text-brand-primary"> in Minutes</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to begin your seamless digital payment
            experience
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="mb-6">
                {/* Main Icon */}
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.icon}
                </div>

                {/* Sub Icons */}
                <div className="flex gap-3 justify-center">
                  {step.subIcons.map((subIcon, idx) => (
                    <div
                      key={idx}
                      className="p-2 bg-gray-50 rounded-lg text-gray-600 group-hover:text-brand-primary group-hover:bg-gray-100 transition-colors duration-300"
                    >
                      {subIcon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>

              {/* Progress Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                  <div className="w-2 h-2 rounded-full bg-brand-primary absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-xl hover:bg-brand-primary/90 transition-colors duration-300 group"
          >
            <span className="font-medium">Download Now</span>
            <BiDownload className="w-5 h-5 group-hover:animate-bounce" />
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Available on iOS and Android devices
          </p>
        </div>
      </div>
    </section>
  );
}
