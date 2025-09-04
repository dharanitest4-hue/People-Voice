import React from 'react';
import { MessageCircle, Heart, Share, User, Calendar } from 'lucide-react';

const Community: React.FC = () => {
  const citizenStories = [
    {
      id: 1,
      title: 'Pothole Fixed in Record Time!',
      author: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      story: 'Reported a dangerous pothole near my children\'s school. The BMC team responded within 24 hours and fixed it completely in just 3 days. Amazing efficiency!',
      likes: 47,
      comments: 12,
      shareCount: 8,
      date: '2 days ago',
      issueId: 'CR-001789',
      beforeAfter: true
    },
    {
      id: 2,
      title: 'Community Garden Restored',
      author: 'Rajesh Kumar',
      location: 'Delhi',
      story: 'Our local park was in terrible condition with broken benches and overgrown weeds. After reporting through this platform, the MCD not only cleaned it up but also added new playground equipment!',
      likes: 89,
      comments: 23,
      shareCount: 15,
      date: '5 days ago',
      issueId: 'CR-001654',
      beforeAfter: true
    },
    {
      id: 3,
      title: 'Streetlight Installation Success',
      author: 'Anjali Verma',
      location: 'Bangalore, Karnataka',
      story: 'Dark street near my apartment was unsafe for evening walks. Reported the issue and within a week, BESCOM installed bright LED streetlights. Feel much safer now!',
      likes: 34,
      comments: 7,
      shareCount: 5,
      date: '1 week ago',
      issueId: 'CR-001523',
      beforeAfter: false
    }
  ];

  const forumDiscussions = [
    {
      id: 1,
      title: 'How to write effective issue descriptions?',
      author: 'ModeratorTeam',
      replies: 45,
      lastActivity: '3 hours ago',
      category: 'Tips & Guides',
      isPinned: true
    },
    {
      id: 2,
      title: 'Monsoon preparation - What civic issues to watch for?',
      author: 'CivicExpert',
      replies: 23,
      lastActivity: '6 hours ago',
      category: 'Seasonal Issues',
      isPinned: false
    },
    {
      id: 3,
      title: 'Success story: Community park renovation in Pune',
      author: 'PuneCitizen',
      replies: 67,
      lastActivity: '1 day ago',
      category: 'Success Stories',
      isPinned: false
    },
    {
      id: 4,
      title: 'Questions about response times in rural areas',
      author: 'VillageReporter',
      replies: 12,
      lastActivity: '2 days ago',
      category: 'General Discussion',
      isPinned: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Community Hub
          </h1>
          <p className="text-xl text-gray-600">
            Share stories, connect with fellow citizens, and learn from each other
          </p>
        </div>

        {/* Citizen Stories Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Citizen Success Stories</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Share Your Story
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {citizenStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {story.beforeAfter && (
                  <div className="bg-gradient-to-r from-red-500 to-green-500 h-32 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <span className="text-white font-semibold">Before & After Photos</span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{story.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-3">{story.author}</span>
                    <span className="text-gray-400">•</span>
                    <span className="ml-3">{story.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{story.story}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-gray-600">Related Issue ID:</div>
                    <div className="text-sm font-medium text-blue-600">{story.issueId}</div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-600 transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{story.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span>{story.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-600 transition-colors">
                        <Share className="h-4 w-4" />
                        <span>{story.shareCount}</span>
                      </button>
                    </div>
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Forum Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Community Discussions</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Start New Discussion
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="divide-y divide-gray-200">
              {forumDiscussions.map((discussion) => (
                <div key={discussion.id} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {discussion.isPinned && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                            Pinned
                          </span>
                        )}
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {discussion.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {discussion.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{discussion.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;