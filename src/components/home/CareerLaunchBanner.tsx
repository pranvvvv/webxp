import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, FileText, Linkedin, FileCheck2, Globe, PenTool, Github, Clock, Briefcase } from 'lucide-react';

const features = [
  { icon: FileText, label: 'CV Redesign' },
  { icon: Linkedin, label: 'LinkedIn Optimisation' },
  { icon: FileCheck2, label: 'ATS Resume' },
  { icon: PenTool, label: 'Content Writing' },
  { icon: Globe, label: 'Portfolio Website' },
  { icon: Briefcase, label: '3 High-Level Projects' },
  { icon: Clock, label: '1 Month Support' },
  { icon: Github, label: 'GitHub Optimisation ⭐' },
];

const CareerLaunchBanner = () => (
  <section className="bg-primary relative overflow-hidden py-14 md:py-20">
    {/* faint animated grid */}
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        maskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, transparent 75%)',
      }}
    />

    {/* floating glow orbs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none animate-[float_9s_ease-in-out_infinite]" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none animate-[float_11s_ease-in-out_infinite_1s]" />
    <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-secondary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[float_7s_ease-in-out_infinite_.5s]" />

    <div className="container-custom relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 reveal-anim">

        {/* Left: copy */}
        <div className="text-center md:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary border border-secondary/30 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 shadow-glow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <Sparkles size={13} className="animate-pulse" />
            New — Exclusively for UK Students
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
            Career Launch Package<br />
            <span className="gradient-text-animated">From £849 — All-in-One.</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
            Everything a UK student needs to get hired — in one package.
          </p>

          {/* feature chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {features.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className="reveal-anim inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/40 text-gray-200 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <Icon size={13} className="text-secondary" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: CTA box with animated gradient border */}
        <div className="group relative shrink-0 w-full md:w-72">
          <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-secondary via-accent to-secondary bg-200 animate-gradient-x opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />

          <div className="relative bg-primary-900 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-xl overflow-hidden transition-transform duration-300 ease-premium group-hover:-translate-y-1">
            <Sparkles
              size={16}
              className="absolute top-4 right-4 text-secondary/70 animate-[float_4s_ease-in-out_infinite]"
            />

            <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Starting from</p>
            <p className="text-4xl font-bold text-white mb-1">
              £849
            </p>
            <p className="text-gray-500 text-xs mb-5">One-time · No hidden fees</p>

            <Link
              to="/career-launch"
              className="relative overflow-hidden bg-secondary hover:bg-secondary-600 text-white w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-glow hover:shadow-premium-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <span
                className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"
                aria-hidden="true"
              />
              <span className="relative flex items-center gap-2">
                View Package
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <p className="text-gray-500 text-xs mt-3">Free consultation · Reply in 24 hrs</p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default CareerLaunchBanner;
