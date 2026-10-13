import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#071B3D',
          mid: '#0B2854',
          light: '#1769C2',
        },
        accent: {
          DEFAULT: '#1769C2',
          hover: '#3989E8',
        },
        bright: '#3989E8',
        ghost: '#F4F7FB',
        ink: {
          dark: '#10213B',
          muted: '#5A6B85',
          secondary: '#AAB9CF',
        },
        'border-subtle': '#DCE5F0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(7, 27, 61, 0.08)',
        'card-hover': '0 12px 40px rgba(7, 27, 61, 0.15)',
        glow: '0 0 30px rgba(23, 105, 194, 0.3)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
