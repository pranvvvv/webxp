
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="reveal">
      <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
      
      <div className="bg-gray-50 rounded-lg p-8 mb-8">
        <div className="space-y-6">
          <div className="flex items-start">
            <Phone className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Phone</h3>
              <a href="tel:+916304308774" className="text-gray-600 hover:text-secondary">
                +91 6304308774
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Email</h3>
              <a href="mailto:WebXp.combusiness@gmail.com" className="text-gray-600 hover:text-secondary">
                WebXp.combusiness@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Address</h3>
              <p className="text-gray-600">
                123 Design Avenue<br />
                Creative City, 10001
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="text-secondary mt-1 mr-4" size={24} />
            <div>
              <h3 className="font-bold text-primary">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-100 p-6 mb-8 shadow-sm">
        <h3 className="font-bold text-primary mb-4">Follow on Social Media</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.facebook.com/share/1Fo9NjLWxu/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Facebook size={16} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/pranav.tsx?igsh=OWpuemNoenFhdjFw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Instagram size={16} />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/shiva-pranav-888a76340/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:text-secondary hover:border-secondary transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden h-64 shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1622209562578!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="WebXp location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
