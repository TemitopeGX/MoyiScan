import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* Content Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                MoyiScan ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile
                application and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Name and contact information</li>
                  <li>Bank account and payment details</li>
                  <li>Government-issued identification</li>
                  <li>Device information and location data</li>
                  <li>Transaction history</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process your transactions</li>
                <li>Verify your identity</li>
                <li>Provide customer support</li>
                <li>Improve our services</li>
                <li>Send important updates and notifications</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information. However, no
                electronic transmission or storage of information can be
                entirely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <Link
                  href="mailto:privacy@moyiscan.com"
                  className="text-brand-primary hover:text-brand-accent"
                >
                  privacy@moyiscan.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
