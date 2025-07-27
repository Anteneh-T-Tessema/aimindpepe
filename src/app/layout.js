import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Particles from "../components/Particles";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Meme Protocol ($AIMP) - The Future of MemeFi",
  description: "AI Meme Protocol ($AIMP) is the future of MemeFi. Powered by AI, governed by degens, and built for the meme community.",
  keywords: "AIMP, MemeFi, AI, Meme Coin, Crypto, Pepe, NFT, Degen, Tokenomics, Meme Factory",
  openGraph: {
    title: "AI Meme Protocol ($AIMP) - The Future of MemeFi",
    description: "AI Meme Protocol ($AIMP) is the future of MemeFi. Powered by AI, governed by degens, and built for the meme community.",
    images: ["/logo.jpeg"],
    url: "https://pink.meme",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Meme Protocol ($AIMP) - The Future of MemeFi",
    description: "AI Meme Protocol ($AIMP) is the future of MemeFi. Powered by AI, governed by degens, and built for the meme community.",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/64b7e6b094cf5d49dc6e7b7a/1h6g7gq2g';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans text-white animate-gradient-move`} style={{background: "linear-gradient(120deg, #0f172a 0%, #059669 50%, #34d399 100%)", backgroundSize: "400% 400%"}}>
        {/* Animated Particles Background */}
        <Particles />
        <header className="w-full py-6 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center border-b border-white/10 glass-header relative animate-fade-in">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image src="/logo.jpeg" alt="AIMP Logo" width={48} height={48} className="rounded-full ai-glow" priority />
            <span className="text-2xl font-bold gradient-text">AI Meme Protocol ($AIMP)</span>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden absolute right-8 top-8 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
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
          <nav
            className={`flex gap-6 text-lg flex-wrap md:static md:flex-row md:items-center md:bg-transparent md:shadow-none md:p-0 md:opacity-100
              ${menuOpen ? "fixed top-0 left-0 w-full h-full bg-[#0f172a]/95 flex flex-col items-center justify-center z-10 shadow-2xl p-8 opacity-100" : "hidden md:flex"}`}
            aria-label="Site Sections"
          >
            <Link href="/" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Home">Home</Link>
            <Link href="/whitepaper" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Whitepaper">Whitepaper</Link>
            <Link href="/contact" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Contact">Contact</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Twitter">Twitter</a>
            <a href="https://discord.com" target="_blank" rel="noopener" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Discord">Discord</a>
            <a href="https://t.me" target="_blank" rel="noopener" className="nav-link focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400" aria-label="Telegram">Telegram</a>
          </nav>
        </header>
        <main className="w-full flex flex-col items-center justify-center animate-section-reveal">
          {children}
        </main>
        <footer className="w-full text-center py-8 text-sm opacity-80 border-t border-white/10 glass-footer mt-12 animate-fade-in flex flex-col items-center gap-4">
          <span className="gradient-text drop-shadow-lg">&copy; 2025 AI Meme Protocol ($AIMP). All rights reserved.</span>
          <div className="flex gap-6 justify-center mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Share on Twitter" className="social-btn hover:scale-110"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c13 8 27-7 17-16z"/></svg></a>
            <a href="https://discord.com" target="_blank" rel="noopener" aria-label="Join Discord" className="social-btn hover:scale-110"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5865F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20H4V4h16v16z"/><circle cx="9" cy="10" r="2"/><circle cx="15" cy="10" r="2"/><path d="M9 16s1.5 1 3 1 3-1 3-1"/></svg></a>
            <a href="https://t.me" target="_blank" rel="noopener" aria-label="Join Telegram" className="social-btn hover:scale-110"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg></a>
          </div>
        </footer>
        {/* Floating CTA Button */}
        <a href="/contact" className="fixed bottom-8 right-8 z-50 modern-cta glass-cta px-6 py-3 rounded-full font-bold shadow-lg animate-fade-in hover:scale-105" aria-label="Contact Us">Contact Us</a>
      <style>{`
        .animate-section-reveal {
          animation: sectionReveal 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes sectionReveal {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.12);
          border-radius: 50%;
          width: 48px;
          height: 48px;
          transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s;
          box-shadow: 0 2px 8px rgba(52,211,153,0.12);
        }
        .social-btn:hover {
          box-shadow: 0 4px 16px rgba(52,211,153,0.18);
        }
      `}</style>
      <style>{`
        .glass-header, .glass-footer {
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(52,211,153,0.18);
          border-radius: 18px;
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
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      </body>
    </html>
  );
}
