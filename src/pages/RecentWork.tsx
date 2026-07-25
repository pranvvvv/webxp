import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PortfolioSection from '../components/home/PortfolioSection';
import { Link } from 'react-router-dom';

const RecentWork = () => {
  useEffect(() => {
    document.title = 'Recent Work — GetPixage';
  }, []);

  return (
    <Layout>
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
