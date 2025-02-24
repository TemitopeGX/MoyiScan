import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          {/* Content Sections */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 mb-4">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and understanding how
                you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600">
                    Required for the operation of our website. They enable basic
                    functions like page navigation and access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-600">
                    Help us understand how visitors interact with our website by
                    collecting and reporting information anonymously.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-600">
                    Remember choices you make to improve your experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Targeting Cookies
                  </h3>
                  <p className="text-gray-600">
                    Track your visit to our website and other websites to
                    deliver relevant advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their
                settings preferences. However, limiting cookies may affect your
                experience of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Choices
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Delete cookies periodically</li>
                <li>Set browser preferences for cookie handling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about our Cookie Policy, please
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
