import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy-deep relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      <div className="section-padding relative z-10 text-center">
        <h1 className="font-serif text-8xl lg:text-9xl font-light text-white mb-4">404</h1>
        <h2 className="font-serif text-2xl lg:text-3xl font-light text-white/80 mb-4">Page Not Found</h2>
        <p className="text-white/50 text-base max-w-md mx-auto mb-8">
          The page you&apos;re looking for seems to have been demolished. Let&apos;s get you back on solid ground.
        </p>
        <Link href="/" className="btn-primary">
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
