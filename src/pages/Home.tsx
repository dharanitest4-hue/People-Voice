import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Construction, 
  Trash2, 
  Lightbulb, 
  Droplets, 
  AlertTriangle,
  ArrowRight,
  Users,
  CheckCircle,
  Clock
} from 'lucide-react';

const Home: React.FC = () => {
  const categories = [
    { name: 'Potholes', icon: Construction, count: 245, description: 'Road damage and infrastructure' },
    { name: 'Sanitation', icon: Trash2, count: 189, description: 'Waste management issues' },
    { name: 'Streetlights', icon: Lightbulb, count: 156, description: 'Lighting and electrical problems' },
    { name: 'Water Supply', icon: Droplets, count: 123, description: 'Water and drainage issues' },
    { name: 'Other Issues', icon: AlertTriangle, count: 98, description: 'Miscellaneous civic problems' },
  ];

  const stats = [
    { label: 'Active Citizens', value: '15,847', icon: Users },
    { label: 'Issues Resolved', value: '8,924', icon: CheckCircle },
    { label: 'Avg. Resolution', value: '4.2 days', icon: Clock },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      text: 'Reported a pothole near my office. It was fixed within 3 days! This platform really works.',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'The water leakage in our colony was addressed quickly thanks to this platform. Great initiative!',
    },
    {
      name: 'Anjali Verma',
      location: 'Bangalore, Karnataka',
      text: 'Easy to use and transparent tracking. Finally, a way to make our voices heard effectively.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Empowering Citizens, 
              <br />
              <span className="text-green-400">Strengthening Cities</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
              A platform for reporting and resolving everyday civic issues — from potholes to 
              streetlights — together with your local government.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/report"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Report an Issue
              </Link>
              <Link
                to="/map"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all backdrop-blur-sm border border-white border-opacity-30"
              >
                View Live Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Issue Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Report Any Civic Issue
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from various categories to quickly report issues in your neighborhood
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to="/report"
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="text-center">
                  <div className="bg-blue-50 group-hover:bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-colors">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    {category.count} active reports
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Report', desc: 'Submit an issue with photos and location' },
              { step: '2', title: 'Track', desc: 'Monitor progress in real-time' },
              { step: '3', title: 'Connect', desc: 'Government agencies respond and take action' },
              { step: '4', title: 'Resolve', desc: 'Issue gets resolved and community benefits' },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Citizen Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real people, real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of citizens working together to improve our communities
          </p>
          <Link
            to="/report"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Report Your First Issue
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;