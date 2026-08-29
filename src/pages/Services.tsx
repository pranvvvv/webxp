import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Sparkles, Globe, Search, PenTool, Megaphone,
  CalendarCheck, Workflow, PhoneCall, ShieldCheck, Clock, Layers, Wallet, Headphones, Rocket, Store, ShoppingBag,
  TrendingUp, Settings2, MessageCircle, Zap, type LucideIcon,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { seoConfig, servicesFaqs as faqs } from '../lib/seo-data.mjs';

type Currency = 'INR' | 'USD' | 'GBP';

const CURRENCIES: Currency[] = ['INR', 'USD', 'GBP'];
const CURRENCY_SYMBOL: Record<Currency, string> = { INR: '₹', USD: '$', GBP: '£' };
// Approximate, rounded INR-per-unit rates — good enough for "starting from" pricing across the page.
const INR_PER_UNIT: Record<Currency, number> = { INR: 1, USD: 83, GBP: 104 };
// INR pricing stays as quoted. International currencies carry a 30% markup over the raw conversion.
const CURRENCY_MARKUP: Record<Currency, number> = { INR: 1, USD: 1.3, GBP: 1.3 };

function convert(amount: number, from: Currency, to: Currency): number {
  return (amount * INR_PER_UNIT[from]) / INR_PER_UNIT[to];
}

function roundForCurrency(value: number, currency: Currency): number {
  return currency === 'INR' ? Math.round(value / 100) * 100 : Math.round(value / 5) * 5;
}

// Services are quoted natively in INR; the 30% buffer covers international payment/conversion costs.
function formatPrice(inr: number, currency: Currency): string {
  const rounded = roundForCurrency(convert(inr, 'INR', currency) * CURRENCY_MARKUP[currency], currency);
  return `${CURRENCY_SYMBOL[currency]}${rounded.toLocaleString('en-US')}`;
}

// Career Launch is a real quoted GBP price (not an INR estimate), so no markup is applied — just a straight convert.
function formatGbpPrice(gbp: number, currency: Currency): string {
  const rounded = roundForCurrency(convert(gbp, 'GBP', currency), currency);
  return `${CURRENCY_SYMBOL[currency]}${rounded.toLocaleString('en-US')}`;
}

function detectCurrency(): Currency {
  if (typeof Intl === 'undefined') return 'INR';
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Kolkata') || tz.includes('Calcutta')) return 'INR';
    if (tz.startsWith('Europe/London')) return 'GBP';
    if (tz.startsWith('America/')) return 'USD';
    return 'INR';
  } catch {
    return 'INR';
  }
}

const heroVariants: { container: Variants; item: Variants } = {
  container: {
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  },
  item: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 14 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { type: 'spring', bounce: 0.25, duration: 0.6 } },
  },
};

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  priceInr: number | null;
  unit: string;
  desc: string;
  who: string;
}

const services: ServiceItem[] = [
  {
    icon: <Globe size={20} />,
    title: 'Website Development',
    priceInr: 20000,
    unit: 'one-time, as per requirement',
    desc: 'A fast, mobile-first website that turns visitors into customers — from a single landing page to a full multi-page site.',
    who: "You don't have a website yet, or your current one looks outdated.",
  },
  {
    icon: <Search size={20} />,
    title: 'SEO',
    priceInr: 2000,
    unit: '/month, starting',
    desc: 'On-page optimisation, keyword targeting, and technical fixes so your business shows up when people search.',
    who: "You have a website but it isn't bringing in organic traffic.",
  },
  {
    icon: <PenTool size={20} />,
    title: 'Content Writing',
    priceInr: 3000,
    unit: 'starting',
    desc: 'Website copy, blog posts, and product descriptions written to inform, rank, and convert.',
    who: 'Your website copy reads generic, or you need regular blog/social content.',
  },
  {
    icon: <Megaphone size={20} />,
    title: 'Meta Ads',
    priceInr: 5000,
    unit: '/month + ad spend, as per requirement',
    desc: 'Facebook & Instagram ad campaigns built, targeted, and optimised to bring in leads. Management fee only — ad spend is billed separately to Meta.',
    who: 'You want fast, predictable leads instead of waiting on organic growth.',
  },
  {
    icon: <CalendarCheck size={20} />,
    title: 'Booking Systems',
    priceInr: null,
    unit: 'custom quote',
    desc: 'An online appointment/booking system connected to your calendar, with automated reminders and confirmations.',
    who: "Clients call or DM to book, and you're manually managing a calendar.",
  },
  {
    icon: <Workflow size={20} />,
    title: 'Automations',
    priceInr: null,
    unit: 'custom quote',
    desc: 'Automated workflows for leads, follow-ups, invoicing, and WhatsApp/email replies — built around how your business already runs.',
    who: "You're repeating the same manual tasks every day and losing time to them.",
  },
  {
    icon: <PhoneCall size={20} />,
    title: 'AI Calling Agents',
    priceInr: null,
    unit: 'custom quote',
    desc: "An AI voice agent that answers or makes calls for your business — handling FAQs, bookings, and lead qualification 24/7 in your brand's voice.",
    who: 'You get high call volume and miss leads outside business hours.',
  },
];

