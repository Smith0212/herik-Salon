'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Herik Family Salon - Nikol',
    area: 'Bhagwat elysium, Nikol,',
    address: 'Ahmedabad, Gujarat 380049',
    phone: '09898838154',
  },
  {
    name: 'Herik Family Salon - New India Colony',
    area: 'Basant Bahar Cross Rd, Ankur Chokadi,',
    address: 'Ahmedabad, Gujarat 380049',
    phone: '07698453000',
  },
  {
    name: 'Herik hair studio - Nava Naroda',
    area: 'Fortune Plaza, 118, near Mango Cinema, behind Galaxy Bunglows,',
    address: 'Ahmedabad, Gujarat 382350',
    phone: '01234567891',
  },
  {
    name: 'Herik Family Salon - Motera',
    area: 'Shop Number 211, Central By Sangath Ipl, Near Lake & Garden, Next Pvr Cinema, Koteshwar Bhat Road,',
    address: 'Ahmedabad, Gujarat 380005',
    phone: '09876543210',
  },
  {
    name: '9/10 HERIK FAMILY SALON -  New India Colony',
    area: 'Divine International School road, near Rushikeshn ramani garden,',
    address: 'Ahmedabad, Gujarat 380049',
    phone: '09998262358',
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-accent/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {'Visit Us'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Find a Herik Family Salon near you. We have multiple locations to serve you better.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 rounded-2xl">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      {location.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {location.area}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {location.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{location.phone}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full rounded-full hover:bg-primary hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Get Directions
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
