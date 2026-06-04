import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CareerLaunchBanner = () => (
  <section className="bg-primary relative overflow-hidden py-12 md:py-16">
    {/* decorative blobs */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

    <div className="container-custom relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 reveal-anim">

        {/* Left: copy */}
        <div className="text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            <Sparkles size={13} />
            New — Exclusively for UK Students
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Career Launch Package<br />
            <span className="gradient-text">From £849 — All-in-One.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            CV redesign · LinkedIn · ATS resume · portfolio website · content writing · GitHub profile ⭐ · 1 month support. Everything a UK student needs to get hired — in one package.
          </p>
        </div>

        {/* Right: CTA box */}
        <div className="shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-full md:w-64 backdrop-blur-sm">
          <p className="text-gray-300 text-xs uppercase tracking-widest mb-1">Starting from</p>
          <p className="text-4xl font-bold text-white mb-1">£849</p>
          <p className="text-gray-400 text-xs mb-5">One-time · No hidden fees</p>
          <Link
            to="/career-launch"
            className="bg-secondary hover:bg-secondary-600 text-white w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors"
          >
            View Package <ArrowRight size={15} />
          </Link>
          <p className="text-gray-500 text-xs mt-3">Free consultation · Reply in 24 hrs</p>
        </div>

      </div>
    </div>
  </section>
);

export default CareerLaunchBanner;
