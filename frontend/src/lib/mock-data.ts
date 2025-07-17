import { Opportunity } from './opportunity-matcher'

// Realistic UK council and government opportunity data
export const mockOpportunities: Opportunity[] = [
  // London opportunities
  {
    id: '1',
    title: 'Website Redesign and Digital Transformation',
    value: '£120k',
    deadline: '2024-03-15',
    source: 'Westminster City Council',
    category: 'IT Services',
    location: 'Westminster, London',
    description: 'Complete redesign of council website and citizen portal with modern accessibility standards',
    requirements: [
      'Proven experience in government digital transformation',
      'WCAG 2.1 AA compliance expertise',
      'UK-based team with security clearance',
      'ISO 27001 certification required'
    ],
    documents: ['ITT_Digital_Transform.pdf', 'Technical_Requirements.pdf', 'Current_Architecture.pdf'],
    timeline: '6 month delivery'
  },
  {
    id: '2',
    title: 'Social Care Management System',
    value: '£450k',
    deadline: '2024-04-01',
    source: 'Camden Council',
    category: 'Healthcare',
    location: 'Camden, London',
    description: 'Implementation of integrated social care case management system for vulnerable adults',
    requirements: [
      'Experience with NHS and social care systems',
      'CQC compliance knowledge',
      'Data protection and GDPR expertise',
      'Minimum 5 years healthcare IT experience'
    ],
    documents: ['Social_Care_Specification.pdf', 'Integration_Requirements.pdf', 'Data_Standards.pdf'],
    timeline: '12 month implementation'
  },
  {
    id: '3',
    title: 'School Meal Catering Services',
    value: '£2.5m',
    deadline: '2024-03-20',
    source: 'Hackney Council',
    category: 'Catering',
    location: 'Hackney, London',
    description: 'Provision of healthy school meals across 45 primary schools in Hackney',
    requirements: [
      'Food Standards Agency 5-star rating',
      'Experience with school catering contracts',
      'Allergen management systems',
      'Living wage employer'
    ],
    documents: ['Catering_Contract.pdf', 'Nutritional_Standards.pdf', 'School_Locations.pdf'],
    timeline: '3 year contract'
  },

  // Manchester opportunities
  {
    id: '4',
    title: 'Highway Maintenance Framework',
    value: '£8m',
    deadline: '2024-03-25',
    source: 'Manchester City Council',
    category: 'Construction',
    location: 'Manchester',
    description: 'Framework agreement for responsive highway maintenance and emergency repairs',
    requirements: [
      'Highways England approved contractor',
      'ISO 9001 and ISO 14001 certified',
      '24/7 emergency response capability',
      'Minimum £10m annual turnover'
    ],
    documents: ['Highway_Framework.pdf', 'Technical_Specifications.pdf', 'SLA_Requirements.pdf'],
    timeline: '4 year framework'
  },
  {
    id: '5',
    title: 'Business Growth Consultancy',
    value: '£180k',
    deadline: '2024-03-18',
    source: 'Greater Manchester Combined Authority',
    category: 'Consulting',
    location: 'Greater Manchester',
    description: 'Support programme for SME growth including mentoring and strategic planning',
    requirements: [
      'Proven SME consultancy track record',
      'Knowledge of Greater Manchester business landscape',
      'Experience with government grant schemes',
      'Professional indemnity insurance £2m+'
    ],
    documents: ['Consultancy_Brief.pdf', 'Delivery_Model.pdf', 'KPI_Framework.pdf'],
    timeline: '18 month programme'
  },

  // Birmingham opportunities
  {
    id: '6',
    title: 'Waste Collection Fleet Replacement',
    value: '£12m',
    deadline: '2024-04-10',
    source: 'Birmingham City Council',
    category: 'Environmental',
    location: 'Birmingham',
    description: 'Supply of 40 electric waste collection vehicles with maintenance package',
    requirements: [
      'Electric vehicle manufacturer or approved dealer',
      'Nationwide service network',
      'Driver training provision',
      'Minimum 5 year warranty'
    ],
    documents: ['Fleet_Specification.pdf', 'Maintenance_Requirements.pdf', 'Delivery_Schedule.pdf'],
    timeline: 'Phased delivery over 18 months'
  },
  {
    id: '7',
    title: 'Youth Employment Programme',
    value: '£350k',
    deadline: '2024-03-22',
    source: 'Birmingham City Council',
    category: 'Education',
    location: 'Birmingham',
    description: 'Delivery of employment skills training for 16-24 year olds not in education or employment',
    requirements: [
      'Ofsted Good or Outstanding rating',
      'Experience with NEET programmes',
      'Employer partnership network',
      'Matrix Standard accreditation'
    ],
    documents: ['Programme_Specification.pdf', 'Outcome_Targets.pdf', 'Referral_Process.pdf'],
    timeline: '2 year programme'
  },

  // Leeds opportunities
  {
    id: '8',
    title: 'Corporate Security Services',
    value: '£650k',
    deadline: '2024-03-30',
    source: 'Leeds City Council',
    category: 'Security',
    location: 'Leeds',
    description: 'Security services for council buildings including CCTV monitoring and patrols',
    requirements: [
      'SIA Approved Contractor Scheme member',
      'ISO 9001 certified',
      'Living wage employer',
      'Local employment commitment'
    ],
    documents: ['Security_Requirements.pdf', 'Site_List.pdf', 'TUPE_Information.pdf'],
    timeline: '3 year contract + 2 year option'
  },
  {
    id: '9',
    title: 'Public Health Campaign Design',
    value: '£95k',
    deadline: '2024-03-12',
    source: 'Leeds City Council',
    category: 'Creative',
    location: 'Leeds',
    description: 'Design and delivery of multi-channel public health campaigns on key health issues',
    requirements: [
      'Healthcare marketing experience',
      'Multi-language capability',
      'Digital and print design expertise',
      'Campaign evaluation experience'
    ],
    documents: ['Campaign_Brief.pdf', 'Brand_Guidelines.pdf', 'Target_Demographics.pdf'],
    timeline: '12 month retainer'
  },

  // Scotland opportunities
  {
    id: '10',
    title: 'Renewable Energy Feasibility Studies',
    value: '£220k',
    deadline: '2024-04-05',
    source: 'Scottish Government',
    category: 'Environmental',
    location: 'Scotland - National',
    description: 'Feasibility studies for community renewable energy projects across Scotland',
    requirements: [
      'Renewable energy engineering expertise',
      'Community engagement experience',
      'Knowledge of Scottish planning system',
      'Professional indemnity insurance'
    ],
    documents: ['Study_Scope.pdf', 'Community_Sites.pdf', 'Technical_Standards.pdf'],
    timeline: '6 month delivery'
  },
  {
    id: '11',
    title: 'Rural Broadband Infrastructure',
    value: '£4.5m',
    deadline: '2024-04-20',
    source: 'Highland Council',
    category: 'Technology',
    location: 'Scottish Highlands',
    description: 'Design and build of broadband infrastructure for remote Highland communities',
    requirements: [
      'Openreach accredited contractor',
      'Rural deployment experience',
      'Environmental impact assessment capability',
      'Local subcontractor network'
    ],
    documents: ['Technical_Design.pdf', 'Coverage_Areas.pdf', 'Environmental_Constraints.pdf'],
    timeline: '24 month rollout'
  },

  // Wales opportunities
  {
    id: '12',
    title: 'Welsh Language Translation Services',
    value: '£140k',
    deadline: '2024-03-28',
    source: 'Welsh Government',
    category: 'Professional Services',
    location: 'Wales - National',
    description: 'Translation and interpretation services for government publications and events',
    requirements: [
      'Qualified Welsh translators',
      'Subject matter expertise in policy',
      'Quick turnaround capability',
      'Quality assurance processes'
    ],
    documents: ['Service_Specification.pdf', 'Volume_Estimates.pdf', 'Quality_Standards.pdf'],
    timeline: '3 year framework'
  },
  {
    id: '13',
    title: 'Coastal Defense Engineering',
    value: '£6.8m',
    deadline: '2024-04-15',
    source: 'Swansea Council',
    category: 'Engineering',
    location: 'Swansea',
    description: 'Design and construction of coastal flood defense improvements',
    requirements: [
      'Coastal engineering expertise',
      'Environmental impact assessment',
      'CDM compliance',
      'Marine construction experience'
    ],
    documents: ['Engineering_Brief.pdf', 'Site_Surveys.pdf', 'Environmental_Report.pdf'],
    timeline: '18 month construction'
  },

  // Northern England opportunities
  {
    id: '14',
    title: 'Adult Social Care Training',
    value: '£280k',
    deadline: '2024-03-24',
    source: 'Newcastle City Council',
    category: 'Education',
    location: 'Newcastle',
    description: 'Delivery of mandatory training for social care workforce',
    requirements: [
      'Skills for Care approved provider',
      'E-learning platform',
      'Face-to-face delivery capability',
      'Quality assurance framework'
    ],
    documents: ['Training_Specification.pdf', 'Course_Requirements.pdf', 'Delivery_Volumes.pdf'],
    timeline: '2 year contract'
  },
  {
    id: '15',
    title: 'Smart City IoT Platform',
    value: '£380k',
    deadline: '2024-04-08',
    source: 'Liverpool City Council',
    category: 'Technology',
    location: 'Liverpool',
    description: 'Implementation of IoT platform for smart city initiatives including traffic and air quality',
    requirements: [
      'IoT platform experience',
      'Data analytics capability',
      'Cyber security expertise',
      'API development skills'
    ],
    documents: ['Platform_Architecture.pdf', 'Sensor_Specifications.pdf', 'Data_Requirements.pdf'],
    timeline: '9 month implementation'
  },

  // Midlands opportunities
  {
    id: '16',
    title: 'Green Business Support Programme',
    value: '£165k',
    deadline: '2024-03-26',
    source: 'Nottingham City Council',
    category: 'Consulting',
    location: 'Nottingham',
    description: 'Business support programme helping SMEs reduce carbon emissions',
    requirements: [
      'Environmental consultancy experience',
      'Carbon footprinting expertise',
      'SME engagement track record',
      'Grant administration experience'
    ],
    documents: ['Programme_Design.pdf', 'Target_Outcomes.pdf', 'Reporting_Requirements.pdf'],
    timeline: '18 month programme'
  },
  {
    id: '17',
    title: 'Library Management System',
    value: '£240k',
    deadline: '2024-03-19',
    source: 'Leicester City Council',
    category: 'IT Services',
    location: 'Leicester',
    description: 'Modern library management system with public access portal and mobile app',
    requirements: [
      'Library system experience',
      'Mobile app development',
      'RFID integration knowledge',
      'Data migration expertise'
    ],
    documents: ['System_Requirements.pdf', 'Integration_Scope.pdf', 'Migration_Plan.pdf'],
    timeline: '12 month project'
  },

  // South West opportunities
  {
    id: '18',
    title: 'Tourism Marketing Campaign',
    value: '£185k',
    deadline: '2024-03-21',
    source: 'Bristol City Council',
    category: 'Creative',
    location: 'Bristol',
    description: 'Integrated marketing campaign to promote Bristol as tourist destination',
    requirements: [
      'Tourism marketing experience',
      'Social media expertise',
      'Video production capability',
      'Campaign measurement tools'
    ],
    documents: ['Marketing_Brief.pdf', 'Brand_Assets.pdf', 'Target_Markets.pdf'],
    timeline: '12 month campaign'
  },
  {
    id: '19',
    title: 'Electric Bus Charging Infrastructure',
    value: '£3.2m',
    deadline: '2024-04-12',
    source: 'Bath & North East Somerset Council',
    category: 'Infrastructure',
    location: 'Bath',
    description: 'Design and installation of charging infrastructure for electric bus fleet',
    requirements: [
      'EV infrastructure experience',
      'Grid connection expertise',
      'Project management capability',
      'Health and safety accreditation'
    ],
    documents: ['Technical_Specification.pdf', 'Site_Plans.pdf', 'Power_Requirements.pdf'],
    timeline: '15 month installation'
  },

  // Northern Ireland opportunities
  {
    id: '20',
    title: 'Community Development Grants Administration',
    value: '£125k',
    deadline: '2024-03-23',
    source: 'Belfast City Council',
    category: 'Professional Services',
    location: 'Belfast',
    description: 'Administration of community grant programmes including assessment and monitoring',
    requirements: [
      'Grant administration experience',
      'Community sector knowledge',
      'Financial assessment skills',
      'Database management'
    ],
    documents: ['Service_Outline.pdf', 'Grant_Criteria.pdf', 'Process_Map.pdf'],
    timeline: '2 year contract'
  },

  // Framework agreements
  {
    id: '21',
    title: 'Legal Services Framework',
    value: '£5m',
    deadline: '2024-04-25',
    source: 'Crown Commercial Service',
    category: 'Legal',
    location: 'UK National',
    description: 'Multi-lot framework for legal services across all government departments',
    requirements: [
      'Solicitors Regulation Authority registered',
      'Relevant practice area expertise',
      'Government legal experience',
      'Information security standards'
    ],
    documents: ['Framework_Agreement.pdf', 'Lot_Descriptions.pdf', 'Terms_Conditions.pdf'],
    timeline: '4 year framework'
  },
  {
    id: '22',
    title: 'Facilities Management Services',
    value: '£15m',
    deadline: '2024-04-30',
    source: 'NHS Shared Business Services',
    category: 'Facilities Management',
    location: 'Multiple UK Locations',
    description: 'Total facilities management for NHS sites including maintenance and cleaning',
    requirements: [
      'NHS experience essential',
      'ISO certifications required',
      'TUPE experience',
      'National coverage capability'
    ],
    documents: ['FM_Specification.pdf', 'Site_Information.pdf', 'Performance_Standards.pdf'],
    timeline: '5 year contract'
  }
]

