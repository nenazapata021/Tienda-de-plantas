/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Instrument Serif', 'serif'],
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#fdfcf8',
        sage: '#e8ede6',
      },
      borderRadius: {
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08), 0 4px 12px -2px rgba(0,0,0,0.05)',
        'soft-lg': '0 20px 60px -15px rgba(0,0,0,0.12), 0 8px 20px -4px rgba(0,0,0,0.06)',
        'glow': '0 0 40px rgba(16,185,129,0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
