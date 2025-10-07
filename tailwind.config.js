/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#6366F1', // Indigo
        'secondary': '#8B5CF6', // Purple
        'accent': '#F472B6', // Pink
        'deep-bg': '#0F172A', // Slate 900
        'surface': '#1E293B', // Slate 800
        'text-primary': '#F8FAFC', // Slate 50
        'text-secondary': '#CBD5E1', // Slate 300
        'highlight': '#38BDF8', // Sky 400
      },
      animation: {
        'float-rotate': 'float-rotate 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'cyber-glitch': 'cyber-glitch 3s infinite linear alternate-reverse',
        'aurora-wave': 'aurora-wave 15s ease infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-elegant': 'linear-gradient(45deg, #6366F1, #8B5CF6)',
      },
    },
  },
  plugins: [],
};