'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541704989880-21f311d0149e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: 'fixed', // For parallax effect
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Overlay for text readability */}

      <div className="relative z-10 p-8 max-w-3xl animate-fadeInUp animation-delay-300">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-headline">
          Awaken. Align. Transform.
        </h1>
        <p className="text-xl md:text-2xl text-sandstone-beige mb-10 font-body">
          Yoga, Ayurveda & Integrative Wellness in the Heart of Fort Wayne.
        </p>
        <div className="space-x-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/#offerings">Explore Programs</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-sandstone-beige text-sandstone-beige hover:bg-sandstone-beige hover:text-charcoal-gray transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Link href="/#schedule">Book a Class</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
