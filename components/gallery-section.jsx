'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
// import gallery1 from '@/images/gallery1.png';
// import gallery2 from '@/images/gallery2.png';
// import gallery3 from '@/images/gallery3.png';
// import gallery4 from '@/images/gallery4.png';
// import gallery5 from '@/images/gallery5.png';
// import gallery6 from '@/images/gallery6.png';
// import gallery7 from '@/images/gallery7.png';
// import gallery8 from '@/images/gallery8.png';


// const galleryImages = [
//   'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2569&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2569&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2571&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2574&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
//   'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2670&auto=format&fit=crop',
  // 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2574&auto=format&fit=crop',
// ];

const galleryImages = [
  '/images/gallery1.png',
  '/images/gallery2.png',
  '/images/gallery3.png',
  '/images/gallery4.png',
  '/images/gallery5.png',
  '/images/gallery6.png',
  '/images/gallery7.png',
  // gallery8.src,
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2574&auto=format&fit=crop',
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section ref={ref} id="gallery" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-balance">
              {'Our Work Speaks'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {'Browse through our portfolio of transformations and see the artistry that goes into every service.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery preview"
            className="w-full h-auto rounded-2xl"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
