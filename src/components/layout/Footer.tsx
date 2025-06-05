'use client';

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="contact" className="bg-charcoal-gray text-sandstone-beige/80 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-headline text-sandstone-beige mb-4">PranaFlow Institute</h3>
          <p className="text-sm">123 Wellness Way</p>
          <p className="text-sm">Fort Wayne, IN 46805</p>
          <p className="text-sm mt-2">Phone: (260) 555-1234</p>
          <p className="text-sm">Email: info@pranaflow.com</p>
        </div>
        <div>
          <h3 className="text-xl font-headline text-sandstone-beige mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#about" className="hover:text-burnt-rose transition-colors">About Us</Link></li>
            <li><Link href="/#offerings" className="hover:text-burnt-rose transition-colors">Our Offerings</Link></li>
            <li><Link href="/#schedule" className="hover:text-burnt-rose transition-colors">Class Schedule</Link></li>
            <li><Link href="/class-recommender" className="hover:text-burnt-rose transition-colors">AI Class Recommender</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-burnt-rose transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-burnt-rose transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-headline text-sandstone-beige mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Link href="#" aria-label="Facebook" className="text-sandstone-beige/80 hover:text-burnt-rose transition-colors"><Facebook size={24} /></Link>
            <Link href="#" aria-label="Instagram" className="text-sandstone-beige/80 hover:text-burnt-rose transition-colors"><Instagram size={24} /></Link>
            <Link href="#" aria-label="Twitter" className="text-sandstone-beige/80 hover:text-burnt-rose transition-colors"><Twitter size={24} /></Link>
            <Link href="#" aria-label="Youtube" className="text-sandstone-beige/80 hover:text-burnt-rose transition-colors"><Youtube size={24} /></Link>
          </div>
          <h4 className="text-lg font-headline text-sandstone-beige mb-2">Newsletter</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-sandstone-beige/10 border-sandstone-beige/30 text-sandstone-beige placeholder-sandstone-beige/50 focus:border-burnt-rose focus:ring-burnt-rose newsletter-input"
            />
            <Button type="submit" variant="outline" className="bg-burnt-rose text-primary-foreground hover:bg-burnt-rose/90 border-burnt-rose">
              <Send size={18} className="mr-2 sm:hidden"/> Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="text-center mt-10 pt-8 border-t border-sandstone-beige/20 text-sm">
        <p>&copy; {currentYear} PranaFlow Institute. All Rights Reserved.</p>
        <p>Designed with <span className="text-burnt-rose">&hearts;</span> in Fort Wayne</p>
      </div>
      <style jsx global>{`
        .newsletter-input:focus-within {
          position: relative;
        }
        .newsletter-input:focus-within::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px; /* Adjust based on border thickness */
          height: 2px;
          background-color: hsl(var(--primary)); /* Burnt Rose */
          animation: underline-draw 0.3s ease-out forwards;
        }
        @keyframes underline-draw {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </footer>
  );
}
