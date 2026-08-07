
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { seoConfig } from '../lib/seo-data.mjs';
import Reveal from '@/components/ui/Reveal';

const LAST_UPDATED = 'July 23, 2026';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'who-we-are', title: '2. Who We Are' },
  { id: 'our-services', title: '3. Our Services' },
  { id: 'pricing-payment', title: '4. Quotes, Pricing & Payment' },
  { id: 'timelines', title: '5. Project Timelines' },
  { id: 'revisions', title: '6. Revisions' },
  { id: 'your-responsibilities', title: '7. Your Responsibilities' },
  { id: 'intellectual-property', title: '8. Intellectual Property' },
  { id: 'third-party', title: '9. Third-Party Services' },
  { id: 'cancellations-refunds', title: '10. Cancellations & Refunds' },
  { id: 'support-maintenance', title: '11. Support & Maintenance' },
  { id: 'warranties', title: '12. Warranties & Disclaimers' },
  { id: 'liability', title: '13. Limitation of Liability' },
  { id: 'confidentiality', title: '14. Confidentiality' },
  { id: 'changes', title: '15. Changes to These Terms' },
  { id: 'governing-law', title: '16. Governing Law' },
  { id: 'contact', title: '17. Contact Us' },
];

const Terms = () => {
  return (
    <Layout>
      <SEO {...seoConfig['/terms']} />
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="eyebrow">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Terms &amp; Conditions</h1>
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
                  These Terms &amp; Conditions ("Terms") explain how GetPixage works with clients. Please read
                  them before engaging our services. If anything here is unclear, message us — we're happy to
                  talk it through before you commit to anything.
                </p>

                <div id="introduction" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
                  <p>
                    Welcome to GetPixage ("GetPixage", "we", "us", "our"). These Terms govern your access to and
                    use of getpixage.com (the "Website") and any services we provide, including website design
                    and development, UI/UX design, AI automation, SaaS and landing page builds, e-commerce
                    development, SEO, and the Career Launch Package (together, the "Services").
                  </p>
                  <p className="mt-3">
                    By engaging us for any Service, browsing the Website, or submitting an enquiry, you agree to
                    be bound by these Terms. If you do not agree, please don't use the Website or engage our
                    Services.
                  </p>
                  <p className="mt-3">
                    If you are a consumer (acting for purposes outside your trade, business, craft, or
                    profession), nothing in these Terms affects your statutory rights under the Consumer Rights
                    Act 2015, the Consumer Contracts (Information, Cancellation and Additional Charges)
                    Regulations 2013, or other applicable UK consumer protection law.
                  </p>
                </div>

                <div id="who-we-are" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">2. Who We Are</h2>
                  <p>
                    GetPixage is a UK-based, remote-first design and development studio founded by Pranav. We
                    serve clients across the UK and internationally.
                  </p>
                  <p className="mt-3">
                    Phone / WhatsApp: <a href="tel:+447415960499" className="text-secondary hover:underline">+44 7415 960499</a>
                    <br />
                    Email: <a href="mailto:WebXp.combusiness@gmail.com" className="text-secondary hover:underline">WebXp.combusiness@gmail.com</a>
                  </p>
                </div>

                <div id="our-services" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">3. Our Services</h2>
                  <p>We offer:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Website design &amp; development</li>
                    <li>UI/UX design</li>
                    <li>AI automation and workflow integration</li>
                    <li>SaaS &amp; landing page development</li>
                    <li>E-commerce development</li>
                    <li>SEO &amp; performance optimisation</li>
                    <li>
                      The Career Launch Package (CV redesign, LinkedIn optimisation, ATS-friendly resume
                      writing, portfolio website, content writing, GitHub profile optimisation, and related
                      career services)
                    </li>
                  </ul>
                  <p className="mt-3">
                    The exact scope, deliverables, and price for your project will be confirmed in writing (via
                    email, WhatsApp, or an invoice/quote) before work begins. That written confirmation,
                    together with these Terms, forms the agreement between us.
                  </p>
                </div>

                <div id="pricing-payment" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">4. Quotes, Pricing &amp; Payment</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      Prices shown on the Website (including package pricing) are indicative starting prices.
                      The final price depends on your specific requirements and is confirmed before work
                      begins.
                    </li>
                    <li>
                      Unless otherwise agreed in writing, projects are billed with 50% payable upfront as a
                      deposit before work begins, and the remaining 50% due on completion, before final
                      files/access are handed over. The same split applies to the Career Launch Package and its
                      add-ons unless we agree otherwise.
                    </li>
                    <li>
                      Ongoing maintenance plans (from £9/month) are billed monthly in advance and may be
                      cancelled by either party with 30 days' written notice.
                    </li>
                    <li>
                      All prices are in GBP (£) unless stated otherwise. We may update our standard pricing at
                      any time; changes won't affect a project you've already agreed a price for.
                    </li>
                  </ul>
                </div>

                <div id="timelines" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">5. Project Timelines</h2>
                  <p>
                    Estimated turnaround times (for example, 5–7 business days for Basic packages, 10–14 days
                    for Mid-tier, 3–4 weeks for Advanced/custom builds) are estimates, not guarantees, and
                    depend on how promptly you provide content, feedback, and approvals. Delays caused by late
                    content, slow feedback, or scope changes on your side may extend the timeline accordingly.
                  </p>
                </div>

                <div id="revisions" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">6. Revisions</h2>
                  <p>
                    Most packages include up to 2 rounds of revisions during the design/build phase. Additional
                    revision rounds, or changes requested after a package's revision allowance is used, may be
                    quoted and charged separately. Requests that go beyond the originally agreed scope (new
                    pages, new features, a different design direction) are treated as a change request and
                    quoted separately.
                  </p>
                </div>

                <div id="your-responsibilities" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">7. Your Responsibilities</h2>
                  <p>To deliver your project on time and to a high standard, we ask that you:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Provide accurate information, content, images, and brand assets in a timely manner;</li>
                    <li>Respond to requests for feedback or approval within a reasonable time;</li>
                    <li>Ensure you have the legal right to use any content, images, logos, or text you provide us; and</li>
                    <li>Keep login credentials for third-party accounts (hosting, domain, etc.) secure and share them with us only through secure channels.</li>
                  </ul>
                  <p className="mt-3">
                    We're not responsible for delays or issues caused by inaccurate, incomplete, or late
                    information or materials provided by you.
                  </p>
                </div>

                <div id="intellectual-property" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">8. Intellectual Property</h2>
                  <p>Upon full and final payment, ownership of the final website files, designs, and other agreed deliverables created specifically for your project transfers to you, except for:</p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>Third-party assets (stock photos, fonts, plugins, libraries), which remain subject to their own licences; and</li>
                    <li>Pre-existing tools, code snippets, frameworks, or design systems we use across multiple client projects, which we retain the right to reuse.</li>
                  </ul>
                  <p className="mt-3">
                    Until full payment is received, all work remains our property and may not be used, published,
                    or distributed. Unless you tell us otherwise in writing, we may showcase completed work
                    (including screenshots and links) in our portfolio, on the Website, and in marketing
                    materials — as we have done with prior client projects referenced on this site.
                  </p>
                </div>

                <div id="third-party" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">9. Third-Party Services</h2>
                  <p>
                    Our Services may rely on or integrate with third-party tools and platforms (for example,
                    hosting providers, domain registrars, payment processors, WhatsApp, Refrens, or AI service
                    providers). We're not responsible for outages, changes, or issues caused by these third
                    parties, though we'll do our best to help you resolve them.
                  </p>
                </div>

                <div id="cancellations-refunds" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">10. Cancellations &amp; Refunds</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      If you're a consumer entering into a contract with us online or at a distance, you
                      generally have a 14-day right to cancel under the Consumer Contracts Regulations 2013. If
                      you ask us to begin work during this 14-day period, you acknowledge that you may lose this
                      cancellation right once the service has been fully performed, and you may be liable to pay
                      for work carried out up to the point of cancellation.
                    </li>
                    <li>
                      Outside of the above statutory right, deposits are non-refundable once work has commenced,
                      as they cover time and resources already committed to your project.
                    </li>
                    <li>
                      If you cancel a project after the deposit but before completion, you'll be invoiced for
                      work completed to date, with any balance of the deposit refunded or retained as
                      appropriate.
                    </li>
                    <li>
                      We reserve the right to pause or terminate a project, with reasonable notice, if payment is
                      significantly overdue or if we're unable to reach you for an extended period.
                    </li>
                  </ul>
                </div>

                <div id="support-maintenance" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">11. Support &amp; Maintenance</h2>
                  <p>
                    Where a support window is included with your package (for example, 30 days post-launch on
                    the Career Launch Package), it covers minor fixes, content updates, and bug resolution
                    related to our original work — not new features or major redesigns. Ongoing maintenance
                    plans are optional and cover regular updates, monitoring, and backups as described at the
                    time of purchase.
                  </p>
                </div>

                <div id="warranties" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">12. Warranties &amp; Disclaimers</h2>
                  <p>
                    We aim to deliver high-quality, professional work, but we don't guarantee specific business
                    outcomes (such as a particular increase in traffic, leads, sales, or search ranking), as
                    these depend on many factors outside our control. The Website and our Services are provided
                    "as is." To the extent permitted by law, we exclude all implied warranties, except those
                    that cannot lawfully be excluded (including the statutory consumer rights referenced in
                    Section 1).
                  </p>
                </div>

                <div id="liability" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">13. Limitation of Liability</h2>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>To the extent permitted by law, our total liability arising out of or in connection with a project is limited to the total fees you paid us for that project.</li>
                    <li>We're not liable for indirect or consequential losses, including loss of profits, business, or data, arising from the use of our Services.</li>
                    <li>Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot lawfully be limited or excluded.</li>
                  </ul>
                </div>

                <div id="confidentiality" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">14. Confidentiality</h2>
                  <p>
                    We treat information you share with us about your business as confidential and won't
                    disclose it to third parties, except where necessary to deliver the Service (for example, to
                    a sub-contractor bound by confidentiality) or where required by law.
                  </p>
                </div>

                <div id="changes" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">15. Changes to These Terms</h2>
                  <p>
                    We may update these Terms from time to time to reflect changes in our Services or legal
                    requirements. The "Last updated" date at the top of this page shows when it was last
                    revised. Continued use of our Services after changes take effect means you accept the
                    updated Terms.
                  </p>
                </div>

                <div id="governing-law" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">16. Governing Law</h2>
                  <p>
                    These Terms are governed by the laws of England and Wales. Any disputes will be subject to
                    the exclusive jurisdiction of the courts of England and Wales, without prejudice to any
                    mandatory consumer protections that apply in your country of residence.
                  </p>
                </div>

                <div id="contact" className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-primary mb-3">17. Contact Us</h2>
                  <p>Questions about these Terms? Reach out:</p>
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

export default Terms;
