import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'], // v4 can also auto-detect, but explicit paths still work
  theme: {
    extend: {
      fontFamily: {
        comic: [
          '"Gloria Hallelujah"',
          'cursive',
          ...defaultTheme.fontFamily.sans,
        ],
        comic2: ['"Chewy"', 'cursive', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
