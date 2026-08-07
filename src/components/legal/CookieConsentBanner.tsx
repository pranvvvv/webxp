import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'getpixage-cookie-consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Consent = 'granted' | 'denied';

function applyConsent(consent: Consent) {
  window.gtag?.('consent', 'update', {
    ad_storage: consent,
    ad_user_data: consent,
    ad_personalization: consent,
    analytics_storage: consent,
  });
}

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === 'granted' || stored === 'denied') {
      applyConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const choose = (consent: Consent) => {
    localStorage.setItem(STORAGE_KEY, consent);
    applyConsent(consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-premium-lg p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie size={28} className="text-secondary shrink-0" />
        <p className="text-sm text-gray-600 leading-relaxed flex-1">
          We use cookies, including third-party cookies from Google AdSense, to serve ads and understand site
          traffic. See our{' '}
          <Link to="/privacy-policy" className="text-secondary underline">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => choose('denied')}
            className="flex-1 sm:flex-none btn-outline text-sm px-4 py-2"
          >
            Necessary only
          </button>
          <button
            onClick={() => choose('granted')}
            className="flex-1 sm:flex-none btn-primary text-sm px-4 py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
