import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, ChevronUp, FileText, Linkedin, Search, PenTool, Globe, Headphones, Code, Briefcase, Sparkles } from 'lucide-react';
import type { Variants } from 'motion/react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import Layout from '../components/layout/Layout';

const heroVariants: { container: Variants; item: Variants } = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 14,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.25,
        duration: 0.6,
      },
    },
  },
};

const heroVisualVariants: { container: Variants; item: Variants } = {
  container: { visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } },
  item: {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', bounce: 0.2, duration: 0.7 } },
  },
};

const services = [
  { icon: <FileText size={18} />, title: 'CV Redesign', desc: 'Professional UK-format CV tailored to the job market.' },
  { icon: <Linkedin size={18} />, title: 'LinkedIn Optimisation', desc: 'Keyword-rich profile that recruiters find first.' },
  { icon: <Search size={18} />, title: 'ATS-Friendly Resume', desc: 'Passes automated screening filters at major employers.' },
  { icon: <PenTool size={18} />, title: 'Content Writing', desc: 'Personal statements, cover letters, and bio copy.' },
  { icon: <Globe size={18} />, title: 'Portfolio Website', desc: 'Custom, mobile-responsive site to showcase your work.' },
  { icon: <Briefcase size={18} />, title: '3 High-Level Projects', desc: 'Tailored to your background and the roles you want next.' },
  { icon: <Headphones size={18} />, title: '1 Month Support', desc: '30 days of updates and fixes after handover.' },
  { icon: <Code size={18} />, title: 'GitHub Profile Optimisation ⭐', desc: 'A standout GitHub profile with pinned repos, a polished README, and activity that impresses hiring managers.' },
];

const faqs = [
  { q: 'How long does the full package take?', a: 'Typically 7–14 working days from when we receive all your information, depending on complexity and customisation.' },
  { q: 'How many revisions are included?', a: 'Your CV, LinkedIn, and content writing each include up to 2 rounds of revisions. Portfolio tweaks are covered during the 1-month support period.' },
  { q: 'Do you offer a payment plan?', a: 'Yes — we offer a 50% upfront / 50% on completion split. Get in touch to discuss flexible options.' },
  { q: "What if I don't have any projects to show?", a: "That is exactly what our Project Development add-on is for. We build a real, course-relevant project with full source code so you have something tangible to present." },
  { q: 'Will my CV pass ATS screening?', a: 'Yes. We format every CV with correct heading structure, keyword optimisation, and clean formatting that applicant tracking systems can parse.' },
  { q: 'What does post-launch support cover?', a: 'Minor content updates, bug fixes, and small design tweaks to your portfolio within the first 30 days after handover.' },
];

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-primary hover:bg-gray-50 transition-colors text-sm"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-secondary shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-secondary shrink-0 ml-2" />}
      </button>
      {open && <div className="px-4 pb-3 text-gray-600 text-sm leading-relaxed">{a}</div>}
    </div>
  );
};

