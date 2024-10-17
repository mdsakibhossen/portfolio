/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        secondary: {
          50: '#fdeaf4',
          100: '#fad5e8',
          200: '#f5aad0',
          300: '#f07fb9',
          400: '#da2777', // Main secondary color
          500: '#b41b60',
          600: '#8d144b',
          700: '#660e36',
          800: '#3f0821',
          900: '#19030c',
        },
        primary: {
          50: '#f3f3f6',    // Lightest shade
          100: '#e8e8ed',   // Very light
          200: '#c5c6d2',   // Light
          300: '#9d9fb2',   // Lighter
          400: '#28293E',   // Mid-tone (Your provided #28293E)
          500: '#232437',   // Slightly darker
          600: '#1e1f30',   // Dark
          700: '#191a28',   // Darker
          800: '#131421',   // Very dark
          900: '#0d0d19',   // Almost black
        },
        // secondary: {
        //   50: '#fff5e6',    // Very light pastel orange (complementary to the dark background)
        //   100: '#ffe8cc',   // Light peach
        //   200: '#ffdbb3',   // Lighter peach
        //   300: '#ffcd99',   // Light orange
        //   400: '#ffb266',   // Mid-tone (complementary orange to contrast the dark bg)
        //   500: '#e69959',   // Slightly darker orange
        //   600: '#cc804d',   // Dark orange
        //   700: '#b36640',   // Darker shade
        //   800: '#995233',   // Even darker
        //   900: '#66351f',   // Very dark brownish-orange
        // },

      },
    },
  },
  plugins: [],
  darkMode: "class",
};
