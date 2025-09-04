import React from 'react';
import { Target, Users, Zap, Shield, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Direct Impact',
      description: 'Connect citizens directly with government departments for faster resolution of civic issues.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Powered by the collective voice of citizens working together to improve their neighborhoods.'
    },
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Live updates and transparent progress tracking from report to resolution.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security and privacy measures.'
    }
  ];

  const benefits = [
    'Faster issue resolution through streamlined reporting',
    'Increased government accountability and transparency',
    'Stronger community engagement and participation',
    'Data-driven insights for better policy making',
    'Reduced bureaucratic delays and red tape',
    'Improved quality of life in urban and rural areas'
  ];

  const teamValues = [
    {
      icon: Heart,
      title: 'Citizen-First Approach',
      description: 'Every feature is designed with citizens\' needs and experiences at the center.'
    },
    {
      icon: Globe,
      title: 'Inclusive by Design',
      description: 'Built to serve all citizens regardless of location, language, or technical expertise.'
    },
    {
      icon: Target,
      title: 'Results-Oriented',
      description: 'Focused on measurable outcomes that improve communities and lives.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Built for Citizens. 
            <br />
            <span className="text-green-300">Powered by Technology.</span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            We're bridging the gap between citizens and government through innovative technology 
            that makes civic engagement simple, transparent, and effective.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To create a more responsive and accountable governance system where every citizen 
            can easily report issues, track progress, and see real change in their communities. 
            We believe that technology should empower democracy, not complicate it.
          </p>
          
          <div className="bg-blue-50 rounded-xl p-8">
            <blockquote className="text-lg text-gray-700 italic">
              "Democracy is not just about voting every few years. It's about having a voice 
              in the daily decisions that affect your life and community."
            </blockquote>
            <div className="text-sm text-gray-600 mt-4">— Our Founding Principle</div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why CivicReport Works</h2>
            <p className="text-xl text-gray-600">
              Technology that brings citizens and government closer together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Crowdsourced Reporting */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Power of Crowdsourced Reporting
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When citizens become partners in governance, everyone benefits. Our platform 
                harnesses the collective power of community members to identify, report, and 
                help resolve civic issues more efficiently than traditional methods.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4,811</div>
                  <div className="text-sm text-gray-600">Issues Reported</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">3,247</div>
                  <div className="text-sm text-gray-600">Successfully Resolved</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15,847</div>
                  <div className="text-sm text-gray-600">Active Citizens</div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="bg-gradient-to-br from-blue-500 to-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="mb-6">
              CivicReport was born from a simple observation: citizens care deeply about their 
              communities but often lack effective channels to communicate with local government. 
              Traditional methods of reporting civic issues were slow, opaque, and frustrating 
              for both citizens and administrators.
            </p>
            
            <p className="mb-6">
              Founded in 2023 by a team of civic technologists, urban planners, and community 
              organizers, we set out to create a platform that would fundamentally change how 
              citizens and government interact around civic issues.
            </p>
            
            <p className="mb-6">
              Today, we're proud to serve thousands of citizens and hundreds of government 
              departments across India, facilitating faster issue resolution and more 
              responsive governance. Our platform has helped resolve over 3,000 civic issues 
              and continues to grow every day.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Looking Forward</h3>
              <p>
                We're constantly evolving to better serve citizens and government partners. 
                Our roadmap includes AI-powered issue categorization, predictive maintenance 
                alerts, and expanded coverage to rural areas across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of building more responsive and accountable communities
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;