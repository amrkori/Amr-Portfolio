import React from 'react';
import { Code, Palette, Smartphone, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive websites and web applications using the latest technologies and best practices.',
      features: ['React & TypeScript', 'Responsive Design', 'Performance Optimization'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: Smartphone,
      title: 'Graphic Design',
      description: 'Designing eye-catching posters, mockups, and visual content for digital and print media.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of services to help bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-xl hover:bg-red-500 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-red-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-red-500 group-hover:text-white font-semibold transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;