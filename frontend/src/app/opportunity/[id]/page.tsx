import OpportunityDetailClient from './OpportunityDetailClient'

export async function generateStaticParams() {
  // Generate static paths for all demo opportunities
  return Array.from({ length: 22 }, (_, i) => ({ id: String(i + 1) }))
}

export default function OpportunityDetail({ params }: { params: { id: string } }) {
  return <OpportunityDetailClient params={params} />
}