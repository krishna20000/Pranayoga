'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeInUp"> {/* Simple fade in up on load */}
          <blockquote className="text-3xl md:text-4xl font-headline text-charcoal-gray leading-tight mb-8 italic relative pl-12">
            <span className="absolute left-0 top-0 text-6xl text-burnt-rose/50 font-bold">&ldquo;</span>
            Prana is life force. At Pranayoga, we help you remember yours.
          </blockquote>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to Pranayoga Institute, a sanctuary for healing, strength, and transformation. We offer a holistic approach to wellness, integrating the ancient wisdom of Yoga and Ayurveda with modern understanding of health. Our mission is to guide you towards balance in body, mind, and spirit.
          </p>
          <p className="text-lg text-muted-foreground">
            Whether you are a beginner seeking gentle introduction or an advanced yogi deepening your practice, you'll find a supportive community and expert guidance here. Join us to awaken your inner vitality, align with your true self, and transform your life.
          </p>
        </div>
        <div className="animate-fadeInUp animation-delay-300"> {/* Simple fade in up on load with delay */}
          <div className="rounded-lg overflow-hidden shadow-xl aspect-video">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Practitioner guiding breathwork"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              data-ai-hint="breathwork guidance"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
