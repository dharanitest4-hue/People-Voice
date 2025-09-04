import React, { useState } from 'react';
import { Camera, MapPin, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ReportIssue: React.FC = () => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    location: '',
    photo: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'Potholes',
    'Sanitation',
    'Streetlights',
    'Water Supply',
    'Waste Management',
    'Traffic Signals',
    'Public Safety',
    'Other'
  ];

  const progressSteps = [
    { status: 'submitted', label: 'Submitted', icon: Upload, active: true },
    { status: 'acknowledged', label: 'Acknowledged', icon: AlertCircle, active: isSubmitted },
    { status: 'in-progress', label: 'In Progress', icon: Clock, active: false },
    { status: 'resolved', label: 'Resolved', icon: CheckCircle, active: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Submitted Successfully!</h1>
            <p className="text-gray-600 mb-8">
              Your issue has been recorded and assigned ID: <strong>#CR-2025-001847</strong>
            </p>
            
            {/* Progress Tracker */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Track Your Report Progress</h3>
              <div className="flex justify-center">
                <div className="flex items-center space-x-8">
                  {progressSteps.map((step, index) => (
                    <div key={step.status} className="flex items-center">
                      <div className={`flex flex-col items-center ${step.active ? 'text-green-600' : 'text-gray-400'}`}>
                        <div className={`p-3 rounded-full ${step.active ? 'bg-green-100' : 'bg-gray-100'} mb-2`}>
                          <step.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium">{step.label}</span>
                      </div>
                      {index < progressSteps.length - 1 && (
                        <div className={`w-16 h-0.5 mx-4 ${index === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Track This Report
              </button>
              <div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Report Another Issue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Report a Civic Issue
          </h1>
          <p className="text-xl text-gray-600">
            Help us improve your community by reporting issues that need attention
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium"
                >
                  Click to upload a photo
                </label>
                <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                {formData.photo && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.photo.name} uploaded</p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter address or use current location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="button"
                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                📍 Use Current Location
              </button>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Issue Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Issue Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Brief title for the issue"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide detailed information about the issue"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors shadow-sm"
            >
              Submit Report
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens next?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Your report will be reviewed by our moderation team</li>
            <li>• It will be forwarded to the appropriate government department</li>
            <li>• You'll receive updates via SMS and email</li>
            <li>• Track progress anytime using your report ID</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;