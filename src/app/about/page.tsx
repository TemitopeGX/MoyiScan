import Image from "next/image";
import {
  BiRocket,
  BiTargetLock,
  BiHeart,
  BiWorld,
  BiTrophy,
  BiGroup,
  BiTime,
  BiCheckShield,
} from "react-icons/bi";

export default function AboutPage() {
  const values = [
    {
      icon: <BiHeart className="w-8 h-8" />,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do",
    },
    {
      icon: <BiRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly pushing boundaries in digital payments",
    },
    {
      icon: <BiCheckShield className="w-8 h-8" />,
      title: "Security",
      description: "Uncompromising commitment to transaction security",
    },
    {
      icon: <BiWorld className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making financial services available to everyone",
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description:
        "MoyiScan was established with a vision to transform digital payments",
    },
    {
      year: "2022",
      title: "Rapid Growth",
      description: "Reached 1 million active users and expanded services",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized as the most innovative fintech solution",
    },
    {
      year: "2024",
      title: "Going Global",
      description: "Expanding operations across multiple African countries",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-dark to-brand-primary/90" />

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building the future of digital payments in Africa, one transaction
              at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re on a mission to transform digital payments
                accessible, efficient, and secure for everyone. We believe in
                the power of technology to transform lives and businesses across
                Africa.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <BiTrophy />, label: "Market Leader" },
                  { icon: <BiGroup />, label: "2M+ Users" },
                  { icon: <BiTime />, label: "24/7 Support" },
                  { icon: <BiTargetLock />, label: "99.9% Uptime" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="text-brand-primary text-xl">
                      {stat.icon}
                    </div>
                    <span className="font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logo.png"
                alt="MoyiScan Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in our mission to transform digital
              payments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-brand-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The milestones that have shaped our growth
            </p>
          </div>

          {/* Timeline for Desktop */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gray-200" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 w-1/2" />
                  <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-primary rounded-full border-4 border-white" />
                  <div className="flex-1 w-1/2 bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-brand-primary font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline for Mobile - Infographic Style */}
          <div className="md:hidden relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-primary/20" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-6 pl-16">
                  {/* Year Circle */}
                  <div className="absolute left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-primary border-4 border-white shadow-md" />

                  {/* Year Label */}
                  <div className="absolute left-0 translate-y-1 text-sm font-bold text-brand-primary">
                    {milestone.year}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-4 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute left-8 top-2 w-8 h-px bg-brand-primary/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
