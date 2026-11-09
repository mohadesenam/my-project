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
          deep: '#071A3A',
          mid: '#0B2854',
          panel: '#102D59',
          light: '#1769C2',
        },
        accent: {
          DEFAULT: '#1769C2',
          hover: '#3989E8',
        },
        bright: '#3989E8',
        ghost: '#F5F6FA',
        ink: {
          dark: '#111D35',
          muted: '#6C757D',
          secondary: '#AEBBD0',
        },
        'border-subtle': '#DCE5F0',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        card: '0 2px 16px rgba(7, 26, 58, 0.06)',
        'card-hover': '0 8px 30px rgba(7, 26, 58, 0.12)',
        glow: '0 0 24px rgba(23, 105, 194, 0.25)',
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
