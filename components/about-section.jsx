'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2569&auto=format&fit=crop"
              alt="Professional stylist at work"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              {'Experience Excellence in Every Service'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {'At Herik Family Salon, we believe that great style starts with great service. Our team of professional stylists brings years of expertise and a passion for making you look and feel your best.'}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {'Step into our modern, welcoming space where cutting-edge techniques meet personalized care. Whether you\'re here for a fresh cut, vibrant color, or a complete makeover, we\'re dedicated to bringing your vision to life.'}
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-4xl font-bold text-primary font-serif">{'10+'}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{'Years Experience'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary font-serif">{'5000+'}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{'Happy Clients'}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary font-serif">{'15+'}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{'Expert Stylists'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
