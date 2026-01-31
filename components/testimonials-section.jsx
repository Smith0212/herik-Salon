'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    review: 'Absolutely love my new look! The stylists at Herik are true artists. They listened to what I wanted and delivered beyond my expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    review: 'Best salon experience I\'ve ever had. Professional, clean, and the attention to detail is incredible. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    review: 'The bridal makeup service was phenomenal. I felt like a princess on my wedding day. Thank you Herik team!',
    rating: 5,
  },
  {
    name: 'David Martinez',
    review: 'Great beard grooming service. The barbers really know their craft. I always leave feeling refreshed and looking sharp.',
    rating: 5,
  },
  {
    name: 'Lisa Anderson',
    review: 'The hair coloring was perfect! Natural-looking highlights and the stylist gave me great advice on maintenance.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-accent/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            {'What Our Clients Say'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {'Don\'t just take our word for it. Here\'s what our valued clients have to say about their experience.'}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 bg-card rounded-3xl shadow-xl">
                    <div className="flex gap-1 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-8 italic">
                      {`"${testimonial.review}"`}
                    </p>
                    <p className="text-center font-serif text-xl font-bold text-primary">
                      {testimonial.name}
                    </p>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
