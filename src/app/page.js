"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

// Mobile menu state
function useMobileMenu() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return [open, toggle];
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, className }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span className={className}>{count.toLocaleString()}</span>;
}

const partners = [
  { name: "Uniswap", logo: "/uniswap.svg", url: "https://uniswap.org" },
  { name: "CoinGecko", logo: "/coingecko.svg", url: "https://coingecko.com" },
  { name: "Dextools", logo: "/dextools.svg", url: "https://dextools.io" },
];

export default function Home() {
  const [menuOpen, toggleMenu] = useMobileMenu();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#059669] to-[#34d399] animate-gradient-move font-sans text-white">
      <header className="relative flex flex-col md:flex-row justify-between items-center py-6 px-8 md:px-20" aria-label="Main Navigation">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <Image src="/logo.jpeg" alt="AIMP Logo - Home" width={64} height={64} className="ai-glow rounded-full" priority />
          <span className="text-2xl font-bold gradient-text">AI Meme Protocol ($AIMP)</span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden absolute right-8 top-8 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <span className="block w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-emerald-400">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </span>
        </button>
        {/* Navigation */}
        <nav
          className={`flex gap-6 text-lg flex-wrap md:static md:flex-row md:items-center md:bg-transparent md:shadow-none md:p-0 md:opacity-100
            ${menuOpen ? "fixed top-0 left-0 w-full h-full bg-[#0f172a]/95 flex flex-col items-center justify-center z-10 shadow-2xl p-8 opacity-100" : "hidden md:flex"}`}
          aria-label="Site Sections"
        >
          <a href="#about" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="About section">About</a>
          <a href="#features" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Features section">Features</a>
          <a href="#roadmap" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Roadmap section">Roadmap</a>
          <a href="#tokenomics" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Tokenomics section">Tokenomics</a>
          <Link href="/whitepaper" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Whitepaper">Whitepaper</Link>
          {/* Social Links */}
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"><span role="img" aria-label="Twitter">🐦</span></a>
          <a href="https://discord.com" target="_blank" rel="noopener" aria-label="Discord" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"><span role="img" aria-label="Discord">💬</span></a>
          <a href="https://t.me" target="_blank" rel="noopener" aria-label="Telegram" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"><span role="img" aria-label="Telegram">📢</span></a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center px-4 md:px-0">
        {/* Animated Hero Section - Enhanced Visuals */}
        <section className="relative text-center mt-12 mb-8 overflow-hidden">
          {/* Animated gradient background with glassmorphism overlay */}
          <div className="absolute inset-0 pointer-events-none animate-pulse-slow" aria-hidden="true" style={{zIndex:0}}>
            <div className="w-full h-full bg-gradient-to-r from-[#059669]/40 via-[#34d399]/30 to-transparent blur-3xl" />
            <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-white/10 rounded-full blur-2xl opacity-40" />
          </div>
          <div className="mx-auto mb-6 relative z-10 flex flex-col items-center">
            <div className="glass-logo-card p-4 rounded-full shadow-xl">
              <Image src="/logo.jpeg" alt="AIMP Logo - Hero" width={128} height={128} className="ai-glow" priority />
            </div>
            <span className="meme-badge mt-4">#MemeFi #AI #Crypto</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold gradient-text mb-6 relative z-10 drop-shadow-lg">The Future of MemeFi</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 relative z-10 opacity-90">Powered by AI, governed by degens, and built for the meme community.</p>
          {/* CTA Buttons - Modern glass style */}
          <div className="flex flex-wrap gap-8 justify-center mt-8 relative z-10">
            <a href="https://t.me" target="_blank" rel="noopener" className="modern-cta glass-cta focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400" aria-label="Join Telegram">Join Community</a>
            <a href="https://uniswap.org" target="_blank" rel="noopener" className="modern-cta glass-cta focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400" aria-label="Buy $AIMP">Buy $AIMP</a>
            <a href="#features" className="modern-cta glass-cta focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400" aria-label="Explore Features">Explore Features</a>
          </div>
          {/* Animated Stats - Enhanced cards */}
          <div className="flex flex-wrap gap-10 justify-center mt-12 relative z-10">
            <div className="stats-card glass-card flex flex-col items-center p-6 rounded-2xl shadow-lg">
              <AnimatedCounter end={12500} duration={1800} className="stats-counter text-4xl font-extrabold gradient-text" />
              <span className="mt-2 text-base font-semibold">Holders</span>
            </div>
            <div className="stats-card glass-card flex flex-col items-center p-6 rounded-2xl shadow-lg">
              <AnimatedCounter end={32000} duration={2000} className="stats-counter text-4xl font-extrabold gradient-text" />
              <span className="mt-2 text-base font-semibold">Memes Created</span>
            </div>
            <div className="stats-card glass-card flex flex-col items-center p-6 rounded-2xl shadow-lg">
              <AnimatedCounter end={5000000} duration={2200} className="stats-counter text-4xl font-extrabold gradient-text" />
              <span className="mt-2 text-base font-semibold">Market Cap ($)</span>
            </div>
          </div>
          {/* Partner Logos - Modern glass cards with hover effect */}
          <div className="flex flex-wrap gap-10 justify-center items-center mt-14 relative z-10" aria-label="Partners">
            {partners.map(partner => (
              <a key={partner.name} href={partner.url} target="_blank" rel="noopener" aria-label={partner.name} className="partner-card glass-card p-4 rounded-2xl shadow-lg hover:scale-105 hover:bg-white/30 transition-all duration-300 flex items-center justify-center">
                <Image src={partner.logo} alt={partner.name + ' logo'} width={100} height={40} className="drop-shadow-lg" />
              </a>
            ))}
          </div>
        </section>
        <section id="about" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 gradient-text">About $AIMP</h2>
          <p className="mb-2">AI Meme Protocol ($AIMP) is a next-gen meme coin ecosystem leveraging AI for meme creation, curation, and governance. Join the revolution!</p>
        </section>
        <section id="features" className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="ai-feature">
            <div className="ai-icon">🤖</div>
            <h3 className="font-bold text-xl mb-2">AI-Powered Meme Factory</h3>
            <p>Generate, remix, and share memes with cutting-edge AI tools.</p>
          </div>
          <div className="ai-feature">
            <div className="ai-icon">🧑‍🤝‍🧑</div>
            <h3 className="font-bold text-xl mb-2">Community Governance</h3>
            <p>Degens vote, curate, and steer the future of MemeFi.</p>
          </div>
          <div className="ai-feature">
            <div className="ai-icon">💸</div>
            <h3 className="font-bold text-xl mb-2">Tokenomics</h3>
            <p>Fair launch, meme rewards, and sustainable growth.</p>
          </div>
        </section>
        <section id="roadmap" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Roadmap</h2>
          <ul className="list-disc pl-6">
            <li>Q3 2025: Launch & Fair Distribution</li>
            <li>Q4 2025: Meme Factory Beta</li>
            <li>Q1 2026: Governance Portal</li>
            <li>Q2 2026: NFT Integration</li>
          </ul>
        </section>
        <section id="tokenomics" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 gradient-text">Tokenomics</h2>
          <ul className="list-disc pl-6">
            <li>Supply: 1,000,000,000 $AIMP</li>
            <li>Fair Launch: 100%</li>
            <li>Rewards: Meme creators & curators</li>
            <li>Liquidity: Locked</li>
          </ul>
        </section>
      </main>
      {/* FAQ Section */}
      <section id="faq" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12 mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
        <ul className="space-y-4 text-left">
          <li>
            <strong>What is $AIMP?</strong>
            <p>AI Meme Protocol ($AIMP) is a meme coin ecosystem powered by AI and governed by the community.</p>
          </li>
          <li>
            <strong>How do I buy $AIMP?</strong>
            <p>You can buy $AIMP on Uniswap and other supported exchanges.</p>
          </li>
          <li>
            <strong>Is liquidity locked?</strong>
            <p>Yes, liquidity is locked for maximum trust and security.</p>
          </li>
          <li>
            <strong>How can I join the community?</strong>
            <p>Join us on Telegram, Discord, and Twitter for updates and discussions.</p>
          </li>
        </ul>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12 mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Community Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-lg">
            &quot;AIMP is the most fun and innovative meme coin I&apos;ve ever seen! The AI features are next level.&quot; <br />
            <span className="text-sm font-bold">- @MemeDegen</span>
          </blockquote>
          <blockquote className="border-l-4 border-green-400 pl-4 italic text-lg">
            &quot;The community is amazing and the roadmap is ambitious. I&apos;m here for the long run!&quot; <br />
            <span className="text-sm font-bold">- @CryptoPepe</span>
          </blockquote>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="glass-card p-8 rounded-2xl shadow-lg max-w-3xl w-full mb-12 mx-auto">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Meet the Team</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image src="/team.svg" alt="Project Team" width={48} height={48} />
            <span className="font-semibold text-lg">AI Engineers, Cryptocurrency & Blockchain Experts</span>
          </div>
          <p className="mt-2">Our dedicated team is working to bring together the best of AI and blockchain. We are actively developing Bitcoin L2 projects and pioneering Quantum Secured Crypto AI solutions for the future of secure, scalable, and intelligent finance.</p>
        </div>
      </section>
      {/* Trust Signals Section */}
      <section id="trust" className="flex flex-wrap gap-8 justify-center items-center mb-12">
        <div className="flex flex-col items-center">
          <Image src="/audit.svg" alt="Audit Badge" width={48} height={48} />
          <span className="mt-2 text-base">Audited</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/lock.svg" alt="Liquidity Locked" width={48} height={48} />
          <span className="mt-2 text-base">Liquidity Locked</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/team.svg" alt="Transparent Team" width={48} height={48} />
          <span className="mt-2 text-base">Transparent Team</span>
        </div>
      </section>
      <footer className="text-center py-8 text-sm opacity-80">
        <span>&copy; 2025 AI Meme Protocol ($AIMP). All rights reserved.</span>
      </footer>
      <style jsx>{`
        .ai-glow {
          box-shadow: 0 0 60px 20px #10b981, 0 0 120px 40px #34d399;
          border-radius: 50%;
          animation: aiGlow 3s ease-in-out infinite alternate;
        }
        .glass-logo-card {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255,255,255,0.25);
          box-shadow: 0 8px 32px rgba(52,211,153,0.18);
        }
        .stats-card {
          min-width: 160px;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .stats-card:hover {
          transform: scale(1.06) translateY(-2px);
          box-shadow: 0 12px 40px rgba(16,185,129,0.25);
        }
        .partner-card {
          min-width: 120px;
          min-height: 60px;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .partner-card:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 16px 48px rgba(52,211,153,0.25);
        }
        @keyframes aiGlow {
          0% { box-shadow: 0 0 60px 20px #10b981, 0 0 120px 40px #34d399; }
          100% { box-shadow: 0 0 120px 60px #059669, 0 0 180px 80px #6ee7b7; }
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
        .animate-gradient-move {
          background-size: 400% 400%;
          animation: gradientMove 12s ease-in-out infinite;
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .meme-badge {
          background: linear-gradient(45deg, #f59e0b, #f97316);
          color: white;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px #f59e0b; }
          50% { box-shadow: 0 0 24px #f97316; }
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
        }
        .ai-feature {
          background: linear-gradient(120deg, #059669 0%, #34d399 100%);
          color: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(52, 211, 153, 0.18);
          padding: 32px 24px;
          margin: 16px 0;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .ai-feature:hover {
          transform: scale(1.04) translateY(-4px);
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.25);
        }
        .ai-icon {
          font-size: 3rem;
          margin-bottom: 12px;
          filter: drop-shadow(0 0 8px #34d399);
        }
        .nav-link {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #10b981;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }
        .nav-link:hover, .nav-link.active {
          color: #10b981;
          transform: translateY(-2px);
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .modern-cta {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
          background: linear-gradient(90deg, #059669, #10b981, #34d399);
          color: white;
          box-shadow: 0 4px 24px rgba(16,185,129,0.2);
          position: relative;
          overflow: hidden;
        }
        .modern-cta:hover {
          background: linear-gradient(90deg, #34d399, #10b981, #059669);
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 8px 32px rgba(16,185,129,0.25);
        }
        .glass-cta {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.18);
        }
      `}</style>
    </div>
  );
}