const CareerLaunch = () => {
  useEffect(() => {
    document.title = 'Career Launch Package — GetPixage';
    window.scrollTo(0, 0);

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
    <Layout>

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-white to-gray-100 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none hidden md:block" />

        <div className="relative pt-32 pb-4 md:pt-44">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedGroup variants={heroVariants}>
                  <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  <Sparkles size={12} />
                  For UK Students &amp; Graduates
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Land Your First Role.<br />
                  <span className="gradient-text-animated">Without the Guesswork.</span>
                </h1>
                <p className="mx-auto max-w-xl text-sm sm:text-base md:text-lg text-gray-600 mb-7 leading-relaxed">
                  CV, LinkedIn, ATS resume, portfolio website &amp; expert content writing — everything in one package.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href="#get-started" className="btn-primary text-sm w-full sm:w-auto">
                    Get Started <ArrowRight size={16} className="ml-1" />
                  </a>
                  <a href="#pricing" className="btn-outline text-sm w-full sm:w-auto">See Pricing</a>
                </div>
                <p className="mt-4 text-gray-400 text-xs">No commitment · Response within 24 hours</p>
              </AnimatedGroup>
            </div>
          </div>

          {/* Full-width package showcase */}
          <AnimatedGroup variants={heroVisualVariants}>
            <div className="relative mt-10 md:mt-16 px-4 md:px-6">
              <div
                aria-hidden
                className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-white pointer-events-none"
              />
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-gray-100 shadow-premium-lg bg-white">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 h-5 flex-1 max-w-[220px] bg-white rounded-md border border-gray-100 flex items-center px-2">
                    <span className="text-[10px] text-gray-400">Career Launch Package</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-secondary" />
                      </span>
                      <span className="text-sm text-gray-700 leading-snug">{service.title}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 bg-gray-50/60">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-2xl font-bold text-primary">£849</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Check size={14} className="text-secondary" />
                    1 Month Support Included, free
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-white border-y border-gray-100 py-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2 md:gap-8 text-xs text-gray-500 font-medium">
            {['✅ UK CV Formats', '✅ ATS-Tested', '✅ Real Portfolios', '✅ 1-Month Support', '✅ Student Pricing'].map((t) => (
              <span key={t} className="text-center">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — compact icon + title side-by-side grid ── */}
      <section className="section-padding bg-white" id="services">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 reveal">
            <h2 className="section-title">Everything in One Package</h2>
            <p className="section-subtitle">Eight career essentials built together so your CV, LinkedIn, and portfolio tell one compelling story.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-3 md:p-5 card-hover reveal-anim"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="bg-secondary/10 p-2 rounded-md shrink-0 mt-0.5">
                  <span className="text-secondary">{s.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary text-xs sm:text-sm md:text-base leading-snug mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section-padding bg-gray-50" id="pricing">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 reveal">
            <h2 className="section-title">Clear, Honest Pricing</h2>
            <p className="section-subtitle">No hidden fees. No surprises. Just straightforward value for students.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto reveal">

            {/* Main package */}
            <div className="rounded-xl shadow-lg overflow-hidden border-2 border-secondary">
              <div className="bg-secondary text-white text-center py-1.5 text-xs font-semibold tracking-wide">
                ⭐ Most Popular
              </div>
              <div className="bg-white p-5 md:p-7">
                <h3 className="text-lg font-bold text-primary mb-1">Career Launch Package</h3>
                <p className="text-gray-500 text-xs mb-3">Full career toolkit — everything in one place</p>
                <div className="mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary">£849 – £1,250</span>
                  <span className="text-gray-400 text-xs"> one-time</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">Exact price confirmed on your free consultation call.</p>
                <ul className="space-y-2 mb-5">
                  {['CV Redesign', 'LinkedIn Optimisation', 'ATS-Friendly Resume', 'Content Writing', 'Portfolio Website', '3 High-Level Projects', '1 Month Support', 'GitHub Profile Optimisation ⭐'].map((item) => (
                    <li key={item} className="flex items-center text-xs md:text-sm text-gray-700">
                      <Check size={14} className="text-secondary mr-2 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <a href="#get-started" className="btn-primary w-full justify-center text-sm">
                  Get Started <ArrowRight size={15} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Add-on */}
            <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-50 text-gray-500 text-center py-1.5 text-xs font-semibold tracking-wide border-b border-gray-200">
                Optional Add-On
              </div>
              <div className="bg-white p-5 md:p-7">
                <div className="flex items-center gap-2 mb-1">
                  <Code className="text-secondary shrink-0" size={18} />
                  <h3 className="text-lg font-bold text-primary">Project &amp; Source Code</h3>
                </div>
                <p className="text-gray-500 text-xs mb-3">No projects to show? We build one for you.</p>
                <div className="mb-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary">From £150</span>
                </div>
                <p className="text-gray-400 text-xs mb-4">Maintenance fees quoted separately after handover.</p>
                <ul className="space-y-2 mb-5">
                  {['Course-relevant custom project', 'Full source code handed over', 'Documented & portfolio-ready', 'Relevant to roles you are applying for'].map((item) => (
                    <li key={item} className="flex items-center text-xs md:text-sm text-gray-700">
                      <Check size={14} className="text-secondary mr-2 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mb-4">⚠ Maintenance fees charged separately, quoted by scope.</p>
                <Link to="/contact" className="btn-outline w-full justify-center text-sm">
                  Enquire About Add-On
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Inline Contact Form ── */}
      <section className="section-padding bg-white" id="get-started">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-6 reveal-anim">
            <span className="inline-block bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Ready to Get Started?
            </span>
            <h2 className="section-title">Fill In the Form Below</h2>
            <p className="section-subtitle mx-auto text-sm">
              Tell us a little about yourself and we'll get back to you within 24 hours.
            </p>
            <p className="mt-3 text-secondary text-xs font-medium animate-pulse">
              Don't see the form? Just refresh the page to load it.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden reveal">
            <div
              className="refrens-contact-form refrens-contact-form--boxed"
              data-url-key="info-webxp"
              data-form-key="6a1fab0f630c880011e45f6e"
              data-render-type="inline"
            />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto reveal">
            {[
              { stat: '7–14 days', label: 'Turnaround', emoji: '⚡' },
              { stat: '2 rounds', label: 'Revisions included', emoji: '✏️' },
              { stat: '30 days', label: 'Post-launch support', emoji: '🛡️' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-100 rounded-lg p-3 md:p-6 text-center card-hover">
                <div className="text-2xl md:text-3xl mb-1">{item.emoji}</div>
                <div className="text-base md:text-2xl font-bold text-secondary mb-0.5">{item.stat}</div>
                <div className="text-gray-500 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 reveal">
            <h2 className="section-title">FAQs</h2>
            <p className="section-subtitle mx-auto">Everything students ask before getting started.</p>
          </div>
          <div className="space-y-2 reveal">
            {faqs.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-xl reveal-anim">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Ready to Launch Your Career?</h2>
          <p className="text-gray-300 text-sm md:text-lg mb-7">Book a free, no-obligation consultation and we will put together the right package for you.</p>
          <a href="#get-started" className="btn-primary text-sm md:text-base px-8 py-3">
            Fill In the Form <ArrowRight size={16} className="ml-2" />
          </a>
          <p className="mt-3 text-gray-400 text-xs">No commitment · Free 30-minute call · Reply within 24 hrs</p>
        </div>
      </section>

    </Layout>
  );
};

export default CareerLaunch;
