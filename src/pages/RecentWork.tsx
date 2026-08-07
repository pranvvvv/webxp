import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { organizationSchema, breadcrumbSchema } from '../lib/schema';
import PortfolioSection from '../components/home/PortfolioSection';
import { Link } from 'react-router-dom';

const RecentWork = () => {
  return (
    <Layout>
      <SEO
        title="Recent Work & Case Studies — GetPixage Web Design Portfolio"
        description="See live websites GetPixage has designed and built, including TrainWithTej, Auravein, DRRKS Consultancy, and a student data-analyst portfolio — real client results."
        path="/recent-work"
        keywords="GetPixage portfolio, web design case studies, website examples UK, client websites"
        structuredData={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Recent Work', path: '/recent-work' }])]}
      />
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-white to-gray-100">
        <div className="container-custom text-center">
          <h1 className="section-title">Recent Work</h1>
          <p className="section-subtitle mx-auto mb-4">
            A curated selection of live client projects — clean, accessible, and built to convert.
          </p>
          <Link to="/" className="text-secondary hover:underline text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </section>

      <PortfolioSection />
    </Layout>
  );
};

export default RecentWork;
