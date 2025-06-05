'use server';

/**
 * @fileOverview Recommends yoga classes or wellness practices based on user questionnaire.
 *
 * - recommendClass - A function that handles the class recommendation process.
 * - ClassRecommenderInput - The input type for the recommendClass function.
 * - ClassRecommenderOutput - The return type for the recommendClass function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClassRecommenderInputSchema = z.object({
  wellnessGoals: z
    .string()
    .describe('Description of the wellness goals of the user.'),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('Yoga experience level of the user.'),
  timeCommitment: z.string().describe('How much time the user can commit to classes per week'),
  preferredClassType: z.string().describe('Type of class preferred by user (yoga, meditation, etc.)'),
});
export type ClassRecommenderInput = z.infer<typeof ClassRecommenderInputSchema>;

const ClassRecommenderOutputSchema = z.object({
  recommendedClass: z.string().describe('The name of the recommended class.'),
  reason: z.string().describe('The reason for recommending this class.'),
});
export type ClassRecommenderOutput = z.infer<typeof ClassRecommenderOutputSchema>;

export async function recommendClass(input: ClassRecommenderInput): Promise<ClassRecommenderOutput> {
  return recommendClassFlow(input);
}

const prompt = ai.definePrompt({
  name: 'classRecommenderPrompt',
  input: {schema: ClassRecommenderInputSchema},
  output: {schema: ClassRecommenderOutputSchema},
  prompt: `Based on the user's wellness goals, experience level, time commitment and preferred class type, recommend a yoga class or wellness practice.

Wellness Goals: {{{wellnessGoals}}}
Experience Level: {{{experienceLevel}}}
Time Commitment: {{{timeCommitment}}}
Preferred Class Type: {{{preferredClassType}}}

Consider these Pranayoga Institute offerings, and remember to choose ONE of them:

Trauma-Informed Yoga
Ayurveda Consultations
Holistic Health Coaching
Meditation + Mindfulness`,
});

const recommendClassFlow = ai.defineFlow(
  {
    name: 'recommendClassFlow',
    inputSchema: ClassRecommenderInputSchema,
    outputSchema: ClassRecommenderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
