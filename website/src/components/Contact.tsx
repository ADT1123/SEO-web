import { Rocket } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Improve Your Search Rankings?
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Get a clear roadmap to rank higher and grow your business organically.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base md:text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
          <Rocket className="w-5 h-5" />
          Get Free SEO Audit
        </button>
      </div>
    </section>
  );
};

export default Contact;
