import { SITE_URL } from '@/components/seo/SEO';

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
    'https://www.instagram.com/pranav.tsx?igsh=OWpuemNoenFhdjFw&utm_source=qr',
    'https://www.linkedin.com/in/shiva-pranav-888a76340/',
  ],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
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

export function faqSchema(faqs: { q: string; a: string }[]) {
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
