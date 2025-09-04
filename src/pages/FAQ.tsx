import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      question: 'How do I report an issue?',
      answer: 'Simply click on "Report an Issue" in the navigation menu. Fill out the form with details about the issue, upload a photo if possible, and provide the location. Your report will be automatically forwarded to the appropriate government department.'
    },
    {
      question: 'Can I track my report?',
      answer: 'Yes! Once you submit a report, you\'ll receive a unique tracking ID via SMS and email. You can use this ID to track the progress of your report through our tracking system. Updates are provided at each stage: Submitted → Acknowledged → In Progress → Resolved.'
    },
    {
      question: 'How long does resolution take?',
      answer: 'Resolution times vary depending on the type and complexity of the issue. On average, most issues are resolved within 4-7 business days. Emergency issues are prioritized and typically addressed within 24-48 hours. You can see average resolution times for different categories in our Analytics section.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We take data privacy and security seriously. Your personal information is protected using industry-standard encryption. We only share necessary details with relevant government departments for issue resolution. Your contact information is never made public.'
    },
    {
      question: 'What types of issues can I report?',
      answer: 'You can report any civic issue including potholes, sanitation problems, broken streetlights, water supply issues, traffic signal problems, garbage collection delays, and other infrastructure or public safety concerns. If unsure, select "Other" and describe the issue.'
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No, you can report issues without creating an account. However, creating an account allows you to track all your reports in one place, receive personalized updates, and participate in community discussions.'
    },
    {
      question: 'Can I report anonymously?',
      answer: 'Yes, anonymous reporting is supported. However, providing contact information helps government departments reach out for additional details if needed and ensures you receive updates about the resolution.'
    },
    {
      question: 'What happens if my issue isn\'t resolved?',
      answer: 'If your issue remains unresolved beyond the expected timeframe, you can escalate it through our platform. We also have a citizen advocacy team that follows up on long-pending issues and works with departments to ensure resolution.'
    },
    {
      question: 'Can I report issues in rural areas?',
      answer: 'Yes, our platform covers both urban and rural areas across India. We work with local panchayats, district collectors, and state governments to ensure issues in rural areas receive appropriate attention.'
    },
    {
      question: 'Is there a mobile app?',
      answer: 'Currently, our platform is optimized for mobile browsers and works seamlessly on all devices. A dedicated mobile app is in development and will be launched soon with additional features like offline reporting and push notifications.'
    }
  ];

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about reporting and tracking civic issues
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-xl shadow-sm">
          {filteredFAQs.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No FAQs found matching your search.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredFAQs.map((item, index) => (
                <div key={index} className="p-6">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg p-2 -m-2"
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="mt-4 text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-6 py-3 rounded-lg font-medium transition-colors">
              Join Community Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;