import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import OfferingsSection from '@/components/landing/OfferingsSection';
import InstructorSection from '@/components/landing/InstructorSection';
import ClassScheduleSection from '@/components/landing/ClassScheduleSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CallToActionSection from '@/components/landing/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <InstructorSection />
      <ClassScheduleSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
