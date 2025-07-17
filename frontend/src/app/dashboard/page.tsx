'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const stats = {
    total: 127,
    new: 23,
    expiring: 12,
    local: 42,
    grants: 34,
    totalValue: '£8.4M'
  }

  const opportunities = [
    {
      id: 1,
      title: 'Digital Transformation Services',
      source: 'Department for Education',
      type: 'Framework',
      value: '£5M',
      deadline: '2024-08-15',
      daysLeft: 28,
      match: 94,
      status: 'new',
      location: 'National',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Website Development - Manchester Libraries',
      source: 'Manchester City Council',
      type: 'Contract',
      value: '£85,000',
      deadline: '2024-07-25',
      daysLeft: 7,
      match: 97,
      status: 'urgent',
      location: 'Manchester',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Innovation Grant - Digital Health',
      source: 'Innovate UK',
      type: 'Grant',
      value: 'Up to £250,000',
      deadline: '2024-08-30',
      daysLeft: 43,
      match: 82,
      status: 'new',
      location: 'National',
      category: 'Healthcare'
    },
    {
      id: 4,
      title: 'Cyber Security Assessment',
      source: 'NHS Digital',
      type: 'Contract',
      value: '£320,000',
      deadline: '2024-07-22',
      daysLeft: 4,
      match: 78,
      status: 'urgent',
      location: 'National',
      category: 'Security'
    },
    {
      id: 5,
      title: 'Business Growth Grant',
      source: 'Greater Manchester Combined Authority',
      type: 'Grant',
      value: 'Up to £50,000',
      deadline: '2024-09-15',
      daysLeft: 59,
      match: 91,
      status: 'normal',
      location: 'Manchester',
      category: 'Business Support'
    }
  ]

  const filteredOpportunities = opportunities.filter(opp => {
    if (activeTab === 'urgent') return opp.status === 'urgent'
    if (activeTab === 'grants') return opp.type === 'Grant'
    if (activeTab === 'local') return opp.location !== 'National'
    return true
  })

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

        {/* Opportunities List */}
        <div className="space-y-4">
          {filteredOpportunities.map(opp => (
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
                <span>🎯 {opp.match}% match</span>
              </div>

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
                  Deadline: {new Date(opp.deadline).toLocaleDateString()}
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