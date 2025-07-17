'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { mockOpportunities, getUpcomingOpportunities, getOpportunitiesByLocation, getOpportunitiesByCategory } from '@/lib/mock-data'
import { BusinessProfile, matchOpportunities, Opportunity } from '@/lib/opportunity-matcher'

// Extended opportunity type for display
interface DisplayOpportunity extends Opportunity {
  daysLeft: number
  status: 'urgent' | 'new' | 'normal'
  type: 'Grant' | 'Framework' | 'Contract'
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [filteredOpps, setFilteredOpps] = useState<DisplayOpportunity[]>([])
  
  // Demo business profile (would come from user session in real app)
  const demoProfile: BusinessProfile = {
    name: 'Demo Tech Solutions',
    type: 'technology',
    industry: 'IT Services',
    location: 'Manchester',
    size: 'small',
    experience: '5',
    certifications: ['ISO 27001', 'Cyber Essentials'],
    previousContracts: []
  }

  // Get matched opportunities
  const matchedOpps = matchOpportunities(demoProfile, mockOpportunities)
  
  // Calculate stats
  const stats = {
    total: matchedOpps.length,
    new: matchedOpps.filter(o => {
      const days = Math.ceil((new Date(o.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
      return days > 20
    }).length,
    expiring: getUpcomingOpportunities(7).length,
    local: matchedOpps.filter(o => o.location.toLowerCase().includes(demoProfile.location.toLowerCase())).length,
    grants: matchedOpps.filter(o => o.category.toLowerCase().includes('grant') || o.title.toLowerCase().includes('grant')).length,
    totalValue: `£${(matchedOpps.reduce((sum, opp) => {
      const value = parseInt(opp.value.replace(/[£,km]/g, ''))
      const multiplier = opp.value.includes('k') ? 1000 : opp.value.includes('m') ? 1000000 : 1
      return sum + (value * multiplier)
    }, 0) / 1000000).toFixed(1)}M`
  }

  // Process opportunities for display
  const opportunities: DisplayOpportunity[] = matchedOpps.map(opp => {
    const deadline = new Date(opp.deadline)
    const daysLeft = Math.ceil((deadline.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    
    return {
      ...opp,
      daysLeft,
      status: daysLeft <= 7 ? 'urgent' : daysLeft > 20 ? 'new' : 'normal',
      type: opp.category.includes('Grant') || opp.title.includes('Grant') ? 'Grant' : 
            opp.category.includes('Framework') || opp.title.includes('Framework') ? 'Framework' : 'Contract'
    }
  })

  useEffect(() => {
    let filtered = opportunities
    
    if (activeTab === 'urgent') {
      filtered = opportunities.filter(opp => opp.status === 'urgent')
    } else if (activeTab === 'grants') {
      filtered = opportunities.filter(opp => opp.type === 'Grant')
    } else if (activeTab === 'local') {
      filtered = opportunities.filter(opp => 
        opp.location.toLowerCase().includes(demoProfile.location.toLowerCase()) ||
        opp.location.toLowerCase().includes('greater manchester')
      )
    }
    
    setFilteredOpps(filtered.slice(0, 10)) // Show top 10
  }, [activeTab, opportunities, demoProfile.location])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              🏛️ UK GovWatch Pro
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Demo Dashboard</span>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Your Opportunity Dashboard</h1>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.total}</div>
              <div className="text-sm opacity-80">Total Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.new}</div>
              <div className="text-sm opacity-80">New Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.expiring}</div>
              <div className="text-sm opacity-80">Expiring Soon</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.local}</div>
              <div className="text-sm opacity-80">Local</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.grants}</div>
              <div className="text-sm opacity-80">Grants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{stats.totalValue}</div>
              <div className="text-sm opacity-80">Total Value</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Tabs and Filters */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between p-4 border-b">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                All ({stats.total})
              </button>
              <button
                onClick={() => setActiveTab('urgent')}
                className={`px-4 py-2 rounded ${activeTab === 'urgent' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                Urgent ({stats.expiring})
              </button>
              <button
                onClick={() => setActiveTab('grants')}
                className={`px-4 py-2 rounded ${activeTab === 'grants' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                Grants ({stats.grants})
              </button>
              <button
                onClick={() => setActiveTab('local')}
                className={`px-4 py-2 rounded ${activeTab === 'local' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              >
                Local ({stats.local})
              </button>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 border rounded hover:bg-gray-50"
            >
              Filters {showFilters ? '↑' : '↓'}
            </button>
          </div>

          {showFilters && (
            <div className="p-4 bg-gray-50 grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select className="w-full p-2 border rounded">
                  <option>All Categories</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Construction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Min Value</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="£0" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Max Value</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Any" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <select className="w-full p-2 border rounded">
                  <option>All Locations</option>
                  <option>Within 25 miles</option>
                  <option>Within 50 miles</option>
                  <option>National only</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Alert for high matches */}
        {opportunities.filter(o => o.matchScore && o.matchScore >= 90 && o.daysLeft <= 7).length > 0 && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <p className="text-red-800">
              <strong>⚠️ Action Required:</strong> You have {opportunities.filter(o => o.matchScore && o.matchScore >= 90 && o.daysLeft <= 7).length} high-match opportunities closing soon!
            </p>
          </div>
        )}

        {/* Opportunities List */}
        <div className="space-y-4">
          {filteredOpps.map(opp => (
            <div key={opp.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{opp.title}</h3>
                    {opp.status === 'new' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">NEW</span>
                    )}
                    {opp.status === 'urgent' && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">URGENT</span>
                    )}
                  </div>
                  <p className="text-gray-600">{opp.source}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">{opp.value}</div>
                  <div className={`text-sm ${opp.daysLeft < 7 ? 'text-red-600' : 'text-gray-600'}`}>
                    {opp.daysLeft} days left
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span>📍 {opp.location}</span>
                <span>📁 {opp.category}</span>
                <span>📄 {opp.type}</span>
                <span className={`font-medium ${
                  (opp.matchScore || 0) >= 80 ? 'text-green-600' :
                  (opp.matchScore || 0) >= 60 ? 'text-blue-600' :
                  'text-gray-600'
                }`}>🎯 {opp.matchScore || 0}% match</span>
              </div>

              {/* Match reasons */}
              {opp.matchReasons && opp.matchReasons.length > 0 && (
                <div className="mb-3 text-sm text-green-700 bg-green-50 p-2 rounded">
                  ✓ {opp.matchReasons.join(' • ')}
                </div>
              )}

              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Link href={`/opportunity/${opp.id}`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block">
                    View Details
                  </Link>
                  <button className="px-4 py-2 border rounded hover:bg-gray-50">
                    Save
                  </button>
                  <button className="px-4 py-2 border rounded hover:bg-gray-50">
                    Share
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  Deadline: {new Date(opp.deadline).toLocaleDateString('en-GB')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 border rounded-lg hover:bg-gray-50">
            Load More Opportunities
          </button>
        </div>
      </div>
    </main>
  )
}