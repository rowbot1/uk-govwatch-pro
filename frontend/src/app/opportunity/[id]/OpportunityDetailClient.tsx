'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function OpportunityDetailClient({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock opportunity data - in real app would fetch by ID
  const opportunity = {
    id: params.id,
    title: 'Digital Transformation Services Framework',
    reference: 'RM6263',
    source: 'Crown Commercial Service',
    buyer: 'Department for Education',
    value: '£5,000,000',
    type: 'Framework Agreement',
    location: 'National',
    published: '2024-06-15',
    deadline: '2024-08-15',
    daysLeft: 28,
    match: 94,
    category: 'Technology',
    description: 'The Department for Education is seeking suppliers to join a new framework agreement for digital transformation services. This includes cloud migration, legacy system modernization, user experience design, and agile delivery services.',
    keyRequirements: [
      'ISO 27001 certification required',
      'Minimum £10M annual turnover',
      'Experience with public sector digital transformation',
      'Agile delivery capability',
      'UK-based support team'
    ],
    scope: [
      'Cloud migration and infrastructure',
      'Application modernization',
      'User research and design',
      'Agile coaching and delivery',
      'Technical architecture',
      'Cyber security services'
    ],
    evaluationCriteria: {
      'Technical Capability': 40,
      'Experience': 30,
      'Price': 20,
      'Social Value': 10
    },
    documents: [
      { name: 'Invitation to Tender', size: '2.4 MB', type: 'PDF' },
      { name: 'Framework Agreement', size: '1.8 MB', type: 'PDF' },
      { name: 'Pricing Schedule', size: '245 KB', type: 'XLSX' },
      { name: 'Technical Requirements', size: '3.2 MB', type: 'PDF' }
    ],
    timeline: [
      { date: '2024-06-15', event: 'Opportunity Published' },
      { date: '2024-07-01', event: 'Clarification Questions Deadline' },
      { date: '2024-08-15', event: 'Submission Deadline' },
      { date: '2024-09-01', event: 'Evaluation Period Begins' },
      { date: '2024-10-01', event: 'Contract Award' }
    ]
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              🏛️ UK GovWatch Pro
            </Link>
            <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Opportunity Header */}
      <div className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{opportunity.title}</h1>
              <p className="text-blue-100 mb-4">{opportunity.buyer} · {opportunity.source}</p>
              <div className="flex gap-4 text-sm">
                <span>📍 {opportunity.location}</span>
                <span>📁 {opportunity.category}</span>
                <span>📄 {opportunity.type}</span>
                <span>🔖 Ref: {opportunity.reference}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-2">{opportunity.value}</div>
              <div className="bg-red-500 text-white px-3 py-1 rounded inline-block">
                {opportunity.daysLeft} days left
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Score Banner */}
      <div className="bg-green-50 border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-green-700">
                <span className="text-2xl font-bold">{opportunity.match}%</span> Match Score
              </div>
              <span className="text-green-600">✓ Meets your capabilities</span>
              <span className="text-green-600">✓ In your service area</span>
              <span className="text-green-600">✓ Budget range match</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 font-medium ${activeTab === 'overview' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 font-medium ${activeTab === 'requirements' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 font-medium ${activeTab === 'documents' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-6 py-3 font-medium ${activeTab === 'timeline' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-6 py-3 font-medium ${activeTab === 'apply' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'}`}
            >
              How to Apply
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Description</h3>
                  <p className="text-gray-700">{opportunity.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Scope of Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {opportunity.scope.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Evaluation Criteria</h3>
                  <div className="space-y-2">
                    {Object.entries(opportunity.evaluationCriteria).map(([criteria, weight]) => (
                      <div key={criteria} className="flex items-center gap-4">
                        <span className="w-40">{criteria}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-4 relative">
                          <div 
                            className="bg-blue-600 h-4 rounded-full"
                            style={{ width: `${weight}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{weight}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Key Requirements</h3>
                  <div className="space-y-2">
                    {opportunity.keyRequirements.map((req, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Your Qualification Status</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span> ISO 27001 certification - You have this
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span> Public sector experience - 5 previous contracts
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-600">⚠</span> Annual turnover - £8.5M (Below requirement)
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Tender Documents</h3>
                <div className="space-y-3">
                  {opportunity.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600">{doc.type} · {doc.size}</div>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:underline">Download</button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ⚠️ In the demo, document downloads are not available. In the full version, all tender documents can be downloaded directly.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Procurement Timeline</h3>
                <div className="space-y-4">
                  {opportunity.timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-32 text-right text-gray-600">{item.date}</div>
                      <div className="relative">
                        <div className={`w-4 h-4 rounded-full ${idx === 0 ? 'bg-green-600' : idx < 2 ? 'bg-blue-600' : 'bg-gray-300'}`} />
                        {idx < opportunity.timeline.length - 1 && (
                          <div className="absolute top-4 left-2 w-0.5 h-12 bg-gray-300" />
                        )}
                      </div>
                      <div className="flex-1 -mt-1">
                        <div className="font-medium">{item.event}</div>
                        {idx === 2 && <div className="text-sm text-red-600 mt-1">Coming up in {opportunity.daysLeft} days</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'apply' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">How to Apply</h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Register on the Crown Commercial Service supplier portal</li>
                    <li>Download and review all tender documents</li>
                    <li>Submit clarification questions by July 1, 2024</li>
                    <li>Complete all required forms and pricing schedules</li>
                    <li>Submit your response via the portal by August 15, 2024, 12:00 PM</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Need Help with Your Application?</h4>
                  <p className="text-gray-700 mb-4">UK GovWatch Pro Premium includes:</p>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li>✓ AI-powered bid writing assistance</li>
                    <li>✓ Compliance checklist tracking</li>
                    <li>✓ Win probability analysis</li>
                    <li>✓ Expert review service</li>
                  </ul>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Upgrade to Premium
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">
                Save Opportunity
              </button>
              <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">
                Set Reminder
              </button>
              <button className="px-6 py-2 border rounded-lg hover:bg-gray-50">
                Share with Team
              </button>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Start Application
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}