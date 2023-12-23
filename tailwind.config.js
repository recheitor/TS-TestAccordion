/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
