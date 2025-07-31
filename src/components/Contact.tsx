import React, { useState, useRef } from 'react';
import {
  Mail, Phone, MapPin, Send,
  Facebook, Twitter, Instagram, Github, Linkedin, Download
} from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const scriptURL = "https://script.google.com/macros/s/AKfycbzmDFr27DcPCa6m2wx793coxsOeQtenL6nKAHAfFHUBnb4WW6AJx7udP7huO313vaCD/exec";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    })
      .then((response) => {
        setSubmitMessage("Message sent successfully!");
        formRef.current?.reset();
        setTimeout(() => setSubmitMessage(""), 5000);
      })
      .catch((error) => {
        setSubmitMessage("Error sending message!");
        console.error("Error!", error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amrmokamal1@gmail.com',
      href: 'mailto:amrmokamal1@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 155 425 8827',
      href: 'tel:+201554258827',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61553275504056&mibextid=LQQJ4d', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/amrmokamal', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/amrmo_/', label: 'Instagram' },
    { icon: Github, href: 'https://www.github.com/amrkori', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amromokamal', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-red-500 p-3 rounded-full">
                      <IconComponent className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-white hover:text-red-500 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-red-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="Amr Mohamed (FrontEnd)1.pdf"
              download
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" name="submit-to-google-sheet">
              <div>
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <textarea
                  name="Message"
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {submitMessage && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                <p className="text-green-400">{submitMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;