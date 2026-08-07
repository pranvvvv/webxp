
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import { notFoundSeo } from '../lib/seo-data.mjs';

const NotFound = () => {
  return (
    <Layout>
      <SEO {...notFoundSeo} />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-secondary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
