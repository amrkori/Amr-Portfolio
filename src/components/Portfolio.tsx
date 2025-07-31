import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Template 1',
      category: 'web',
      description: 'First Full Project HTML & CSS with modern design principles',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/Template1/',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Template 2',
      category: 'web',
      description: 'Second Full Project HTML & CSS with responsive layout',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/Template2/',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 3,
      title: 'Template 3',
      category: 'web',
      description: 'Third Full Project HTML & CSS with advanced animations',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/Template3/',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 4,
      title: 'Avatar Project',
      category: 'design',
      description: 'Creative avatar design project with modern aesthetics',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/avatar/',
      github: '#',
      technologies: ['HTML', 'CSS', 'Design'],
    },
    {
      id: 5,
      title: 'Red Store',
      category: 'ecommerce',
      description: 'E-commerce website with modern shopping experience',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/redstore_ecommerce/',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 6,
      title: 'Adidas Shoes',
      category: 'ecommerce',
      description: 'Shoe store website with product showcase',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: 'https://amrkori.github.io/shoeswebsite/',
      github: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'ecommerce', label: 'E-commerce' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Here's a showcase of my recent projects and creative work
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-300"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Eye size={20} />
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;