const benefits: { icon: LucideIcon; title: string; desc: string; gradient: string }[] = [
  { icon: Globe, title: 'Worldwide Delivery', desc: 'Remote-first — we serve small businesses across India, the UK, the US, and beyond.', gradient: 'from-secondary to-accent' },
  { icon: Wallet, title: 'Transparent Pricing', desc: 'Clear starting prices with no hidden fees. You know the cost before we start.', gradient: 'from-accent to-secondary' },
  { icon: Clock, title: 'Fast Turnaround', desc: 'Most one-off projects go live in 7–14 days from kickoff.', gradient: 'from-secondary to-accent' },
  { icon: Layers, title: 'Everything Under One Roof', desc: 'Website, content, ads, automation, and AI agents from one team — no juggling five freelancers.', gradient: 'from-accent to-secondary' },
  { icon: ShieldCheck, title: 'Built to Scale', desc: 'Start with what you need today; add services as your business grows.', gradient: 'from-secondary to-accent' },
  { icon: Headphones, title: 'Ongoing Support', desc: 'Post-launch support and monthly maintenance plans available for every service.', gradient: 'from-accent to-secondary' },
];

const businessNeeds: { type: string; desc: string; recommend: string[]; icon: LucideIcon; gradient: string }[] = [
  { type: 'Just starting out', desc: 'No website yet, and you need to establish an online presence fast.', recommend: ['Website Development', 'SEO'], icon: Rocket, gradient: 'from-secondary to-accent' },
  { type: 'Local service business', desc: 'Salons, clinics, gyms, consultants — clients need to find and book you.', recommend: ['Website Development', 'Booking Systems'], icon: Store, gradient: 'from-accent to-secondary' },
  { type: 'Retail & e-commerce', desc: 'Selling products online and want more buyers, not just visitors.', recommend: ['Meta Ads', 'Content Writing', 'SEO'], icon: ShoppingBag, gradient: 'from-secondary to-accent' },
  { type: 'High call-volume business', desc: 'Clinics, real estate, restaurants — missing leads outside working hours.', recommend: ['AI Calling Agents', 'Booking Systems'], icon: PhoneCall, gradient: 'from-accent to-secondary' },
  { type: 'Need leads fast', desc: 'You want predictable enquiries now, not in six months.', recommend: ['Meta Ads', 'Content Writing'], icon: TrendingUp, gradient: 'from-secondary to-accent' },
  { type: 'Drowning in admin work', desc: 'Manually following up, invoicing, and replying to the same questions daily.', recommend: ['Automations', 'AI Calling Agents'], icon: Settings2, gradient: 'from-accent to-secondary' },
];

const terms = [
  '50% upfront, 50% on delivery for one-off projects (websites, content packages, booking system builds).',
  'Monthly retainers (SEO, Meta Ads management, automation support) are billed in advance — cancel anytime with 30 days’ notice.',
  'Meta Ads spend is separate from our management fee and is paid directly to Meta by you.',
  'Typical turnaround is 7–14 days for one-off projects; retainer services run continuously.',
  'Two rounds of revisions are included on one-off deliverables.',
  'Custom-quoted services (booking systems, automations, AI calling agents) are priced after a short scoping call.',
];

const CurrencyToggle = ({ currency, onChange, className }: { currency: Currency; onChange: (c: Currency) => void; className?: string }) => (
  <div className={cn('inline-flex items-center bg-gray-100 rounded-full p-1 gap-1', className)}>
    {CURRENCIES.map((c) => (
      <button
        key={c}
        type="button"
        onClick={() => onChange(c)}
        className={cn(
          'px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200',
          currency === c ? 'bg-secondary text-white shadow-glow' : 'text-gray-500 hover:text-primary'
        )}
      >
        {c}
      </button>
    ))}
  </div>
);

