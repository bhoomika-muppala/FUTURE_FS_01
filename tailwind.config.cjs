/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          300: '#b794f4',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#581c87',
          cyan: '#06b6d4',
          pink: '#ff4d6d'
        }
      },
      boxShadow: {
        'neon-sm': '0 2px 12px rgba(124,58,237,0.18)',
        'neon-md': '0 8px 30px rgba(124,58,237,0.25), 0 0 24px rgba(124,58,237,0.12)',
        'neon-xl': '0 20px 50px rgba(124,58,237,0.28), 0 0 40px rgba(124,58,237,0.18)'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0px rgba(124,58,237,0.0)' },
          '50%': { boxShadow: '0 0 32px rgba(124,58,237,0.45)' },
          '100%': { boxShadow: '0 0 6px rgba(124,58,237,0.18)' }
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'neon-glow': 'glow 2.5s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
