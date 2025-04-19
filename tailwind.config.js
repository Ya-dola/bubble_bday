/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'], // v4 can also auto-detect, but explicit paths still work
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Your Google Font"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
