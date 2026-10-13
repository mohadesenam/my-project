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
          deep: '#0A1F5C',
          mid: '#0F2A7A',
          light: '#1B3A8C',
        },
        accent: {
          DEFAULT: '#1F5FD6',
          hover: '#3B7BF0',
        },
        ghost: '#F5F8FC',
        ink: {
          dark: '#0B1B3F',
          muted: '#6B7A99',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(10, 31, 92, 0.08)',
        'card-hover': '0 12px 40px rgba(10, 31, 92, 0.15)',
        glow: '0 0 30px rgba(31, 95, 214, 0.3)',
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
