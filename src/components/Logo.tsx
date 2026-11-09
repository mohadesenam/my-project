import Link from 'next/link';

export default function Logo({ className = '', iconColor = 'text-white' }: { className?: string; iconColor?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="STRATECH home">
      {/* Geometric diamond/hexagon outline icon */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={iconColor} aria-hidden="true">
        <path
          d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 9L23 13V21L16 25L9 21V13L16 9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 9V25M9 13L23 21M23 13L9 21" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
      <span className="font-sans font-bold text-xl tracking-[0.15em] uppercase">STRATECH</span>
    </Link>
  );
}
