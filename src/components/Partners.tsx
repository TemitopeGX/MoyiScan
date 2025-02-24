import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/partners/partner1.png" },
    { name: "Partner 2", logo: "/partners/partner2.png" },
    { name: "Partner 3", logo: "/partners/partner3.png" },
    { name: "Partner 4", logo: "/partners/partner4.png" },
    { name: "Partner 5", logo: "/partners/partner5.png" },
  ];

  return (
    <section className="py-16 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-gray-600">Trusted By Leading Banks</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-75">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
