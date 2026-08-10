// Plain JS, no JSX/TS — imported both by the React app (via Vite) and by
// scripts/prerender.mjs (via plain Node) so page content, FAQ copy, and
// structured data stay a single source of truth across both.

export const SITE_URL = 'https://getpixage.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'GetPixage',
  alternateName: 'Get Pixage',
  description:
    'Premium UK web design agency specializing in high-performance websites, AI automation, and SaaS development.',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-32x32.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: '+44-7415-960499',
  email: 'WebXp.combusiness@gmail.com',
  priceRange: '££',
  areaServed: 'GB',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.facebook.com/share/1Fo9NjLWxu/?mibextid=wwXIfr',
    'https://www.instagram.com/pranv.tsx',
    'https://www.linkedin.com/in/shiva-pranav-888a76340/',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'GetPixage',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// Rendered verbatim in FAQSection.tsx — keep in sync with the FAQPage schema below.
export const homeFaqs = [
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

// Rendered verbatim in pages/CareerLaunch.tsx — keep in sync with the FAQPage schema below.
export const careerLaunchFaqs = [
  { q: 'How long does the full package take?', a: 'Typically 7–14 working days from when we receive all your information, depending on complexity and customisation.' },
  { q: 'How many revisions are included?', a: 'Your CV, LinkedIn, and content writing each include up to 2 rounds of revisions. Portfolio tweaks are covered during the 1-month support period.' },
  { q: 'Do you offer a payment plan?', a: 'Yes — we offer a 50% upfront / 50% on completion split. Get in touch to discuss flexible options.' },
  { q: "What if I don't have any projects to show?", a: "That is exactly what our Project Development add-on is for. We build a real, course-relevant project with full source code so you have something tangible to present." },
  { q: 'Will my CV pass ATS screening?', a: 'Yes. We format every CV with correct heading structure, keyword optimisation, and clean formatting that applicant tracking systems can parse.' },
  { q: 'What does post-launch support cover?', a: 'Minor content updates, bug fixes, and small design tweaks to your portfolio within the first 30 days after handover.' },
];

const careerLaunchServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Career Launch Package — CV, LinkedIn, Portfolio Website & Career Branding',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: 'GB',
  audience: {
    '@type': 'Audience',
    audienceType: 'UK students and graduates',
  },
  description:
    'CV redesign, LinkedIn optimisation, ATS-friendly resume, content writing, a custom portfolio website, and GitHub profile optimisation — built together for UK students and graduates entering the job market.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    price: '849',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: '849',
      maxPrice: '1250',
      priceCurrency: 'GBP',
    },
  },
};

// Single source of truth for per-route SEO — consumed by <SEO> at runtime
// (src/components/seo/SEO.tsx) AND by scripts/prerender.mjs at build time,
// so every route's raw HTML carries the same tags Helmet would set client-side.
export const seoConfig = {
  '/': {
    title: 'GetPixage — Premium Web Design Agency | AI Automation & SaaS Development (UK)',
    description:
      'GetPixage designs and builds high-converting websites, AI automation, and SaaS products for UK businesses. 50+ projects delivered. Get a free consultation today.',
    path: '/',
    keywords: 'web design agency UK, website design and development, AI automation, SaaS development, custom website design, conversion-focused web design',
    structuredData: [organizationSchema, websiteSchema, faqSchema(homeFaqs)],
  },
  '/about': {
    title: 'About GetPixage — UK Web Design Agency With 50+ Projects Delivered',
    description:
      'Meet GetPixage: a UK-based web design agency crafting high-conversion websites, AI automation, and SaaS products. Learn about our mission and how we work.',
    path: '/about',
    keywords: 'about GetPixage, UK web design agency, web development team, website design company',
    structuredData: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])],
  },
  '/recent-work': {
    title: 'Recent Work & Case Studies — GetPixage Web Design Portfolio',
    description:
      "See live websites GetPixage has designed and built, including TrainWithTej, Auravein, DRRKS Consultancy, and a student data-analyst portfolio — real client results.",
    path: '/recent-work',
    keywords: 'GetPixage portfolio, web design case studies, website examples UK, client websites',
    structuredData: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Recent Work', path: '/recent-work' }])],
  },
  '/career-launch': {
    title: 'Career Launch Package — CV, LinkedIn & Portfolio Website for UK Students | GetPixage',
    description:
      'CV redesign, LinkedIn optimisation, ATS-friendly resume, portfolio website & content writing in one package — built for UK students and graduates. From £849.',
    path: '/career-launch',
    keywords: 'CV writing service UK students, LinkedIn optimisation for graduates, student portfolio website, ATS resume UK, career launch package, graduate job application help',
    structuredData: [
      organizationSchema,
      careerLaunchServiceSchema,
      faqSchema(careerLaunchFaqs),
      breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Career Launch', path: '/career-launch' }]),
    ],
  },
  '/contact': {
    title: 'Contact GetPixage — Free Web Design Consultation | UK',
    description:
      'Get in touch with GetPixage for a free consultation on your website, AI automation, or SaaS project. Fast replies, clear scope, no obligation.',
    path: '/contact',
    keywords: 'contact GetPixage, web design quote UK, free website consultation',
    structuredData: [organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])],
  },
  '/terms': {
    title: 'Terms & Conditions — GetPixage',
    description:
      "Read GetPixage's terms and conditions covering pricing, timelines, revisions, intellectual property, and support for web design and development projects.",
    path: '/terms',
    structuredData: breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms & Conditions', path: '/terms' }]),
  },
  '/privacy-policy': {
    title: 'Privacy Policy — GetPixage',
    description:
      'How GetPixage collects, uses, and protects your personal data, including cookies used for advertising via Google AdSense, in line with UK GDPR and PECR.',
    path: '/privacy-policy',
    structuredData: breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]),
  },
};

export const notFoundSeo = {
  title: 'Page Not Found | GetPixage',
  description: "The page you're looking for doesn't exist or has been moved.",
  path: '/404',
  noindex: true,
};
