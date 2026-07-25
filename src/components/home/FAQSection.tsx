
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Reveal from '@/components/ui/Reveal';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope: Basic sites take 5–7 business days, Mid-tier projects take 10–14 days, and Advanced/custom builds run 3–4 weeks. You\'ll get a clear estimate before we start.',
  },
  {
    q: "What's included in a website package?",
    a: 'Every package includes a fully responsive design, lead-focused structure, and professional copy and visuals. Higher tiers add SEO, CMS setup, e-commerce, and custom integrations — see the Services & Packages section for the full breakdown.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Every project includes a support window post-launch, and ongoing maintenance plans are available from £9/month for updates, monitoring, and backups.',
  },
  {
    q: 'Can you add AI automation to an existing site?',
    a: 'Yes — AI agents and workflow automation can be integrated into an existing site or business process, not just new builds.',
  },
  {
    q: 'Do you only work with UK-based clients?',
    a: "We're remote-first and primarily serve clients across the UK, but we're happy to discuss projects from anywhere.",
  },
  {
    q: 'How do I get started?',
    a: 'Message us on WhatsApp or fill out the contact form with a bit about your project — we usually reply within a few hours with next steps.',
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="card-premium overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-primary hover:bg-gray-50/60 transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={cn('text-secondary shrink-0 transition-transform duration-300', open && 'rotate-180')}
          size={18}
        />
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-premium',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you might want to know before reaching out.
          </p>
        </Reveal>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 60}>
              <FAQItem q={faq.q} a={faq.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
