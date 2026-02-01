'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
// import serviceImage from '@/images/service-last-image.png';

const services = [
  {
    title: 'Hair Styling',
    description: 'From classic cuts to modern styles, our expert stylists create looks that complement your unique personality.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop',
  },
  {
    title: 'Hair Coloring',
    description: 'Transform your look with our premium coloring services using top-quality products for vibrant, long-lasting results.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2569&auto=format&fit=crop',
  },
  {
    title: 'Skin & Facials',
    description: 'Rejuvenate your skin with our luxurious facial treatments tailored to your specific skin type and needs.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Beard Grooming',
    description: 'Expert beard trimming, shaping, and grooming services to keep you looking sharp and well-maintained.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2574&auto=format&fit=crop',
  },
  {
    title: 'Bridal & Party Makeup',
    description: 'Look stunning on your special day with our professional makeup and styling services for all occasions.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2571&auto=format&fit=crop',
  },
  {
    title: 'Hair Treatments',
    description: 'Restore and strengthen your hair with our deep conditioning treatments and keratin services.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2574&auto=format&fit=crop',
    // image: serviceImage.src,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="services" className="py-20 md:py-32 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {'Our Premium Services'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Discover a complete range of professional beauty and grooming services designed to enhance your natural beauty.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group relative h-[400px] overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-3 group-hover:translate-y-[-8px] transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
