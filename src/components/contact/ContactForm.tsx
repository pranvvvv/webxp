
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Only inject once — Refrens auto-scans for .refrens-contact-form on load
    if (!document.getElementById('refrens-venera')) {
      const script = document.createElement('script');
      script.id = 'refrens-venera';
      script.src = 'https://assets.refrens.com/venus/venera.1.4.3.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Send us a message</h2>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div
          className="refrens-contact-form refrens-contact-form--boxed"
          data-url-key="info-webxp"
          data-form-key="6a1fab0f630c880011e45f6e"
          data-render-type="inline"
        />
      </div>
      <p className="mt-3 text-secondary text-xs font-medium">
        Don't see the form? Just refresh the page to load it.
      </p>
    </div>
  );
};

export default ContactForm;
