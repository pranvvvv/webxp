
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants: { container: Variants; item: Variants } = {
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

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-white" />
        <div
          aria-hidden
          className="absolute inset-0 [background:radial-gradient(125%_60%_at_50%_0%,transparent_0%,white_75%)]"
        />
        <motion.div
          className="absolute top-20 right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 left-[5%] w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="relative pt-32 pb-4 md:pt-44">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedGroup variants={transitionVariants}>
              <div className="bg-secondary/10 group mx-auto mb-8 flex max-w-full w-fit items-center gap-2 sm:gap-3 rounded-full border border-secondary/20 p-1 pl-3 sm:pl-4 shadow-glow">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                <span className="text-secondary text-[10px] sm:text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                  <span className="sm:hidden">Trusted Worldwide</span>
                  <span className="hidden sm:inline">50+ Projects Delivered — Trusted Worldwide</span>
                </span>
                <span className="bg-white size-6 overflow-hidden rounded-full flex items-center justify-center shrink-0">
                  <Star size={12} className="fill-secondary text-secondary" />
                </span>
              </div>

              <h1 className="mx-auto max-w-3xl text-balance text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
                We Build <span className="gradient-text-animated">Digital Experiences</span> That Convert
              </h1>
              <p className="mx-auto max-w-2xl text-base md:text-xl mb-10 text-gray-600 text-balance leading-relaxed">
                GetPixage designs and builds premium websites, SaaS products, and AI-powered automation for
                ambitious brands — combining sharp design with fast delivery so more visitors become customers.
              </p>
            </AnimatedGroup>

            <AnimatedGroup
              variants={{
                container: { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } } },
                ...transitionVariants,
              }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-6">
                <a
                  href="https://wa.me/447415960499?text=I'm interested in a free consultation for my website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-primary w-full sm:w-auto"
                >
                  <span
                    className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer"
                    aria-hidden="true"
                  />
                  <span className="relative flex items-center">
                    Get Free Consultation
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
                <Link to="/recent-work" className="btn-outline w-full sm:w-auto">
                  View Our Work
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="font-medium text-gray-400">50+ projects delivered — including</span>
                <span className="font-semibold text-primary">TrainWithTej</span>
                <span className="font-semibold text-primary">Auravein</span>
                <span className="font-semibold text-primary">DRRKS Consultancy</span>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Full-width real project showcase */}
        <AnimatedGroup
          variants={{
            container: { visible: { transition: { staggerChildren: 0.06, delayChildren: 0.45 } } },
            item: {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.7 } },
            },
          }}
        >
          <div className="relative mt-10 md:mt-16 px-4 md:px-6">
            <div
              aria-hidden
              className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-white pointer-events-none"
            />
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-100 shadow-premium-lg bg-white">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-gray-50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-3 h-5 flex-1 max-w-[220px] bg-white rounded-md border border-gray-100 flex items-center px-2">
                  <span className="text-[10px] text-gray-400 truncate">trainwithtej.com</span>
                </div>
              </div>
              <img
                src="/portfolio-trainwithtej.webp"
                alt="TrainWithTej — a real GetPixage client project"
                className="w-full aspect-[16/10] md:aspect-[16/8] object-cover object-top"
                loading="eager"
              />
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default HeroSection;
