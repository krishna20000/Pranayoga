import { Button } from '@/components/ui/button';
import { CalendarDays, Video, UserCircle } from 'lucide-react';
import Link from 'next/link';

const scheduleFilters = [
  { label: 'In-Studio', icon: CalendarDays },
  { label: 'Online', icon: Video },
  { label: 'Private', icon: UserCircle },
];

// Mock data for demonstration
const sampleClasses = [
  { time: '9:00 AM', name: 'Morning Vinyasa Flow', type: 'In-Studio', instructor: 'Ananya S.' },
  { time: '12:00 PM', name: 'Lunchtime Meditation', type: 'Online', instructor: 'David M.' },
  { time: '6:00 PM', name: 'Restorative Yoga', type: 'In-Studio', instructor: 'Sofia C.' },
  { time: '7:30 PM', name: 'Ayurveda Workshop', type: 'Online', instructor: 'Ananya S.' },
];

export default function ClassScheduleSection() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-sandstone-beige/50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4">Class Schedule</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Find a class that fits your schedule and wellness goals. We offer a variety of in-studio, online, and private sessions.
        </p>
        
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {scheduleFilters.map(filter => (
            <Button key={filter.label} variant="outline" className="border-deep-sage-green text-deep-sage-green hover:bg-deep-sage-green hover:text-white">
              <filter.icon className="mr-2 h-5 w-5" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Placeholder for embeddable calendar - using a simple list for now */}
        <div className="bg-background p-6 md:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-headline text-charcoal-gray mb-6 text-left">Today's Classes</h3>
          <div className="space-y-4">
            {sampleClasses.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-border last:border-b-0 hover:bg-sandstone-beige/30 rounded-md transition-colors">
                <div className="text-left mb-2 sm:mb-0">
                  <p className="font-semibold text-charcoal-gray">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.time} - {item.instructor}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                  Book Now
                </Button>
              </div>
            ))}
            {sampleClasses.length === 0 && (
              <p className="text-muted-foreground">No classes scheduled for today. Please check back or view the full schedule.</p>
            )}
          </div>
        </div>

        <div className="mt-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 animate-button-glow"
          >
            <Link href="/full-schedule">View Full Schedule</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
