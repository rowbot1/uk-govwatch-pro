'use client'

import { useState } from 'react'
import Link from 'next/link'
import { matchOpportunities, getRecommendations, BusinessProfile } from '@/lib/opportunity-matcher'
import { mockOpportunities } from '@/lib/mock-data'

export default function Demo() {
  const [step, setStep] = useState('profile')
  const [loading, setLoading] = useState(false)
  const [profile, setProfile] = useState({
    name: '',
    businessType: '',
    industry: '',
    location: '',
    size: '',
    experience: '',
    certifications: [] as string[],
    capabilities: [] as string[]
  })

  const [matchedOpportunities, setMatchedOpportunities] = useState<any[]>([])
  const [recommendations, setRecommendations] = useState<string[]>([])

  const handleProfileSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      // Create business profile object
      const businessProfile: BusinessProfile = {
        name: profile.businessType,
        type: profile.businessType.toLowerCase(),
        industry: profile.industry || profile.businessType,
        location: profile.location,
        size: profile.size,
        experience: profile.experience || '3',
        certifications: profile.certifications,
        previousContracts: []
      }
      
      // Get matched opportunities
      const matched = matchOpportunities(businessProfile, mockOpportunities)
      setMatchedOpportunities(matched.slice(0, 10)) // Show top 10
      
      // Get recommendations
      const recs = getRecommendations(businessProfile, mockOpportunities)
      setRecommendations(recs)
      
      setLoading(false)
      setStep('results')
    }, 3000)
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
              <label className="block font-semibold mb-2">What type of business are you?</label>
              <select
                className="w-full p-3 border rounded-lg"
                value={profile.businessType}
                onChange={(e) => setProfile({...profile, businessType: e.target.value})}
              >
                <option value="">Select type...</option>
                <option value="construction">Construction & Engineering</option>
                <option value="technology">Technology & IT Services</option>
                <option value="consulting">Consulting & Professional Services</option>
                <option value="healthcare">Healthcare & Social Care</option>
                <option value="education">Education & Training</option>
                <option value="environmental">Environmental & Sustainability</option>
                <option value="transport">Transport & Logistics</option>
                <option value="catering">Catering & Hospitality</option>
                <option value="cleaning">Cleaning & Facilities</option>
                <option value="security">Security Services</option>
                <option value="creative">Creative & Marketing</option>
                <option value="manufacturing">Manufacturing & Supply</option>
              </select>
            </div>

            {/* Industry */}
            <div>
              <label className="block font-semibold mb-2">Industry/Specialization</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="e.g., web development, civil engineering, mental health"
                value={profile.industry}
                onChange={(e) => setProfile({...profile, industry: e.target.value})}
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
                <option value="Manchester">Manchester</option>
                <option value="London">London</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Leeds">Leeds</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Bristol">Bristol</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="Cardiff">Cardiff</option>
                <option value="Newcastle">Newcastle</option>
                <option value="Nottingham">Nottingham</option>
                <option value="Leicester">Leicester</option>
                <option value="Belfast">Belfast</option>
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

            {/* Experience */}
            <div>
              <label className="block font-semibold mb-2">Years in business</label>
              <select 
                className="w-full p-3 border rounded-lg"
                value={profile.experience}
                onChange={(e) => setProfile({...profile, experience: e.target.value})}
              >
                <option value="">Select experience...</option>
                <option value="0">Less than 1 year</option>
                <option value="1">1-2 years</option>
                <option value="3">3-5 years</option>
                <option value="6">6-10 years</option>
                <option value="11">More than 10 years</option>
              </select>
            </div>

            {/* Certifications */}
            <div>
              <label className="block font-semibold mb-2">Certifications & Accreditations</label>
              <div className="grid grid-cols-2 gap-3">
                {['ISO 9001', 'ISO 14001', 'ISO 27001', 'Cyber Essentials', 'SafeContractor', 'CHAS', 'Living Wage', 'SIA Approved'].map(cert => (
                  <label key={cert} className="flex items-center p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={profile.certifications.includes(cert)}
                      onChange={() => setProfile(prev => ({
                        ...prev,
                        certifications: prev.certifications.includes(cert)
                          ? prev.certifications.filter(c => c !== cert)
                          : [...prev.certifications, cert]
                      }))}
                    />
                    {cert}
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handleProfileSubmit}
              disabled={!profile.businessType || !profile.location || !profile.size || !profile.experience}
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
                <div className="text-2xl font-bold text-blue-600">{matchedOpportunities.length * 10 + 27}</div>
                <div className="text-sm text-gray-600">Opportunities Found</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">£{(matchedOpportunities.reduce((sum, opp) => {
                  const value = parseInt(opp.value.replace(/[£,km]/g, ''))
                  const multiplier = opp.value.includes('k') ? 1000 : opp.value.includes('m') ? 1000000 : 1
                  return sum + (value * multiplier)
                }, 0) / 1000000).toFixed(1)}M</div>
                <div className="text-sm text-gray-600">Total Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{matchedOpportunities.filter(o => o.matchScore >= 80).length}</div>
                <div className="text-sm text-gray-600">Perfect Matches</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{matchedOpportunities.filter(o => {
                  const deadline = new Date(o.deadline)
                  const days = Math.ceil((deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
                  return days <= 7
                }).length}</div>
                <div className="text-sm text-gray-600">Closing Soon</div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-amber-900 mb-2">💡 Recommendations to Win More Contracts</h3>
              <ul className="text-sm text-amber-800 space-y-1">
                {recommendations.map((rec, idx) => (
                  <li key={idx}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Opportunities List */}
          <h2 className="text-2xl font-bold mb-4">Top Matches for Your Business</h2>
          <div className="space-y-4">
            {matchedOpportunities.map(opp => (
              <div key={opp.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{opp.title}</h3>
                    <p className="text-gray-600">{opp.source}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{opp.value}</div>
                    <div className="text-sm text-red-600">
                      {(() => {
                        const deadline = new Date(opp.deadline)
                        const days = Math.ceil((deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
                        return `${days} days left`
                      })()}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-3">{opp.description}</p>
                
                <div className="flex flex-col gap-3">
                  {/* Match Reasons */}
                  {opp.matchReasons && opp.matchReasons.length > 0 && (
                    <div className="text-sm text-green-700">
                      ✓ {opp.matchReasons.slice(0, 2).join(' • ')}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        opp.matchScore >= 80 ? 'bg-green-100 text-green-700' :
                        opp.matchScore >= 60 ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {opp.matchScore}% match
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {opp.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {opp.category}
                      </span>
                    </div>
                    <Link href={`/opportunity/${opp.id}`} className="text-blue-600 font-semibold hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-blue-50 p-6 rounded-lg mt-8 text-center">
            <h3 className="font-semibold text-lg mb-2">Want to see all {matchedOpportunities.length * 10 + 27} opportunities?</h3>
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