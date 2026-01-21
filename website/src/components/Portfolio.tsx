import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import Timeline from './Timeline';
import About from './About';
import FAQ from './Faq';
import Contact from './Contact';  

const Portfolio = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Partner logos data (if needed later)
  const partnerLogos = [
    { src: '/logo-Photoroom.png', alt: 'Team UAS NMIMS', href: '#' },
    { src: '/img/NMIMS_LOGO4.png', title: 'NMIMS University', href: 'https://www.nmims.edu' },
    { src: '/img/Solidworks2.png', title: 'SolidWorks', href: 'https://www.Solidworks.com' },
    { src: '/img/Ansys1.png', title: 'Ansys', href: 'https://www.ansys.com' },
  ];

  // Initial fade-in animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.main-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  // Animated background blobs
  useEffect(() => {
    const container = backgroundRef.current;
    if (!container) return;

    const blobs: HTMLDivElement[] = [];
    for (let i = 0; i < 6; i++) {
      const blob = document.createElement('div');
      blob.style.position = 'absolute';
      blob.style.top = `${Math.random() * 100}%`;
      blob.style.left = `${Math.random() * 100}%`;
      blob.style.width = `${280 + Math.random() * 140}px`;
      blob.style.height = blob.style.width;
      blob.style.borderRadius = '50%';
      blob.style.background = `radial-gradient(circle, rgba(255,140,20,0.18) 0%, transparent 85%)`;
      blob.style.filter = `blur(${12 + Math.random() * 6}px)`;
      blob.style.opacity = '0.6';
      blob.style.mixBlendMode = 'screen';
      blob.style.pointerEvents = 'none';

      container.appendChild(blob);
      blobs.push(blob);

      gsap.to(blob, {
        x: () => Math.random() * 120 - 60,
        y: () => Math.random() * 110 - 55,
        duration: 20 + Math.random() * 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 10,
      });
    }

    return () => {
      blobs.forEach(b => container.removeChild(b));
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Animated background blobs */}

      <div className="main-content">
        <main>
          <Navigation />

          <section id="home">
            <Hero />
          </section>

          <section id="timeline">
            <Timeline />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="faqs">
            <FAQ />
          </section>

          <section id="Contact">
            <Contact />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
