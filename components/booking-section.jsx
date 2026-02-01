'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import bookingImage from '@/images/booking-image-gray.png';
// import heroImage from '@/images/hero-image-gray.png';


export default function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle booking submission
  };

  return (
    <section ref={ref} id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          // src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop"
          src={bookingImage.src}
          alt="Salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            {'Ready for Your Next Look?'}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
            {'Book your appointment today and experience the Herik difference. We can\'t wait to help you look and feel amazing!'}
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="text-left">
                <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-input bg-background"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="phone" className="text-foreground font-medium mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl border-input bg-background"
                  required
                />
              </div>

              <div className="text-left">
                <Label htmlFor="service" className="text-foreground font-medium mb-2 block">
                  Select Service
                </Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="h-12 rounded-xl border-input bg-background">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hair-styling">Hair Styling</SelectItem>
                    <SelectItem value="hair-coloring">Hair Coloring</SelectItem>
                    <SelectItem value="skin-facials">Skin & Facials</SelectItem>
                    <SelectItem value="beard-grooming">Beard Grooming</SelectItem>
                    <SelectItem value="bridal-makeup">Bridal & Party Makeup</SelectItem>
                    <SelectItem value="hair-treatments">Hair Treatments</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Book Now
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
