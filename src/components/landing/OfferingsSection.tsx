'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, Brain, Users, Leaf, Sparkles } from 'lucide-react'; // Spa for Ayurveda, Brain for Holistic Health, Users for Meditation

interface Offering {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
  aiHint?: string;
}

const offerings: Offering[] = [
  {
    icon: HeartHandshake,
    title: 'Trauma-Informed Yoga',
    description: 'Gentle, mindful movement and breathwork to support healing and nervous system regulation.',
    link: '/offerings/trauma-informed-yoga',
    aiHint: 'yoga trauma'
  },
  {
    icon: Leaf, // Changed from Spa to Leaf
    title: 'Ayurveda Consultations',
    description: 'Personalized lifestyle and dietary guidance based on ancient Ayurvedic principles for holistic well-being.',
    link: '/offerings/ayurveda-consultations',
    aiHint: 'ayurveda herbs'
  },
  {
    icon: Brain,
    title: 'Holistic Health Coaching',
    description: 'Integrative coaching to help you achieve your wellness goals and cultivate lasting healthy habits.',
    link: '/offerings/holistic-health-coaching',
    aiHint: 'health coaching'
  },
  {
    icon: Users,
    title: 'Meditation + Mindfulness',
    description: 'Practices to calm the mind, reduce stress, and enhance present moment awareness.',
    link: '/offerings/meditation-mindfulness',
    aiHint: 'meditation peace'
  },
  {
    icon: Sparkles,
    title: 'AI Class Recommender',
    description: 'Discover the perfect yoga class or wellness practice tailored to your unique needs and goals with our AI tool.',
    link: '/class-recommender',
    aiHint: 'AI yoga'
  },
];

export default function OfferingsSection() {
  return (
    <section id="offerings" className="py-16 md:py-24 bg-sandstone-beige/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">Our Offerings</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our range of services designed to nurture your body, mind, and spirit on your journey to holistic health.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className="bg-background shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 text-primary group-hover:text-soft-gold transition-colors duration-300">
                  <offering.icon className="w-10 h-10" />
                </div>
                <CardTitle className="text-2xl text-charcoal-gray">{offering.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-muted-foreground mb-6 text-center flex-grow">
                  {offering.description}
                </CardDescription>
                <Button asChild variant="link" className="text-primary hover:text-burnt-rose/80">
                  <Link href={offering.link}>
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
