import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PortfolioSection from '../components/home/PortfolioSection';
import { Link } from 'react-router-dom';

const RecentWork = () => {
  useEffect(() => {
    document.title = 'Recent Work — WebXp';
  }, []);

  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-custom text-center reveal-anim">
          <h1 className="section-title">Recent Work</h1>
          <p className="section-subtitle">
            A curated selection of projects built with Frontend-Designs and production-ready React components — clean, accessible, and conversion-focused.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-secondary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <PortfolioSection />
    </Layout>
  );
};

export default RecentWork;
