import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import Orb from './Orb';
import { Link } from 'react-router-dom';
import { Search, Rocket } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const browserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Hero content animations
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 100, filter: "blur(20px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power3.out" }
      );
      
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=1.2"
      );
      
      tl.fromTo(ctaRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.7"
      );

      tl.fromTo(browserRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "power3.out" },
        "-=1"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50">
      {/* WebGL Orb Background */}
      <div className="absolute inset-0 w-full h-full min-w-full min-h-full opacity-10">
        <Orb hueShift={1} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <div className="text-black mb-2">Rank Higher.</div>
              <div className="text-blue-600">Grow Faster.</div>
            </h1>
            
            {/* Subtitle */}
            <p 
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl"
            >
              Ensure Your Power of Attorney Is Legally Valid with Professional Witnessing Services
            </p>
            
            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/get-started" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Rocket className="h-5 w-5" />
                  Start Your Now
                </Button>
              </Link>
              
              <Link to="/learn-more" className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-gray-300 text-white-700 hover:bg-gray-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Browser Mockup */}
          <div 
            ref={browserRef}
            className="relative w-full max-w-md lg:max-w-lg mx-auto"
          >
            {/* Browser Window */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Chrome/Header */}
              <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                {/* Traffic Light Buttons */}
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="bg-white px-4 py-3 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    disabled
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 cursor-default"
                  />
                </div>
              </div>

              {/* Browser Content */}
              <div className="bg-gray-50 p-6 min-h-[280px]">
                {/* Top Ranking Result */}
                <div className="bg-white rounded-lg p-5 mb-4 border-l-4 border-blue-600 shadow-sm">
                  <div className="text-xs font-semibold text-gray-900 mb-1">
                    Your Business Here
                  </div>
                  <div className="text-xs text-blue-600">
                    Top ranking SEO results
                  </div>
                </div>

                {/* Competitor Result */}
                <div className="bg-white rounded-lg p-5 border border-gray-200">
                  <div className="text-xs font-semibold text-gray-700 mb-1">
                    Competitor Result
                  </div>
                  <div className="text-xs text-gray-500">
                    Lower ranking position
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
