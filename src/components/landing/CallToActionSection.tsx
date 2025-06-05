'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section 
      className="py-20 md:py-32 text-center text-white relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1604078893234-ff3a1a5d5292?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-deep-sage-green/70 z-0"></div> {/* Color overlay */}
      <div className="container mx-auto relative z-10 animate-fadeInUp">
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">
          Start where you are. Breathe. Move. Heal.
        </h2>
        <p className="text-lg md:text-xl text-sandstone-beige mb-10 max-w-2xl mx-auto">
          Your journey to holistic wellness begins with a single step. We are here to guide and support you every breath of the way.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-soft-gold text-charcoal-gray hover:bg-burnt-rose hover:text-white transition-all duration-300 transform hover:scale-105 px-10 py-6 text-lg group"
        >
          <Link href="/class-recommender">
            Begin Your Practice
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">✨</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
