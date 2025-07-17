export interface BusinessProfile {
  name: string
  type: string
  industry: string
  location: string
  size: string
  experience: string
  certifications: string[]
  previousContracts: string[]
}

export interface Opportunity {
  id: string
  title: string
  value: string
  deadline: string
  source: string
  category: string
  location: string
  description: string
  requirements: string[]
  documents: string[]
  timeline: string
  matchScore?: number
  matchReasons?: string[]
}

// Business type to opportunity category mapping
const businessTypeCategories: Record<string, string[]> = {
  'construction': ['Construction', 'Infrastructure', 'Maintenance', 'Property', 'Engineering'],
  'technology': ['IT Services', 'Digital', 'Software', 'Technology', 'Data'],
  'consulting': ['Professional Services', 'Consulting', 'Management', 'Advisory', 'Research'],
  'healthcare': ['Healthcare', 'Medical', 'Social Care', 'Mental Health', 'Public Health'],
  'education': ['Education', 'Training', 'Skills Development', 'Youth Services'],
  'environmental': ['Environmental', 'Sustainability', 'Waste Management', 'Energy', 'Green'],
  'transport': ['Transport', 'Logistics', 'Fleet', 'Parking', 'Traffic Management'],
  'catering': ['Catering', 'Food Services', 'Hospitality', 'Events'],
  'cleaning': ['Cleaning', 'Facilities Management', 'Maintenance', 'Janitorial'],
  'security': ['Security', 'Surveillance', 'Safety', 'Emergency Services'],
  'creative': ['Creative', 'Design', 'Marketing', 'Communications', 'Media'],
  'financial': ['Financial', 'Accounting', 'Audit', 'Banking', 'Insurance'],
  'legal': ['Legal', 'Compliance', 'Regulatory', 'Governance'],
  'manufacturing': ['Manufacturing', 'Production', 'Supply', 'Engineering'],
  'retail': ['Retail', 'Procurement', 'Supply Chain', 'Distribution']
}

// Location proximity scoring
function getLocationScore(businessLocation: string, opportunityLocation: string): number {
  const businessLoc = businessLocation.toLowerCase()
  const oppLoc = opportunityLocation.toLowerCase()
  
  // Exact match
  if (businessLoc === oppLoc) return 100
  
  // Same region
  const regions: Record<string, string[]> = {
    'london': ['westminster', 'camden', 'islington', 'hackney', 'tower hamlets', 'greenwich', 'lewisham', 'southwark', 'lambeth', 'wandsworth', 'hammersmith', 'kensington', 'chelsea'],
    'manchester': ['salford', 'trafford', 'tameside', 'oldham', 'rochdale', 'bury', 'bolton', 'wigan', 'stockport'],
    'birmingham': ['wolverhampton', 'dudley', 'sandwell', 'walsall', 'solihull', 'coventry'],
    'leeds': ['bradford', 'kirklees', 'calderdale', 'wakefield'],
    'glasgow': ['paisley', 'east kilbride', 'livingston', 'hamilton', 'clydebank', 'dundee', 'edinburgh'],
    'liverpool': ['wirral', 'st helens', 'knowsley', 'sefton', 'warrington'],
    'bristol': ['bath', 'gloucester', 'cheltenham', 'swindon', 'newport'],
    'sheffield': ['rotherham', 'barnsley', 'doncaster', 'chesterfield'],
    'edinburgh': ['glasgow', 'dundee', 'aberdeen', 'stirling', 'perth'],
    'cardiff': ['swansea', 'newport', 'wrexham', 'bridgend', 'barry']
  }
  
  for (const [hub, cities] of Object.entries(regions)) {
    if ((businessLoc.includes(hub) || cities.some(city => businessLoc.includes(city))) &&
        (oppLoc.includes(hub) || cities.some(city => oppLoc.includes(city)))) {
      return 80
    }
  }
  
  // National opportunities
  if (oppLoc.includes('national') || oppLoc.includes('uk') || oppLoc.includes('multiple')) {
    return 60
  }
  
  // Default score for different locations
  return 20
}

// Business size to opportunity value scoring
function getSizeScore(businessSize: string, opportunityValue: string): number {
  const value = parseInt(opportunityValue.replace(/[£,k]/g, '')) * (opportunityValue.includes('k') ? 1000 : 1)
  
  const sizeRanges: Record<string, [number, number]> = {
    'micro': [5000, 50000],
    'small': [10000, 250000],
    'medium': [50000, 1000000],
    'large': [100000, 10000000],
    'enterprise': [500000, 100000000]
  }
  
  const range = sizeRanges[businessSize.toLowerCase()] || [0, 100000000]
  
  if (value >= range[0] && value <= range[1]) return 100
  if (value < range[0]) return Math.max(20, 100 - ((range[0] - value) / range[0]) * 80)
  if (value > range[1]) return Math.max(20, 100 - ((value - range[1]) / value) * 80)
  
  return 50
}

