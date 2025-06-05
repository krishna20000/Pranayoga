'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react'; // Using Quote icon

interface Testimonial {
  name: string;
  journeyHighlight: string;
  photoUrl: string;
  aiHint?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah L.',
    journeyHighlight: '"PranaFlow has been a sanctuary for me. The trauma-informed yoga classes helped me reconnect with my body in a safe and supportive environment. I feel more grounded and at peace than ever before."',
    photoUrl: 'https://images.unsplash.com/photo-1667053508464-eb11b394df83?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Michael B.',
    journeyHighlight: '"The Ayurveda consultations transformed my health. I learned so much about my unique constitution and how to live in harmony with it. My energy levels are up, and digestion has improved significantly!"',
    photoUrl: 'https://placehold.co/100x100.png',
    aiHint: 'man happy healthy'
  },
  {
    name: 'Jessica P.',
    journeyHighlight: '"I was skeptical about meditation, but the mindfulness sessions here made it accessible and profound. It\'s become an essential part of my daily routine for managing stress and finding clarity."',
    photoUrl: 'https://placehold.co/100x100.png',
    aiHint: 'person meditating serene'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">Words of Wellness</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hear from our community members about their transformative experiences at PranaFlow.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-sandstone-beige/50 shadow-lg p-6 text-left flex flex-col items-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image
                src={testimonial.photoUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4 border-4 border-soft-gold shadow-md"
                data-ai-hint={testimonial.aiHint}
              />
              <CardContent className="relative pt-4">
                <Quote className="absolute -top-2 left-0 w-10 h-10 text-burnt-rose/30 transform -translate-x-2" />
                <p className="text-muted-foreground italic mb-4">
                  {testimonial.journeyHighlight}
                </p>
                <p className="font-semibold text-charcoal-gray text-right">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
