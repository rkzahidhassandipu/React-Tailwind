/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'Black': '#1e2832',
        'primayBG': '#1e28320d'
      },
      backgroundColor: {
        'primay': '#1e28320d'
      },
      backgroundImage: {
        'Banner': "url('../../../public/brand-banner.png)",
      },
      fontFamily: {
        'primay': ["Roboto", 'sans-serif']
      },
    },
  },
  plugins: [],
}

