const About = () => {
  const solutions = [
    {
      title: 'On-Page SEO',
      description: 'Optimize website content, keywords, meta tags, and internal structure.',
      buttonText: 'Get Started',
      buttonStyle: 'blue',
    },
    {
      title: 'Technical SEO',
      description: 'Improve website speed, indexing, mobile-friendliness, and site health.',
      buttonText: 'Learn More',
      buttonStyle: 'white',
    },
    {
      title: 'Off-Page SEO',
      description: 'Build authority through high-quality backlinks and brand mentions.',
      buttonText: 'Get Quote',
      buttonStyle: 'white',
    },
    {
      title: 'Local & Global SEO',
      description: 'Reach local customers or scale globally with targeted SEO strategies.',
      buttonText: 'Contact Us',
      buttonStyle: 'blue',
    },
  ];

  return (
    <section
      className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our SEO Solutions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end influencer marketing solutions under one roof.
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${
                solution.buttonStyle === 'blue'
                  ? 'bg-blue-600'
                  : 'bg-white border-2 border-gray-200'
              } rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300`}
            >
              {/* Title */}
              <h3
                className={`text-2xl md:text-3xl font-bold mb-4 ${
                  solution.buttonStyle === 'blue' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className={`text-base md:text-lg mb-6 leading-relaxed ${
                  solution.buttonStyle === 'blue' ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {solution.description}
              </p>

              {/* Button */}
              <button
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  solution.buttonStyle === 'blue'
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } shadow-md hover:shadow-lg active:scale-95`}
              >
                {solution.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
