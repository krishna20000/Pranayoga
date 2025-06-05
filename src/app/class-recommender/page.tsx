import ClassRecommenderForm from '@/components/class-recommender/ClassRecommenderForm';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI Class Recommender - PranaFlow',
  description: 'Get a personalized yoga or wellness practice recommendation.',
};

export default function ClassRecommenderPage() {
  return (
    <div className="container mx-auto py-12 md:py-20 px-4">
      <div className="text-center mb-12">
        <Sparkles className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal-gray mb-4 font-headline">
          Discover Your Perfect Practice
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Answer a few simple questions, and our AI will suggest the ideal yoga class or wellness practice to align with your unique goals and needs.
        </p>
      </div>
      <ClassRecommenderForm />
    </div>
  );
}
