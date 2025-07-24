/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#8B5CF6",
        accent: "#EC4899",
        surface: "#F9FAFB",
        error: "#EF4444",
        warning: "#F59E0B",
        success: "#10B981",
        info: "#3B82F6"
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5B21B6 0%, #EC4899 100%)',
        'gradient-surface': 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}