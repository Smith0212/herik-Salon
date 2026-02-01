'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

// Instagram posts/reels - only need the post ID
const instagramPosts = [
  'DNfgRmNsDJM',
  'DMK2JhjK1vI',
  'DT0Jr8MDxXi',
  'DLrOl4JhgwV',
  'DNQDFHLoTip',
  'DSxgs-tiK2D',
];

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activePost, setActivePost] = useState(null);

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
              @HerikFamilySalon
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow Our Style Journey
          </p>
        </motion.div>

        {/* Instagram Grid - Clean media only */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {instagramPosts.map((postId, index) => (
            <motion.a
              key={index}
              href={`https://www.instagram.com/p/${postId}/`}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[2px] ${
                activePost === index ? 'ring-2 ring-primary' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={(e) => {
                e.preventDefault();
                if (activePost === index) {
                  window.open(`https://www.instagram.com/p/${postId}/`, '_blank');
                } else {
                  setActivePost(index);
                }
              }}
            >
              <div className="w-full h-full bg-black rounded-2xl overflow-hidden relative">
                <iframe
                  src={`https://www.instagram.com/p/${postId}/embed/captioned`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  style={{
                    transform: 'scale(1.5) translateY(-15%)',
                    transformOrigin: 'center center',
                  }}
                />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 flex items-end justify-center pb-6 ${
                  activePost === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <Instagram className="w-8 h-8 text-white" />
                </div>
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
            href="https://www.instagram.com/herikfamilysalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors duration-300"
          >
            View More on Instagram
            <Instagram className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}