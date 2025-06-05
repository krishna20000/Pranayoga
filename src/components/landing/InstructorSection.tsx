
'use client';
import Image from 'next/image';

interface Instructor {
  name: string;
  specialty: string;
  mantra: string;
  imageUrl: string;
  aiHint?: string;
}

const instructors: Instructor[] = [
  {
    name: 'Ananya Sharma',
    specialty: 'Vinyasa & Ayurveda',
    mantra: '"Flow with intention, live with presence."',
    imageUrl: 'https://images.unsplash.com/photo-1705164454513-d8274719fdf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'David Miller',
    specialty: 'Restorative & Meditation',
    mantra: '"Stillness speaks when the mind listens."',
    imageUrl: 'https://images.unsplash.com/photo-1732380795353-54cb0e4a1cc9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Sofia Chen',
    specialty: 'Trauma-Informed Yoga',
    mantra: '"Healing is a journey, not a destination."',
    imageUrl: 'https://images.unsplash.com/photo-1580997892007-69f89c8ce37f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
   {
    name: 'Marcus Green',
    specialty: 'Holistic Health Coach',
    mantra: '"Wellness is the harmony of mind, body, and spirit."',
    imageUrl: 'https://placehold.co/300x300.png',
    aiHint: 'health coach nature'
  },
];

export default function InstructorSection() {
  return (
    <section id="instructors" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">Meet Our Guides</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Our experienced and compassionate instructors are dedicated to supporting your journey towards well-being.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className="group relative overflow-hidden rounded-lg shadow-lg animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Image
                src={instructor.imageUrl}
                alt={instructor.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover aspect-square rounded-lg transition-transform duration-500 group-hover:scale-110"
                data-ai-hint={instructor.aiHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-headline text-white mb-1">{instructor.name}</h3>
                <p className="text-sm text-soft-gold mb-2">{instructor.specialty}</p>
                <p className="text-xs text-sandstone-beige italic">{instructor.mantra}</p>
              </div>
               {/* Static display for when not hovered, for better initial visibility if needed */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                 <h3 className="text-xl font-headline text-white text-center">{instructor.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