// Experience scoring
function getExperienceScore(businessExperience: string, requirements: string[]): number {
  const expYears = parseInt(businessExperience) || 0
  
  for (const req of requirements) {
    const reqLower = req.toLowerCase()
    if (reqLower.includes('experience')) {
      const match = reqLower.match(/(\\d+)\\s*years?/)
      if (match) {
        const reqYears = parseInt(match[1])
        if (expYears >= reqYears) return 100
        return Math.max(20, (expYears / reqYears) * 100)
      }
    }
  }
  
  // Default scoring based on experience
  if (expYears >= 5) return 80
  if (expYears >= 2) return 60
  if (expYears >= 1) return 40
  return 20
}

// Certification matching
function getCertificationScore(businessCerts: string[], requirements: string[]): number {
  const reqText = requirements.join(' ').toLowerCase()
  const certKeywords = ['iso', 'certification', 'accredited', 'qualified', 'certified', 'licence', 'license']
  
  let matchedCerts = 0
  let requiredCerts = 0
  
  for (const keyword of certKeywords) {
    if (reqText.includes(keyword)) {
      requiredCerts++
      for (const cert of businessCerts) {
        if (cert.toLowerCase().includes(keyword)) {
          matchedCerts++
          break
        }
      }
    }
  }
  
  if (requiredCerts === 0) return 50 // No specific certs required
  return (matchedCerts / requiredCerts) * 100
}

// Main matching function
export function matchOpportunities(
  profile: BusinessProfile,
  opportunities: Opportunity[]
): Opportunity[] {
  const scoredOpportunities = opportunities.map(opp => {
    const scores = {
      category: 0,
      location: 0,
      size: 0,
      experience: 0,
      certification: 0
    }
    
    const matchReasons: string[] = []
    
    // Category matching
    const businessCategories = businessTypeCategories[profile.type.toLowerCase()] || []
    if (businessCategories.some(cat => opp.category.includes(cat))) {
      scores.category = 100
      matchReasons.push(`Perfect match for ${profile.type} businesses`)
    } else if (opp.category.toLowerCase().includes(profile.industry.toLowerCase())) {
      scores.category = 80
      matchReasons.push(`Good match for ${profile.industry} industry`)
    } else {
      scores.category = 20
    }
    
    // Location matching
    scores.location = getLocationScore(profile.location, opp.location)
    if (scores.location >= 80) {
      matchReasons.push(`Located in your area (${opp.location})`)
    } else if (scores.location >= 60) {
      matchReasons.push('National opportunity available to all UK businesses')
    }
    
    // Size matching
    scores.size = getSizeScore(profile.size, opp.value)
    if (scores.size >= 80) {
      matchReasons.push(`Contract value suitable for ${profile.size} businesses`)
    }
    
    // Experience matching
    scores.experience = getExperienceScore(profile.experience, opp.requirements)
    if (scores.experience >= 80) {
      matchReasons.push('Your experience meets or exceeds requirements')
    }
    
    // Certification matching
    scores.certification = getCertificationScore(profile.certifications, opp.requirements)
    if (scores.certification >= 80) {
      matchReasons.push('You have relevant certifications')
    }
    
    // Calculate weighted average
    const weights = {
      category: 0.35,
      location: 0.25,
      size: 0.20,
      experience: 0.10,
      certification: 0.10
    }
    
    const totalScore = Object.entries(scores).reduce((sum, [key, score]) => {
      return sum + score * weights[key as keyof typeof weights]
    }, 0)
    
    return {
      ...opp,
      matchScore: Math.round(totalScore),
      matchReasons
    }
  })
  
  // Sort by match score
  return scoredOpportunities
    .filter(opp => opp.matchScore! >= 30) // Only show relevant matches
    .sort((a, b) => b.matchScore! - a.matchScore!)
}

// Generate personalized recommendations
export function getRecommendations(profile: BusinessProfile, opportunities: Opportunity[]): string[] {
  const recommendations: string[] = []
  const matched = matchOpportunities(profile, opportunities)
  
  // Analyze patterns
  const avgScore = matched.reduce((sum, opp) => sum + opp.matchScore!, 0) / matched.length
  
  if (avgScore < 50) {
    recommendations.push('Consider expanding your service area to access more opportunities')
    recommendations.push('Look into obtaining industry-specific certifications to qualify for more contracts')
  }
  
  if (profile.certifications.length < 2) {
    recommendations.push('ISO 9001 certification could help you qualify for 40% more government contracts')
  }
  
  if (profile.size === 'micro' || profile.size === 'small') {
    recommendations.push('Consider partnering with other SMEs to bid for larger contracts')
    recommendations.push('Look for framework agreements designed for smaller suppliers')
  }
  
  const categories = new Set(matched.slice(0, 10).map(opp => opp.category))
  if (categories.size < 3) {
    recommendations.push(`Diversify beyond ${Array.from(categories).join(' and ')} to reduce dependency`)
  }
  
  return recommendations
}