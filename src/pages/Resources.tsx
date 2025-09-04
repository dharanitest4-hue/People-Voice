import React from 'react';
import { Download, FileText, ExternalLink, BookOpen, Users, Scale } from 'lucide-react';

const Resources: React.FC = () => {
  const downloadableGuides = [
    {
      title: 'Citizen\'s Guide to Reporting Issues',
      description: 'Complete handbook for effective civic issue reporting',
      fileSize: '2.4 MB',
      format: 'PDF',
      downloads: 15420,
      icon: BookOpen
    },
    {
      title: 'Understanding Your Rights',
      description: 'Know your rights as a citizen and how to exercise them',
      fileSize: '1.8 MB',
      format: 'PDF',
      downloads: 9876,
      icon: Scale
    },
    {
      title: 'Community Organizing Toolkit',
      description: 'Tools and strategies for community-led initiatives',
      fileSize: '3.1 MB',
      format: 'PDF',
      downloads: 7234,
      icon: Users
    },
    {
      title: 'Emergency Contact Directory',
      description: 'Important numbers for emergency and civic services',
      fileSize: '0.5 MB',
      format: 'PDF',
      downloads: 12543,
      icon: FileText
    }
  ];

  const policyDocuments = [
    {
      title: 'Municipal Corporation Act 2024',
      description: 'Latest amendments to municipal governance laws',
      category: 'Legal Framework',
      lastUpdated: 'December 2024'
    },
    {
      title: 'Citizen Participation Guidelines',
      description: 'Official guidelines for citizen engagement in governance',
      category: 'Participation',
      lastUpdated: 'November 2024'
    },
    {
      title: 'Public Information Disclosure Policy',
      description: 'Rules governing access to public information',
      category: 'Transparency',
      lastUpdated: 'October 2024'
    },
    {
      title: 'Digital India Initiative for Civic Services',
      description: 'Framework for digital transformation of civic services',
      category: 'Technology',
      lastUpdated: 'September 2024'
    }
  ];

  const civicTips = [
    {
      title: 'Write Clear, Actionable Reports',
      tips: [
        'Include specific location details and landmarks',
        'Describe the issue clearly and concisely',
        'Add photos whenever possible',
        'Mention safety concerns if applicable'
      ],
      icon: FileText
    },
    {
      title: 'Engage with Your Community',
      tips: [
        'Share successful resolution stories',
        'Participate in community discussions',
        'Help neighbors report issues',
        'Attend local governance meetings'
      ],
      icon: Users
    },
    {
      title: 'Follow Up Effectively',
      tips: [
        'Track your reports regularly',
        'Provide additional information when requested',
        'Contact local representatives if needed',
        'Share feedback on resolution quality'
      ],
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resources & Guides
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to become an effective civic advocate
          </p>
        </div>

        {/* Downloadable Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <guide.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-3">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {guide.format} • {guide.fileSize} • {guide.downloads.toLocaleString()} downloads
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policy Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Documents</h2>
          <div className="bg-white rounded-xl shadow-sm">
            <div className="divide-y divide-gray-200">
              {policyDocuments.map((doc, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {doc.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{doc.description}</p>
                      <div className="text-sm text-gray-500">Last updated: {doc.lastUpdated}</div>
                    </div>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors ml-4">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Civic Engagement Tips */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Civic Engagement Tips</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {civicTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                  <tip.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((tipItem, tipIndex) => (
                    <li key={tipIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      {tipItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Use these resources to become a more effective civic advocate and help build stronger communities across India.
          </p>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all backdrop-blur-sm border border-white border-opacity-30">
            Start Your First Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;