import Link from "next/link";
import Image from "next/image";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

export default function Footer() {
  const footerLinks = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Compliance", href: "#" },
    ],
    Support: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Security", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <BiLogoFacebook className="w-5 h-5" />, href: "#" },
    { icon: <BiLogoTwitter className="w-5 h-5" />, href: "#" },
    { icon: <BiLogoInstagram className="w-5 h-5" />, href: "#" },
    { icon: <BiLogoLinkedin className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
            >
              <Image
                src="/logo.png"
                alt="MoyiScan Logo"
                width={40}
                height={40}
                className="h-8 w-auto md:h-12"
              />
              <div className="text-xl md:text-2xl font-bold">
                <span className="text-brand-primary">Moyi</span>
                <span className="text-brand-secondary">Scan</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm mb-4 md:mb-6">
              Making digital payments simple, fast, and secure for everyone.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-brand-primary transition-colors duration-300 p-2"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1 sm:col-span-1 md:col-span-3">
              <h3 className="font-semibold text-gray-900 mb-3 md:mb-4">
                {title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-brand-primary transition-colors duration-300 text-sm md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} MoyiScan. All rights reserved.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <Image
                src="/app-store-badge.png"
                alt="Download on App Store"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
