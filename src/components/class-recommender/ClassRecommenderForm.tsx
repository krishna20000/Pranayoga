'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { recommendClass, type ClassRecommenderInput, type ClassRecommenderOutput } from '@/ai/flows/class-recommender';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  wellnessGoals: z.string().min(10, 'Please describe your wellness goals in at least 10 characters.'),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced'], {
    required_error: 'Please select your experience level.',
  }),
  timeCommitment: z.string().min(3, 'Please specify your time commitment.'),
  preferredClassType: z.string().min(3, 'Please specify your preferred class type (e.g., Yoga, Meditation).'),
});

export default function ClassRecommenderForm() {
  const [isPending, startTransition] = useTransition();
  const [recommendation, setRecommendation] = useState<ClassRecommenderOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ClassRecommenderInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wellnessGoals: '',
      experienceLevel: 'beginner',
      timeCommitment: '',
      preferredClassType: '',
    },
  });

  const onSubmit: SubmitHandler<ClassRecommenderInput> = (data) => {
    startTransition(async () => {
      setRecommendation(null);
      setError(null);
      try {
        const result = await recommendClass(data);
        setRecommendation(result);
      } catch (e) {
        setError('Failed to get recommendation. Please try again.');
        console.error(e);
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="wellnessGoals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What are your primary wellness goals?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., Reduce stress, increase flexibility, build strength, find mental clarity..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Describe what you hope to achieve through our practices.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your experience level with yoga/wellness practices?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (New or limited experience)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (Consistent practice, familiar with basics)</SelectItem>
                    <SelectItem value="advanced">Advanced (Deep understanding and regular practice)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="timeCommitment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How much time can you commit per week?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 1-2 hours, 3-4 sessions of 60 mins" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredClassType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What type of class are you most interested in?</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Yoga, Meditation, Ayurveda, General Wellness" {...field} />
                </FormControl>
                 <FormDescription>
                  Let us know if you have a specific type of practice in mind.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Recommendation...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Find My Perfect Class
              </>
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <Card className="mt-8 border-destructive bg-destructive/10">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {recommendation && (
        <Card className="mt-8 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <Sparkles className="mr-2 h-6 w-6" /> Your Personalized Recommendation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-charcoal-gray">{recommendation.recommendedClass}</h3>
              <p className="text-muted-foreground">{recommendation.reason}</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/#schedule">Explore Schedule & Book</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
