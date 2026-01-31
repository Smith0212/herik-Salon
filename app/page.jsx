import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ServicesSection from '@/components/services-section';
import GallerySection from '@/components/gallery-section';
import LocationsSection from '@/components/locations-section';
import WhyChooseSection from '@/components/why-choose-section';
import TestimonialsSection from '@/components/testimonials-section';
import BookingSection from '@/components/booking-section';
import InstagramSection from '@/components/instagram-section';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <LocationsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BookingSection />
      <InstagramSection />
      <Footer />
    </main>
  );
}
