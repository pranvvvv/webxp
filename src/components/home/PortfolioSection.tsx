import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    title: 'AI Business Automation Tool',
    category: 'AI Business Tool',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'A comprehensive business automation platform that tracks daily sales, purchases, expenses, and profit through simple forms connected to Excel sheets with PDF download capabilities.',
    link: '#',
  },
  {
    title: 'QR Code Digital Menu',
    category: 'QR Code Menu',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop',
    description: 'Professional QR code menu system used in 5-star restaurants and cafes. Customers scan and instantly access digital menus with interactive features.',
    link: '#',
  },
  {
    title: 'E-Commerce Fashion Store',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    description: 'Modern e-commerce platform for fashion retail with advanced filtering, wishlist, and seamless checkout experience.',
    link: '#',
  },
  {
    title: 'Real Estate Portal',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
    description: 'Comprehensive real estate website with property listings, virtual tours, and advanced search functionality.',
    link: '#',
  },
  {
    title: 'Healthcare Management System',
    category: 'AI Business Tool',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    description: 'AI-powered healthcare management platform for appointment scheduling, patient records, and automated billing.',
    link: '#',
  },
  {
    title: 'Restaurant Chain Menu System',
    category: 'QR Code Menu',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    description: 'Multi-location QR menu system with real-time updates, nutritional information, and order tracking.',
    link: '#',
  },
  {
    title: 'Travel Booking Platform',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
    description: 'Complete travel booking website with flight search, hotel reservations, and itinerary planning.',
    link: '#',
  },
  {
    title: 'Inventory Management AI',
    category: 'AI Business Tool',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
    description: 'Smart inventory management system with AI-powered demand forecasting and automated reorder alerts.',
    link: '#',
  },
  {
    title: 'Fine Dining QR Experience',
    category: 'QR Code Menu',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'Luxury dining QR menu with wine pairing suggestions, chef recommendations, and interactive ordering.',
    link: '#',
  },
  {
    title: 'Fitness Studio Website',
    category: 'Websites',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    description: 'Modern fitness studio website with class scheduling, trainer profiles, and membership management.',
    link: '#',
  },
  {
    title: 'Financial Dashboard AI',
    category: 'AI Business Tool',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'AI-driven financial analytics dashboard with predictive insights and automated reporting features.',
    link: '#',
  },
  {
    title: 'Cafe Digital Menu Board',
    category: 'QR Code Menu',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=600&fit=crop',
    description: 'Interactive cafe menu system with seasonal updates, customization options, and loyalty program integration.',
    link: '#',
  },
];

const categories = ['All', 'AI Business Tool', 'QR Code Menu', 'Websites'];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="section-title">Our Latest Projects</h2>
          <p className="section-subtitle">
            Explore our diverse portfolio of AI business tools, QR code menu systems, and professional websites across various industries.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all font-medium ${
                activeCategory === category
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
         </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <a 
                      href={item.link}
                      className="inline-flex items-center text-white font-medium hover:text-secondary transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-primary group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                    {item.category}
                  </span>
                  <a 
                    href={item.link}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 reveal">
          <a 
            href="https://wa.me/916304308774?text=Hi! I'm interested in your web development services. Can we discuss my project?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Get Your Project Started
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
