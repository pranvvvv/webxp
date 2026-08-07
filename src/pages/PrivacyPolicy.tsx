
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { seoConfig } from '../lib/seo-data.mjs';
import Reveal from '@/components/ui/Reveal';

const LAST_UPDATED = 'August 7, 2026';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'who-we-are', title: '2. Who We Are' },
  { id: 'data-we-collect', title: '3. Data We Collect' },
  { id: 'how-we-use-data', title: '4. How We Use Your Data' },
  { id: 'legal-basis', title: '5. Our Legal Basis for Processing' },
  { id: 'cookies', title: '6. Cookies & Similar Technologies' },
  { id: 'third-parties', title: '7. Third Parties We Share Data With' },
  { id: 'international-transfers', title: '8. International Data Transfers' },
  { id: 'retention', title: '9. Data Retention' },
  { id: 'your-rights', title: '10. Your Rights' },
  { id: 'children', title: "11. Children's Privacy" },
  { id: 'changes', title: '12. Changes to This Policy' },
  { id: 'contact', title: '13. Contact Us' },
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO {...seoConfig['/privacy-policy']} />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {LAST_UPDATED}</p>
          </Reveal>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 max-w-5xl mx-auto">
            {/* Table of contents */}
            <Reveal className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">On this page</p>
                <nav className="space-y-2.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-600 hover:text-secondary transition-colors leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </Reveal>

            {/* Content */}
            <Reveal delay={100} className="max-w-2xl">
              <div className="prose-legal text-gray-700 leading-relaxed space-y-10">
                <p className="text-gray-600">
                  This Privacy Policy explains what personal data GetPixage collects, why, and what rights you
                  have over it. It applies to getpixage.com and to the enquiries, forms, and services described
                  on this site. It should be read alongside our{' '}
                  <a href="/terms" className="text-secondary hover:underline">Terms &amp; Conditions</a>.
                </p>

                <div id="introduction" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
                  <p>
                    We take your privacy seriously. This policy is written to comply with the UK General Data
                    Protection Regulation (UK GDPR), the Data Protection Act 2018, and the Privacy and Electronic
                    Communications Regulations 2003 (PECR).
                  </p>
                </div>

                <div id="who-we-are" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">2. Who We Are</h2>
                  <p>
                    GetPixage is a UK-based, remote-first design and development studio founded by Pranav. For the
                    purposes of data protection law, GetPixage is the "data controller" of the personal data
                    described in this policy.
                  </p>
                  <p className="mt-3">
                    Phone / WhatsApp: <a href="tel:+447415960499" className="text-secondary hover:underline">+44 7415 960499</a>
                    <br />
                    Email: <a href="mailto:WebXp.combusiness@gmail.com" className="text-secondary hover:underline">WebXp.combusiness@gmail.com</a>
                  </p>
                </div>

                <div id="data-we-collect" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">3. Data We Collect</h2>
                  <p>We collect personal data when you interact with the Website, specifically:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>
                      <strong>Contact form:</strong> name, email, phone number, and message content. Submitting
                      this form opens a pre-filled message to our WhatsApp number — the data you enter is shared
                      with us via WhatsApp (operated by Meta), not stored on our own servers.
                    </li>
                    <li>
                      <strong>Career Launch enquiry form:</strong> name, email, phone, and any other details you
                      provide, submitted via our form provider, Refrens.
                    </li>
                    <li>
                      <strong>Newsletter sign-up:</strong> your email address, if you choose to subscribe.
                    </li>
                    <li>
                      <strong>Direct contact:</strong> anything you send us by email or WhatsApp.
                    </li>
                    <li>
                      <strong>Automatically collected data:</strong> standard web server logs (IP address,
                      browser type, pages visited, approximate location) collected by our hosting provider,
                      Vercel, for security and performance purposes.
                    </li>
                    <li>
                      <strong>Advertising cookies:</strong> if you accept cookies via our consent banner, Google
                      AdSense may set cookies and collect identifiers to serve and measure ads — see{' '}
                      <a href="#cookies" className="text-secondary hover:underline">Section 6</a>.
                    </li>
                  </ul>
                </div>

                <div id="how-we-use-data" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">4. How We Use Your Data</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>To respond to enquiries and provide quotes for our services;</li>
                    <li>To deliver, manage, and support projects you engage us for;</li>
                    <li>To send newsletter updates, if you've opted in (you can unsubscribe at any time);</li>
                    <li>To maintain the security and performance of the Website; and</li>
                    <li>Where you've given consent, to show relevant advertising and measure its performance.</li>
                  </ul>
                </div>

                <div id="legal-basis" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">5. Our Legal Basis for Processing</h2>
                  <p>Depending on the context, we rely on:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li><strong>Contract:</strong> to respond to enquiries and deliver services you've requested;</li>
                    <li><strong>Legitimate interests:</strong> to keep the Website secure and understand how it's used;</li>
                    <li><strong>Consent:</strong> for newsletter emails and for non-essential advertising cookies, which you can withdraw at any time.</li>
                  </ul>
                </div>

                <div id="cookies" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">6. Cookies &amp; Similar Technologies</h2>
                  <p>
                    When you first visit the Website, a banner asks you to accept or decline non-essential
                    cookies. Until you accept, advertising cookies are blocked (via Google Consent Mode).
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>
                      <strong>Advertising cookies (Google AdSense):</strong> third-party cookies used to serve
                      ads, limit how often you see one, and measure ad performance. Google may also use these
                      cookies to personalise ads based on your browsing activity. You can opt out of personalised
                      advertising generally via{' '}
                      <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        Google Ads Settings
                      </a>{' '}
                      or{' '}
                      <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                        youronlinechoices.eu
                      </a>.
                    </li>
                    <li>
                      <strong>Preference storage:</strong> we use your browser's local storage (not a cookie) to
                      remember your cookie choice so we don't ask again on every visit.
                    </li>
                  </ul>
                  <p className="mt-3">
                    You can also block or delete cookies at any time through your browser settings, though this
                    may affect how ads and some site features behave.
                  </p>
                </div>

                <div id="third-parties" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">7. Third Parties We Share Data With</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>Google (AdSense):</strong> serves and measures advertising, subject to your cookie consent;</li>
                    <li><strong>Refrens:</strong> processes submissions from our Career Launch enquiry form;</li>
                    <li><strong>WhatsApp (Meta):</strong> receives messages you choose to send us through WhatsApp;</li>
                    <li><strong>Vercel:</strong> hosts the Website and processes standard server logs.</li>
                  </ul>
                  <p className="mt-3">
                    We don't sell your personal data to anyone.
                  </p>
                </div>

                <div id="international-transfers" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">8. International Data Transfers</h2>
                  <p>
                    Some of the third parties listed above (including Google, Meta, and Vercel) may process data
                    on servers located outside the UK. Where this happens, we rely on their compliance with
                    recognised safeguards, such as the UK's International Data Transfer Agreement or adequacy
                    regulations.
                  </p>
                </div>

                <div id="retention" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">9. Data Retention</h2>
                  <p>
                    We keep enquiry and project-related data for as long as reasonably needed to deliver our
                    services and meet legal or accounting obligations, and delete or anonymise it when it's no
                    longer needed. Newsletter emails are kept until you unsubscribe.
                  </p>
                </div>

                <div id="your-rights" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">10. Your Rights</h2>
                  <p>Under UK GDPR, you have the right to:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Access the personal data we hold about you;</li>
                    <li>Correct inaccurate data;</li>
                    <li>Request erasure of your data;</li>
                    <li>Restrict or object to certain processing;</li>
                    <li>Request a copy of your data in a portable format; and</li>
                    <li>Withdraw consent at any time (for newsletter emails or advertising cookies), without affecting processing carried out before withdrawal.</li>
                  </ul>
                  <p className="mt-3">
                    To exercise any of these rights, contact us using the details in{' '}
                    <a href="#contact" className="text-secondary hover:underline">Section 13</a>. You also have
                    the right to complain to the{' '}
                    <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                      Information Commissioner's Office (ICO)
                    </a>, the UK's data protection regulator.
                  </p>
                </div>

                <div id="children" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">11. Children's Privacy</h2>
                  <p>
                    Our Services are intended for businesses, students, and adults. We don't knowingly collect
                    personal data from children under 13.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">12. Changes to This Policy</h2>
                  <p>
                    We may update this policy from time to time. The "Last updated" date at the top shows when it
                    was last revised. Significant changes will be reflected here.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">13. Contact Us</h2>
                  <p>Questions about this policy or your data? Reach out:</p>
                  <p className="mt-3">
                    Phone / WhatsApp: <a href="tel:+447415960499" className="text-secondary hover:underline">+44 7415 960499</a>
                    <br />
                    Email: <a href="mailto:WebXp.combusiness@gmail.com" className="text-secondary hover:underline">WebXp.combusiness@gmail.com</a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
