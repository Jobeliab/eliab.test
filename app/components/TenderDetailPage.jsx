"use client"

import React, { useState, useEffect } from 'react';
import { Clock, FileText, Building, DollarSign, Calendar, Tag, CheckSquare, Download, Upload, CreditCard } from 'lucide-react';
import { FAQS } from '@/data/faqs';

const TenderDetailPage = () => {
  const [tender, setTender] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  // Mock data - in a real app, this would fetch from API based on ID from URL params
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setTender({
        id: 'BNG-2025-001',
        title: 'Construction of Bungoma County Hospital Wing B',
        department: 'Health Services',
        publishedDate: '2025-04-10',
        deadline: '2025-05-15',
        status: 'open',
        budget: '15,000,000 KES',
        category: 'Construction',
        eligibility: [
          'Must be registered with National Construction Authority (NCA)',
          'Minimum 5 years experience in healthcare construction',
          'Valid tax compliance certificate',
          'Proven financial capacity of at least 5 million KES'
        ],
        description: 'This tender is for the construction of a new wing (Wing B) at the Bungoma County Referral Hospital. The new wing will include intensive care units, operating theaters, and recovery wards. The construction must adhere to modern healthcare facility standards and energy efficiency guidelines.',
        scope: [
          'Site preparation and foundation work',
          'Structural construction of a 3-floor building',
          'Electrical, plumbing, and HVAC systems installation',
          'Interior finishing according to healthcare standards',
          'Equipment mounting provisions and medical gas piping',
          'External works including parking and landscaping'
        ],
        documents: [
          { name: 'Tender Document', size: '2.4 MB', type: 'pdf' },
          { name: 'Bill of Quantities', size: '1.7 MB', type: 'xlsx' },
          { name: 'Site Plan', size: '3.5 MB', type: 'pdf' },
          { name: 'Technical Specifications', size: '1.2 MB', type: 'pdf' }
        ],
        timeline: [
          { stage: 'Tender Publication', date: '2025-04-10', completed: true },
          { stage: 'Clarification Period', date: '2025-04-10 to 2025-04-25', completed: true },
          { stage: 'Submission Deadline', date: '2025-05-15', completed: false },
          { stage: 'Technical Evaluation', date: '2025-05-20 to 2025-05-25', completed: false },
          { stage: 'Financial Evaluation', date: '2025-05-26 to 2025-05-30', completed: false },
          { stage: 'Award Notification', date: '2025-06-05', completed: false },
          { stage: 'Contract Signing', date: '2025-06-15', completed: false }
        ],
        faqs: FAQS,
        applicationFee: '5,000 KES'
      });
      setLoading(false);
    }, 1000);
  }, []);

  // Handle countdown to deadline
  const calculateTimeLeft = () => {
    if (!tender) return null;
    
    const difference = new Date(tender.deadline) - new Date();
    if (difference <= 0) return { expired: true };
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading tender details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-3 py-1 bg-blue-800 rounded-full text-sm font-medium">{tender.id}</span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {tender.status.charAt(0).toUpperCase() + tender.status.slice(1)}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{tender.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-1" />
                  <span>{tender.department}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>Budget: {tender.budget}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Published: {new Date(tender.publishedDate).toLocaleDateString('en-GB')}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{tender.category}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0 md:text-right">
              <div className="bg-blue-800 rounded-lg p-4 inline-block">
                <p className="text-sm mb-1">Submission Deadline</p>
                <p className="font-bold text-lg mb-2">{new Date(tender.deadline).toLocaleDateString('en-GB')}</p>
                
                {timeLeft && !timeLeft.expired ? (
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-blue-900 rounded p-1">
                      <span className="block text-lg font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
                      <span className="text-xs">Days</span>
                    </div>
                    <div className="bg-blue-900 rounded p-1">
                      <span className="block text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-xs">Hours</span>
                    </div>
                    <div className="bg-blue-900 rounded p-1">
                      <span className="block text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-xs">Mins</span>
                    </div>
                    <div className="bg-blue-900 rounded p-1">
                      <span className="block text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-xs">Secs</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-red-300 font-bold">Submission period ended</p>
                )}
              </div>
              
              <button 
                onClick={() => setIsApplyModalOpen(true)}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors w-full md:w-auto"
                disabled={timeLeft && timeLeft.expired}
              >
                Apply for this Tender
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Navigation */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-4 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === 'overview' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === 'documents' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button 
              className={`px-4 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === 'timeline' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('timeline')}
            >
              Timeline
            </button>
            <button 
              className={`px-4 py-4 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === 'faqs' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600 hover:text-blue-700'}`}
              onClick={() => setActiveTab('faqs')}
            >
              FAQs
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Tender Description</h2>
              <p className="text-gray-700 mb-6">{tender.description}</p>
              
              <h2 className="text-xl font-semibold mb-4">Scope of Work</h2>
              <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                {tender.scope.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h2 className="text-xl font-semibold mb-4">Eligibility Requirements</h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <ul className="space-y-3">
                  {tender.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckSquare className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          
          {/* Documents Tab */}
          {activeTab === 'documents' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Tender Documents</h2>
              <p className="text-gray-600 mb-4">Download the following documents to assist you in preparing your bid:</p>
              
              <div className="space-y-3">
                {tender.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded mr-3">
                        <FileText className="w-6 h-6 text-blue-700" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.size} • {doc.type.toUpperCase()}</p>
                      </div>
                    </div>
                    <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-medium mb-3">Submit Your Documents</h3>
                <p className="text-gray-600 mb-4">Please note that you need to apply for this tender before you can submit your bid documents. Once applied, you will be able to upload all required documentation.</p>
                <button 
                  onClick={() => setIsApplyModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium flex items-center"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Apply & Submit Documents
                </button>
              </div>
            </div>
          )}
          
          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Tender Process Timeline</h2>
              
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-6">
                  {tender.timeline.map((item, index) => (
                    <div key={index} className="flex">
                      <div className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full mr-4 ${item.completed ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {item.completed ? (
                          <CheckSquare className="w-4 h-4 text-white" />
                        ) : (
                          <span className="text-white text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex-1">
                        <h3 className="font-medium">{item.stage}</h3>
                        <p className="text-gray-600 text-sm">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {tender.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 font-medium">
                      {faq.question}
                    </div>
                    <div className="px-4 py-3 text-gray-700">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-5 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Have more questions?</h3>
                <p className="text-gray-700 mb-4">If you need further clarification about this tender, please submit your question through our inquiry system.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium">
                  Submit an Inquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Apply Modal */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Apply for Tender</h3>
              <p className="text-gray-600 mb-6">You're about to apply for tender <span className="font-medium">{tender.id}: {tender.title}</span></p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h4 className="font-medium flex items-center text-yellow-800">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Application Fee Required
                </h4>
                <p className="text-yellow-700 text-sm mt-1">
                  This tender requires a non-refundable application fee of {tender.applicationFee} to proceed.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Business Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your registered business name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Registration/License Number
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your business registration number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person
                  </label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Name of authorized representative"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select payment method</option>
                    <option value="mpesa">M-Pesa</option>
                    <option value="paypal">PayPal</option>
                    <option value="card">Credit/Debit Card</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <button 
                  onClick={() => setIsApplyModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderDetailPage;