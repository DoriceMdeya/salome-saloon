import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTA />
    </div>
  );
}