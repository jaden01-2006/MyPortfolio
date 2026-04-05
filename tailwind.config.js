/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-pink': {
          DEFAULT: '#F06292', // The main professional accent pink from the hero title
          'light': '#FFE8EF', // Light background pink for project cards and highlights
          'dark': '#D81B60',  // Darker, high-contrast pink for text on lighter backgrounds
        },
        'portfolio-bg': '#F9F9FB', // The exact cool grey-white background seen in the photo
        'portfolio-card-bg': '#FFFFFF', // Clean white background for cards
        'portfolio-text': {
          DEFAULT: '#333333', // Primary dark text for headings and bold text
          'muted': '#666666', // Secondary medium grey for descriptions and sub-text
          'card': '#2E2E2E',  // Specific text color used inside cards for readability
        }
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Professional sans-serif stack
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0,0,0,0.05)', // Standard professional soft shadow seen on cards
      },
      borderRadius: {
        'card': '12px', // The precise curve for cards and buttons from the reference
      }
    },
  },
  plugins: [],
}