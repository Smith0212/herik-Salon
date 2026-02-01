'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [activeSocial, setActiveSocial] = useState(null);
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">{'Herik'}</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {'Premium grooming & beauty services for the whole family. Where style meets confidence.'}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  activeSocial === 'facebook' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSocial(activeSocial === 'facebook' ? null : 'facebook');
                }}
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/herikfamilysalon/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  activeSocial === 'instagram' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
                }`}
                onClick={() => setActiveSocial(activeSocial === 'instagram' ? null : 'instagram')}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  activeSocial === 'twitter' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/20'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSocial(activeSocial === 'twitter' ? null : 'twitter');
                }}
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">{'Quick Links'}</h4>
            <ul className="space-y-2">
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Home'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Services'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Gallery'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('locations'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Locations'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">{'Our Services'}</h4>
            <ul className="space-y-2">
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Hair Styling'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Hair Coloring'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Skin & Facials'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Beard Grooming'}
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  {'Bridal Makeup'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">{'Contact Us'}</h4>
            <ul className="space-y-4">
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  {'123 Main Street, City Center'}
                </span>
              </li> */}
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:09876543210" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'09876543210'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@heriksalon.com" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'info@heriksalon.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60">
          <p>{'© 2026 Herik Family Salon. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
