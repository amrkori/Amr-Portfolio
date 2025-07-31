import React, { useState } from 'react';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  const tabContent = {
    skills: [
      { title: 'UI/UX Design', description: 'Designing Web/App interfaces with modern tools' },
      { title: 'Web Development', description: 'Building responsive web applications' },
      { title: 'Graphic Design', description: 'Creating posters, mockups, and visual content' },
    ],
    experience: [
      { title: '2022-present', description: 'UI/UX Design Training & Development' },
      { title: '2022-present', description: 'Freelance Designer - Posters & Mockups' },
      { title: 'May 2024-July 2024', description: 'Alpha Code Internship Program' },
    ],
    education: [
      { title: '2022-present', description: 'Computer Science and Artificial Intelligence' },
      { title: '2010-2022', description: 'Dr.Yehia El-Mashad Official Language School' },
    ],
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img src={`${import.meta.env.BASE_URL}images/2.jpg`}
                alt="Amr Mohammed"
                className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
                <User className="text-white w-12 h-12" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and user experience. 
              I specialize in creating modern, responsive web applications that not only look great 
              but also provide exceptional user experiences. My journey in web development has been 
              driven by curiosity and a constant desire to learn and implement the latest technologies.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <IconComponent size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {tabContent[activeTab as keyof typeof tabContent].map((item, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-red-500 font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;