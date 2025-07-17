export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            UK GovWatch Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Never miss a UK government contract, grant, or opportunity again.
            We monitor 350+ sources including all local councils.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/demo" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block">
              Try Live Demo
            </a>
            <a href="#features" className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Complete UK Opportunity Discovery
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">350+ Sources</h3>
              <p className="text-gray-600">
                We monitor national databases and all 300+ local councils
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
              <p className="text-gray-600">
                AI matches opportunities to your business profile and capabilities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Alerts</h3>
              <p className="text-gray-600">
                Get instant notifications for relevant opportunities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">350+</div>
              <div className="text-gray-600">UK Sources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">£8.4B</div>
              <div className="text-gray-600">Opportunities Found</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">2,847</div>
              <div className="text-gray-600">Active Contracts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">312</div>
              <div className="text-gray-600">Local Councils</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Finding Opportunities Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join businesses winning more government contracts
          </p>
          <a href="/demo" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Try Demo Now
          </a>
        </div>
      </div>
    </main>
  )
}