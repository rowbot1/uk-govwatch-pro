import OpportunityDetailClient from './OpportunityDetailClient'

export async function generateStaticParams() {
  // Generate static paths for demo opportunities
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ]
}

export default function OpportunityDetail({ params }: { params: { id: string } }) {
  return <OpportunityDetailClient params={params} />
}