const FloatingMascot = ({
  icon: Icon,
  className,
  gradient = 'from-secondary to-accent',
  duration = 7,
  delay = 0,
}: {
  icon: LucideIcon;
  className?: string;
  gradient?: string;
  duration?: number;
  delay?: number;
}) => (
  <motion.div
    aria-hidden
    className={cn(
      'absolute flex items-center justify-center rounded-2xl bg-gradient-to-br shadow-glow pointer-events-none',
      gradient,
      className
    )}
    animate={{ y: [0, -14, 0], rotate: [0, 6, -4, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    <Icon className="text-white" size={18} />
  </motion.div>
);

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

const Services = () => {
  const [currency, setCurrency] = useState<Currency>('INR');
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrency(detectCurrency());
  }, []);

  const waLink = useMemo(
    () => `https://wa.me/447415960499?text=${encodeURIComponent("Hi GetPixage, I'd like to talk about services for my business")}`,
    []
  );

  return (
    <Layout>
      <SEO {...seoConfig['/services']} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-white to-gray-100 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none hidden md:block" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none hidden md:block" />

        <div className="relative pt-32 pb-12 md:pt-44 md:pb-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <AnimatedGroup variants={heroVariants}>
                <span className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  <Sparkles size={12} />
                  For Small Businesses, Worldwide
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Everything Your Business Needs<br />
                  <span className="gradient-text-animated">to Grow Online.</span>
                </h1>
                <p className="mx-auto max-w-xl text-sm sm:text-base md:text-lg text-gray-600 mb-7 leading-relaxed">
                  Websites, SEO, content, ads, booking systems, automation, and AI calling agents — priced clearly,
                  built for small businesses in India, the UK, the US, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
                  <a href="#get-started" className="btn-primary text-sm w-full sm:w-auto">
                    Get Started <ArrowRight size={16} className="ml-1" />
                  </a>
                  <a href="#services" className="btn-outline text-sm w-full sm:w-auto">See Services &amp; Pricing</a>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-gray-400 text-xs">Show prices in</span>
                  <CurrencyToggle currency={currency} onChange={setCurrency} />
                </div>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-white border-y border-gray-100 py-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-2 md:gap-8 text-xs text-gray-500 font-medium">
            {['🌍 Worldwide Clients', '💬 Fast Replies', '📈 Transparent Terms', '🛠️ Custom-Built'].map((t) => (
              <span key={t} className="text-center">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="section-padding bg-white" id="services">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-6 reveal">
            <h2 className="section-title">Services &amp; Pricing</h2>
            <p className="section-subtitle mx-auto">
              Clear starting prices — final cost depends on scope and is confirmed on a free consultation call.
            </p>
          </div>
          <div className="flex justify-center mb-10 reveal">
            <CurrencyToggle currency={currency} onChange={setCurrency} />
          </div>

          <div className="relative rounded-3xl border border-gray-100 bg-white shadow-premium-lg overflow-hidden reveal" id="pricing">
            {/* Background animation — pure CSS, GPU-only transforms, no JS cost */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-secondary/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
              <div className="absolute -bottom-16 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-[float_11s_ease-in-out_infinite_1s]" />
              <div className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 bg-secondary/5 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite_2s]" />
            </div>

            <div
              ref={sliderRef}
              className="relative flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth p-4 md:p-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="snap-start shrink-0 w-[168px] sm:w-[190px] md:w-[210px] bg-white/90 backdrop-blur border border-gray-100 rounded-2xl p-4 flex flex-col card-hover reveal-anim"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="bg-secondary/10 p-2 rounded-lg w-fit mb-3">
                    <span className="text-secondary">{s.icon}</span>
                  </div>
                  <h3 className="font-bold text-primary text-sm mb-1 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
                  <div className="mt-auto pt-2 border-t border-gray-100">
                    <div className="text-base font-bold text-primary leading-none">
                      {s.priceInr === null ? 'Custom Quote' : formatPrice(s.priceInr, currency)}
                    </div>
                    <div className="text-gray-400 text-[10px] mt-1 leading-snug">{s.unit}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll services left"
              onClick={() => sliderRef.current?.scrollBy({ left: -240, behavior: 'smooth' })}
              className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white border border-gray-200 shadow-premium text-primary hover:text-secondary hover:border-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll services right"
              onClick={() => sliderRef.current?.scrollBy({ left: 240, behavior: 'smooth' })}
              className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white border border-gray-200 shadow-premium text-primary hover:text-secondary hover:border-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-6 max-w-xl mx-auto">
            Swipe or use the arrows to see all services · Prices shown in {currency} are converted from our INR
            starting rates for reference. We can invoice in INR, USD, or GBP — ask us on your consultation call.
          </p>
        </div>
      </section>

      {/* ── What does my business need ── */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-b from-secondary-50/60 via-white to-white">
        <FloatingMascot icon={Rocket} gradient="from-secondary to-accent" duration={7} className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 top-4 left-[4%] sm:left-[8%]" />
        <FloatingMascot icon={MessageCircle} gradient="from-accent to-secondary" duration={9} delay={1} className="w-8 h-8 sm:w-10 sm:h-10 top-16 right-[4%] sm:right-[10%]" />
        <FloatingMascot icon={Zap} gradient="from-primary to-secondary" duration={8} delay={2} className="hidden md:flex w-10 h-10 bottom-8 left-[14%]" />

        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <span className="eyebrow">Not Sure Where to Start?</span>
            <h2 className="section-title">What Does My Business Need?</h2>
            <p className="section-subtitle mx-auto">Find the setup closest to yours below.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {businessNeeds.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.type}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07, type: 'spring', bounce: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 shadow-soft hover:shadow-premium transition-shadow duration-300"
                >
                  <div className={cn('w-11 h-11 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-glow', b.gradient)}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-primary text-sm md:text-base mb-1.5">{b.type}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{b.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {b.recommend.map((r) => (
                      <span key={r} className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-[11px] font-medium px-2.5 py-1 rounded-full">
                        <Check size={11} />{r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative overflow-hidden section-padding bg-white">
        <FloatingMascot icon={Sparkles} gradient="from-accent to-secondary" duration={8} className="w-9 h-9 sm:w-11 sm:h-11 top-6 right-[5%] sm:right-[12%]" />
        <FloatingMascot icon={ShieldCheck} gradient="from-secondary to-accent" duration={10} delay={1.5} className="hidden md:flex w-10 h-10 bottom-10 left-[8%]" />

        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto mb-10 reveal">
            <span className="eyebrow">Why GetPixage</span>
            <h2 className="section-title">Benefits</h2>
            <p className="section-subtitle mx-auto">What you get working with us, on every service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07, type: 'spring', bounce: 0.3 }}
                  whileHover={{ y: -6 }}
                  className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 md:p-5 shadow-soft hover:shadow-premium transition-shadow duration-300"
                >
                  <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shrink-0 shadow-glow', b.gradient)}>
                    <Icon className="text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm mb-1">{b.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Terms & Conditions summary ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8 reveal">
            <span className="eyebrow">Good to Know</span>
            <h2 className="section-title">Terms &amp; Conditions, In Short</h2>
            <p className="section-subtitle mx-auto text-sm">
              A quick summary — see the full{' '}
              <Link to="/terms" className="text-secondary hover:underline">Terms &amp; Conditions</Link> for details.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-soft p-6 md:p-8 reveal">
            <ul className="space-y-3">
              {terms.map((t) => (
                <li key={t} className="flex items-start text-sm text-gray-700">
                  <Check size={16} className="text-secondary mr-2.5 mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Career Launch cross-sell ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-2xl bg-primary text-white p-6 md:p-10 max-w-4xl mx-auto reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-white/10 text-secondary text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  A Separate Offering, For Individuals
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Hiring, or Job-Hunting Yourself?</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                  Our Career Launch Package is built for students and graduates, not businesses — CV redesign,
                  LinkedIn optimisation, ATS resume, and a portfolio website, from {formatGbpPrice(849, currency)}.
                </p>
              </div>
              <Link to="/career-launch" className="btn-primary text-sm shrink-0 w-full md:w-auto justify-center">
                See Career Launch <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inline lead form / CTA ── */}
      <section className="section-padding bg-gray-50" id="get-started">
        <div className="container-custom max-w-2xl text-center reveal-anim">
          <span className="eyebrow">Ready to Get Started?</span>
          <h2 className="section-title">Tell Us About Your Business</h2>
          <p className="section-subtitle mx-auto text-sm">
            Fill in the contact form and we'll come back with the right services and a clear quote —
            usually within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary text-sm w-full sm:w-auto">
              Fill In the Contact Form <ArrowRight size={16} className="ml-1" />
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm w-full sm:w-auto">
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-4 text-gray-400 text-xs">No commitment · Free consultation · Reply within a few hours</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white" id="faq">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-8 reveal">
            <h2 className="section-title">FAQs</h2>
            <p className="section-subtitle mx-auto">Everything businesses ask before getting started.</p>
          </div>
          <div className="space-y-2 reveal">
            {faqs.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding bg-primary text-white text-center">
        <div className="container-custom max-w-xl reveal-anim">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Let's Grow Your Business Online</h2>
          <p className="text-gray-300 text-sm md:text-lg mb-7">
            Wherever you're based, book a free consultation and we'll put together the right services for you.
          </p>
          <a href="#get-started" className="btn-primary text-sm md:text-base px-8 py-3">
            Get Started <ArrowRight size={16} className="ml-2" />
          </a>
          <p className="mt-3 text-gray-400 text-xs">No commitment · Free consultation · Worldwide clients welcome</p>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
