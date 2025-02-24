import Link from "next/link";
import Image from "next/image";
import {
  BiTransfer,
  BiMobile,
  BiShield,
  BiChart,
  BiMoney,
  BiCheckCircle,
  BiStar,
} from "react-icons/bi";

export default function HeroSection() {
  // Floating elements data
  const floatingElements = [
    {
      icon: <BiTransfer className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />,
      label: "Instant Transfer",
      position: "top-10 right-2 md:top-20 md:right-[-20%] lg:right-[-15%]",
      animation: "animate-float-delay-2",
    },
    {
      icon: <BiShield className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />,
      label: "Secure",
      position: "bottom-20 left-2 md:bottom-32 md:left-[-20%] lg:left-[-15%]",
      animation: "animate-float-delay-3",
    },
    {
      icon: <BiMobile className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />,
      label: "Mobile First",
      position: "top-32 left-2 md:top-40 md:left-[-25%] lg:left-[-20%]",
      animation: "animate-float-delay-1",
    },
    {
      icon: <BiChart className="w-5 h-5 md:w-6 md:h-6 text-brand-primary" />,
      label: "Analytics",
      position:
        "bottom-40 right-2 md:bottom-48 md:right-[-25%] lg:right-[-20%]",
      animation: "animate-float-delay-4",
    },
  ];

  // Success indicators
  const successIndicators = [
    {
      icon: <BiCheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500" />,
      text: "Payment Successful",
      amount: "₦25,000",
      position: "top-1/2 right-2 md:top-60 md:right-[-30%] lg:right-[-25%]",
      animation: "animate-float-delay-2",
    },
    {
      icon: <BiStar className="w-3 h-3 md:w-4 md:h-4 text-yellow-500" />,
      text: "5.0 Rating",
      amount: "Great Service!",
      position: "bottom-1/2 left-2 md:bottom-60 md:left-[-30%] lg:left-[-25%]",
      animation: "animate-float-delay-3",
    },
  ];

  return (
    <section className="relative min-h-screen bg-white pt-16 md:pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-12 relative">
        {/* Top Tag */}
        <div className="flex justify-center mb-8 md:mb-12">
          <span className="inline-flex items-center gap-2 bg-brand-primary/5 text-brand-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm font-medium">
            <span className="flex h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-brand-primary" />
            Let's get your money moving!
          </span>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Premium super app
            <br className="hidden sm:block" />
            <span className="text-brand-primary">made just for you.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            Gain access to endless possibilities with MoyiScan. Send money, buy
            airtime, and make secure payments instantly.
          </p>
          <Link
            href="#download"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-brand-accent transition-all"
          >
            Try MoyiScan
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
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

        {/* App Preview with Enhanced Floating Elements */}
        <div className="relative max-w-lg md:max-w-2xl mx-auto">
          <div className="relative px-4 md:px-0">
            {/* Feature Icons */}
            {floatingElements.map((element, index) => (
              <div
                key={index}
                className={`absolute ${element.position} ${element.animation} z-20`}
              >
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    {element.icon}
                    <span className="text-xs md:text-sm font-medium text-gray-800 whitespace-nowrap">
                      {element.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Success Notifications */}
            {successIndicators.map((indicator, index) => (
              <div
                key={index}
                className={`absolute ${indicator.position} ${indicator.animation} z-20`}
              >
                <div className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    {indicator.icon}
                    <div className="flex flex-col">
                      <span className="text-[10px] md:text-xs text-gray-600">
                        {indicator.text}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-gray-800">
                        {indicator.amount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Background circles */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
              <div className="flex justify-around">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-r ${
                      i === 0
                        ? "from-blue-400 to-blue-500"
                        : i === 1
                        ? "from-green-400 to-green-500"
                        : "from-purple-400 to-purple-500"
                    } blur-xl opacity-20`}
                  />
                ))}
              </div>
            </div>

            <Image
              src="/app-mockup.png"
              alt="MoyiScan App Interface"
              width={800}
              height={600}
              className="relative z-10 rounded-xl md:rounded-2xl shadow-xl"
              priority
            />

            {/* Feature Cards */}
            <div className="hidden md:block absolute -right-12 top-10 transform rotate-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="w-24 md:w-32 h-20 md:h-24 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -left-12 bottom-10 transform -rotate-6">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="w-24 md:w-32 h-20 md:h-24 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Icons */}
        <div className="mt-12 md:mt-20 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center opacity-60">
          {[
            "Airtime",
            "Data",
            "Pay Bills",
            "Bank Transfer",
            "QR Payments",
            "Security",
          ].map((service) => (
            <div key={service} className="text-center">
              <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 bg-brand-primary/10 rounded-full flex items-center justify-center">
                <span className="text-brand-primary text-xs md:text-sm font-medium">
                  {service[0]}
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-600">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
