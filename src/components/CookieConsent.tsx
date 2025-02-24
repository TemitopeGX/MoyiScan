"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent");
    if (!hasAccepted) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-600">
                  We use cookies to enhance your experience. By continuing to
                  visit this site you agree to our use of cookies.{" "}
                  <a
                    href="/privacy-policy"
                    className="text-brand-primary hover:text-brand-accent underline"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-accent transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
