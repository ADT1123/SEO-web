import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO typically takes 3-6 months to show significant results. The timeline depends on factors like competition, current website authority, content quality, and the SEO strategies implemented. Consistent effort and optimization are key to achieving sustainable rankings.',
    },
    {
      question: 'Do you provide keyword research?',
      answer: 'Yes, we provide comprehensive keyword research as part of our SEO services. We identify high-value keywords relevant to your business, analyze search volume and competition, and create a strategic keyword plan to improve your search visibility.',
    },
    {
      question: 'Is SEO better than paid ads?',
      answer: 'SEO and paid ads serve different purposes. SEO provides long-term, sustainable traffic without ongoing ad costs, while paid ads deliver immediate results. SEO builds authority and trust over time, making it more cost-effective in the long run, though it requires patience and consistent effort.',
    },
    {
      question: 'Will I receive performance reports?',
      answer: 'Absolutely! We provide detailed monthly performance reports that include keyword rankings, organic traffic analytics, conversion metrics, and insights into ongoing optimizations. You\'ll have full transparency into the progress and ROI of your SEO campaigns.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 md:mb-16"
        >
          Frequently Asked Questions (FAQ)
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
              >
                <span className="text-base md:text-lg font-medium text-gray-700 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
