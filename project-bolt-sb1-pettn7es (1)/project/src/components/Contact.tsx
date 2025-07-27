import React from 'react';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your game ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">contact@igrotek.com</p>
                    <a 
                      href="mailto:contact@igrotek.com" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Send us an email
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Upwork</h4>
                    <p className="text-gray-400">Professional game development services</p>
                    <a 
                      href="https://www.upwork.com/freelancers/igrotek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center space-x-1"
                    >
                      <span>View our Upwork profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <ExternalLink className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Freelancer</h4>
                    <p className="text-gray-400">Unity game development expertise</p>
                    <a 
                      href="https://www.freelancer.com/u/igrotek" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Check our Freelancer profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Remote Team</p>
                    <p className="text-sm text-gray-500">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                  placeholder="Game Development Project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your game development needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-600 to-gray-400 text-black py-3 px-6 rounded-lg hover:from-gray-500 hover:to-gray-300 transition-all duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;