// Industry-specific opportunity filters
export function getOpportunitiesByCategory(category: string): Opportunity[] {
  return mockOpportunities.filter(opp => 
    opp.category.toLowerCase().includes(category.toLowerCase())
  )
}

// Location-based opportunity filters
export function getOpportunitiesByLocation(location: string): Opportunity[] {
  return mockOpportunities.filter(opp => 
    opp.location.toLowerCase().includes(location.toLowerCase()) ||
    opp.location.toLowerCase().includes('national') ||
    opp.location.toLowerCase().includes('multiple')
  )
}

// Value range filters
export function getOpportunitiesByValue(minValue: number, maxValue: number): Opportunity[] {
  return mockOpportunities.filter(opp => {
    const value = parseInt(opp.value.replace(/[£,km]/g, ''))
    const multiplier = opp.value.includes('k') ? 1000 : opp.value.includes('m') ? 1000000 : 1
    const actualValue = value * multiplier
    return actualValue >= minValue && actualValue <= maxValue
  })
}

// Deadline filters
export function getUpcomingOpportunities(days: number = 30): Opportunity[] {
  const futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + days)
  
  return mockOpportunities.filter(opp => {
    const deadline = new Date(opp.deadline)
    return deadline <= futureDate && deadline >= new Date()
  }).sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
}

// Search function
export function searchOpportunities(query: string): Opportunity[] {
  const searchTerm = query.toLowerCase()
  return mockOpportunities.filter(opp => 
    opp.title.toLowerCase().includes(searchTerm) ||
    opp.description.toLowerCase().includes(searchTerm) ||
    opp.category.toLowerCase().includes(searchTerm) ||
    opp.source.toLowerCase().includes(searchTerm) ||
    opp.location.toLowerCase().includes(searchTerm)
  )
}