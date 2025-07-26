"use client";
export default function Whitepaper() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-500 to-green-300 font-sans text-white p-8">
            <h1 className="text-4xl font-extrabold gradient-text mb-6">AI Meme Protocol ($AIMP) Whitepaper</h1>
            <p className="mb-6 text-lg opacity-90">Welcome to the official whitepaper for AI Meme Protocol ($AIMP). This document outlines our vision, technology, tokenomics, and roadmap for building the future of MemeFi powered by AI.</p>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Introduction</h2>
              <p>$AIMP is a next-generation meme coin ecosystem leveraging artificial intelligence for meme creation, curation, and governance. Our mission is to empower the meme community with cutting-edge tools and fair, transparent governance.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Vision</h2>
              <ul className="list-disc pl-6">
                <li>Democratize meme creation with AI-powered tools</li>
                <li>Enable community-driven governance and rewards</li>
                <li>Foster a vibrant, creative, and inclusive MemeFi ecosystem</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Technology</h2>
              <ul className="list-disc pl-6">
                <li>AI Meme Factory: Generate, remix, and share memes using advanced AI models</li>
                <li>On-chain Governance: Degens vote and curate the future of MemeFi</li>
                <li>Secure Smart Contracts: Audited and transparent for maximum trust</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Tokenomics</h2>
              <ul className="list-disc pl-6">
                <li>Supply: 1,000,000,000 $AIMP</li>
                <li>Fair Launch: 100% distributed to the community</li>
                <li>Rewards: Meme creators and curators earn $AIMP</li>
                <li>Liquidity: Locked for maximum security</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Roadmap</h2>
              <ul className="list-disc pl-6">
                <li>Q3 2025: Launch & Fair Distribution</li>
                <li>Q4 2025: Meme Factory Beta</li>
                <li>Q1 2026: Governance Portal</li>
                <li>Q2 2026: NFT Integration</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Team & Community</h2>
              <p>Our team is committed to transparency and community engagement. Join us on Telegram, Discord, and Twitter to participate in the future of MemeFi.</p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold gradient-text mb-2">Security & Trust</h2>
              <ul className="list-disc pl-6">
                <li>Smart contract audits</li>
                <li>Liquidity locked</li>
                <li>Transparent team</li>
              </ul>
            </section>
            <footer className="text-center pt-8 text-sm opacity-80">
              <span>&copy; 2025 AI Meme Protocol ($AIMP). All rights reserved.</span>
            </footer>
            <style jsx>{`
              .glass-card {
                background: rgba(255, 255, 255, 0.18);
                backdrop-filter: blur(24px);
                border: 1px solid rgba(255, 255, 255, 0.25);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
              }
              .gradient-text {
                background: linear-gradient(90deg, #059669, #10b981, #34d399, #6ee7b7);
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                background-size: 200% 200%;
                animation: gradientShift 2.5s ease-in-out infinite;
              }
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
            `}</style>
    </div>
  );
}
