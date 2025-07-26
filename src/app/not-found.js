import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-500 to-green-300 font-sans text-white p-8">
      <h1 className="text-5xl font-extrabold gradient-text mb-6">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="modern-cta">Go Home</Link>
    </div>
  );
}
