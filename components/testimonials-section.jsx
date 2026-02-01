'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Palak Vyas',
    review: 'I was served by Akash. It was my first time for hair colour and I was very nervous. He took the initiative and guided me through the process and made me comfortable to take my decision. I am absolutely in love with final results and their services. I highly recommend this place !!!',
    rating: 5,
  },
  {
    name: 'Maulik patel',
    review: 'I’ve been visiting Herik Hair Studio for the past 7 years, and the experience has consistently been outstanding. The entire team of 10–12 skilled hair artists, including the owner Mr. Ravi Bhatia, who is among the top professionals in the field, is highly skilled, cooperative, and professional. \nSpecial thanks to Mr. Bhatia for maintaining such high standards and creating a welcoming, hygienic environment. \nHighly recommended for anyone seeking quality service and a truly satisfying salon experience. \nThank u to the entire team at Herik Hair Studio.',
    rating: 5,
  },
  {
    name: 'Hema Magecha',
    review: 'It was such a great experience with all services.  The team is very knowledgeable. We did massage/facials/meni pedi/haircut.  Thank u to all Hericks, Team. Can\'t wait for the next visit.',
    rating: 5,
  },
  {
    name: 'Monika Yadav',
    review: 'Today i took a service from herik salon we attended by khushboo and shalu both are very proffesional and expert.. we are very happy and satisfied after services...highly recommeded....😃 …',
    rating: 5,
  },
  {
    name: 'Saanvi',
    review: 'I had an excellent experience with Kaif. He is professional, skilled, and understands exactly what suits your face and style. My haircut turned out perfect, and I received many compliments. Highly recommend Kaif for ladies’ haircut.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Swipe left - next testimonial
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
    if (isRightSwipe) {
      // Swipe right - previous testimonial
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section ref={ref} id="testimonials" className="py-20 md:py-32 bg-accent/20">
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
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 bg-card rounded-3xl shadow-xl h-96 flex flex-col">
                    <div className="flex gap-1 mb-6 justify-center flex-shrink-0">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-hide mb-6">
                      <p className="text-lg md:text-xl text-foreground leading-relaxed text-center italic">
                        {`"${testimonial.review}"`}
                      </p>
                    </div>
                    <p className="text-center font-serif text-xl font-bold text-primary flex-shrink-0">
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
