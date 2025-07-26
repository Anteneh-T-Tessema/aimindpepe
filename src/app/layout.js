import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#0f172a] via-[#059669] to-[#34d399] min-h-screen font-sans text-white`}>
        <header className="w-full py-6 px-8 md:px-20 flex justify-between items-center border-b border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="flex items-center gap-4">
            <Image src="/logo.jpeg" alt="AIMP Logo" width={48} height={48} className="rounded-full ai-glow" priority />
            <span className="text-2xl font-bold gradient-text">AI Meme Protocol ($AIMP)</span>
          </div>
          <nav className="flex gap-6 text-lg">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/whitepaper" className="nav-link">Whitepaper</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener" className="nav-link">Twitter</a>
            <a href="https://discord.com" target="_blank" rel="noopener" className="nav-link">Discord</a>
            <a href="https://t.me" target="_blank" rel="noopener" className="nav-link">Telegram</a>
          </nav>
        </header>
        <main className="w-full flex flex-col items-center justify-center">
          {children}
        </main>
        <footer className="w-full text-center py-8 text-sm opacity-80 border-t border-white/10 bg-white/5 backdrop-blur-lg mt-12">
          <span>&copy; 2025 AI Meme Protocol ($AIMP). All rights reserved.</span>
        </footer>
      </body>
    </html>
  );
}
