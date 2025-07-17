'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Demo() {
  const [step, setStep] = useState('profile')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({
    businessType: '',
    location: '',
    size: '',
    capabilities: [] as string[]
  })

  const mockOpportunities = [
    {
      id: 1,
      title: 'Website Redesign and Development',
      source: 'Manchester City Council',
      value: '£45,000',
      deadline: '7 days',
      type: 'contract',
      match: 92,
      location: 'Manchester (5 miles)',
      description: 'Complete redesign of council website with modern accessibility standards'
    },
    {
      id: 2,
      title: 'Digital Innovation Grant Fund',
      source: 'Greater Manchester Combined Authority',
      value: 'Up to £150,000',
      deadline: '21 days',
      type: 'grant',
      match: 87,
      location: 'Greater Manchester',
      description: 'Funding for innovative digital solutions in public services'
    },
    {
      id: 3,
      title: 'NHS Digital Transformation Framework',
      source: 'NHS Supply Chain',
      value: '£2.5M',
      deadline: '14 days',
      type: 'framework',
      match: 78,
      location: 'National',
      description: '4-year framework for digital health solutions'
    },
    {
      id: 4,
      title: 'IT Support Services - Didsbury Library',
      source: 'Manchester City Council',
      value: '£12,000',
      deadline: '5 days',
      type: 'contract',
      match: 95,
      location: 'Didsbury (2 miles)',
      description: 'Ongoing IT support for library systems'
    },
    {
      id: 5,
      title: 'Cyber Security Assessment Services',
      source: 'Home Office',
      value: '£450,000',
      deadline: '10 days',
      type: 'contract',
      match: 72,
      location: 'National',
      description: 'Security assessments for government systems'
    }
  ]

  const handleProfileSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep('results')
    }, 3000)
  }

  const handleCapabilityToggle = (capability: string) => {
    setProfile(prev => ({
      ...prev,
      capabilities: prev.capabilities.includes(capability)
        ? prev.capabilities.filter(c => c !== capability)
        : [...prev.capabilities, capability]
    }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            🏛️ UK GovWatch Pro
          </Link>
          <span className="text-sm text-gray-600">Demo Mode</span>
        </div>
      </header>

      {step === 'profile' && (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <h1 className="text-3xl font-bold mb-2">Let&apos;s Find Your Opportunities</h1>
          <p className="text-gray-600 mb-8">Tell us about your business and we&apos;ll search 350+ government sources</p>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
            {/* Business Type */}
            <div>
              <label className="block font-semibold mb-2">What does your business do?</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="e.g., IT consultancy, construction, healthcare services"
                value={profile.businessType}
                onChange={(e) => setProfile({...profile, businessType: e.target.value})}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block font-semibold mb-2">Where are you based?</label>
              <select 
                className="w-full p-3 border rounded-lg"
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
              >
                <option value="">Select location...</option>
                <option value="manchester">Manchester</option>
                <option value="london">London</option>
                <option value="birmingham">Birmingham</option>
                <option value="leeds">Leeds</option>
                <option value="glasgow">Glasgow</option>
                <option value="bristol">Bristol</option>
              </select>
            </div>

            {/* Business Size */}
            <div>
              <label className="block font-semibold mb-2">Business size</label>
              <select 
                className="w-full p-3 border rounded-lg"
                value={profile.size}
                onChange={(e) => setProfile({...profile, size: e.target.value})}
              >
                <option value="">Select size...</option>
                <option value="micro">Micro (1-9 employees)</option>
                <option value="small">Small (10-49 employees)</option>
                <option value="medium">Medium (50-249 employees)</option>
                <option value="large">Large (250+ employees)</option>
              </select>
            </div>

            {/* Capabilities */}
            <div>
              <label className="block font-semibold mb-2">Main capabilities (select all that apply)</label>
              <div className="grid grid-cols-2 gap-3">
                {['IT & Technology', 'Construction', 'Consulting', 'Healthcare', 'Education', 'Facilities', 'Professional Services', 'Creative'].map(cap => (
                  <label key={cap} className="flex items-center p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={profile.capabilities.includes(cap)}
                      onChange={() => handleCapabilityToggle(cap)}
                    />
                    {cap}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handleProfileSubmit}
              disabled={!profile.businessType || !profile.location || !profile.size}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Find Opportunities →
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Searching 350+ UK Government Sources...</h2>
          <p className="text-gray-600">
            Checking national contracts, local councils, NHS, grants...
          </p>
        </div>
      )}

      {step === 'results' && (
        <div className="container mx-auto px-4 py-8">
          {/* Stats Bar */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">127</div>
                <div className="text-sm text-gray-600">Opportunities Found</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">£8.4M</div>
                <div className="text-sm text-gray-600">Total Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">42</div>
                <div className="text-sm text-gray-600">Local Opportunities</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">12</div>
                <div className="text-sm text-gray-600">Closing Soon</div>
              </div>
            </div>
          </div>

          {/* Opportunities List */}
          <h2 className="text-2xl font-bold mb-4">Top Matches for Your Business</h2>
          <div className="space-y-4">
            {mockOpportunities.map(opp => (
              <div key={opp.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{opp.title}</h3>
                    <p className="text-gray-600">{opp.source}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{opp.value}</div>
                    <div className="text-sm text-red-600">{opp.deadline} left</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{opp.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {opp.match}% match
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {opp.location}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {opp.type}
                    </span>
                  </div>
                  <button className="text-blue-600 font-semibold hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-blue-50 p-6 rounded-lg mt-8 text-center">
            <h3 className="font-semibold text-lg mb-2">Want to see all 127 opportunities?</h3>
            <p className="text-gray-600 mb-4">Try our full dashboard with filtering, alerts, and more features</p>
            <a href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 inline-block">
              View Full Dashboard →
            </a>
          </div>
        </div>
      )}
    </main>
  )
}