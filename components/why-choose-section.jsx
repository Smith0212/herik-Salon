'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Award, Shield, Heart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Professional Stylists',
    description: 'Our team of certified experts brings years of training and a passion for creating stunning looks.',
  },
  {
    icon: Award,
    title: 'Premium Products',
    description: 'We use only the finest, salon-grade products from leading brands to ensure exceptional results.',
  },
  {
    icon: Shield,
    title: 'Hygienic Environment',
    description: 'Your safety is our priority. We maintain the highest standards of cleanliness and sanitation.',
  },
  {
    icon: Heart,
    title: 'Personalized Consultation',
    description: 'Every service begins with a detailed consultation to understand your unique needs and preferences.',
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {'Why Choose Herik?'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'We\'re committed to delivering an exceptional experience that goes beyond just great hair.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/50 mb-6 group hover:bg-primary hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
