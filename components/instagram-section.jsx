'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram } from 'lucide-react';

const instagramImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop',
];

export default function InstagramSection() {
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
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              {'@HerikSalon'}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Follow Our Style Journey'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {instagramImages.map((image, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors duration-300"
          >
            {'View More on Instagram'}
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
