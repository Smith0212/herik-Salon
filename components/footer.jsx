'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
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
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
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
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Home'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Services'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Gallery'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Locations'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
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
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Hair Styling'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Hair Coloring'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Skin & Facials'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Beard Grooming'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'Bridal Makeup'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">{'Contact Us'}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">
                  {'123 Main Street, City Center'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors duration-300">
                  {'+1 (555) 123-4567'}
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
