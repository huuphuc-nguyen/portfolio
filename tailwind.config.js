/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        spread: {
          '0%': { width: '0px', padding: "0" },
          '100%': { width: '80%' },
        },
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slide_bot_in:{
          '0%': { transform: 'translateY(50%)', opacity: 0},
          '100%': { transform: 'translateY(0)', opacity: 1},
        },
        popup:{
          '0%': { transform: 'scale(0.5)', opacity: 0},
          '100%': { transform: 'scale(1)', opacity: 1},
        }
      },
      animation: {
        spread: 'spread 0.5s ease-in-out',
        fadein: 'fadein 0.2s ease-in-out 0.4s forwards',
        slide_bot_in: 'slide_bot_in 0.8s ease-in-out',
        popup: 'popup 0.5s ease-in-out forwards',
      },
      colors: {
        text_primary: 'var(--text-primary)',
        text_secondary: 'var(--text-secondary)',
        bg_primary: 'var(--bg-primary)',
        bg_secondary: 'var(--bg-secondary)',
      },
      scale:{
        '120': '1.2',
      }
    },
  },
  plugins: [],
}

