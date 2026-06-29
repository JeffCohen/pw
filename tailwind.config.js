/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7566ac',
          text: '#645590',
          dark: '#574a82',
          light: '#f3f1f8',
          soft: '#b3a6e0',
        },
      },
      fontFamily: {
        serif: ['Bitter', 'Georgia', 'serif'],
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      // Whole type scale shifted up one step site-wide.
      fontSize: {
        xs: ['0.875rem', '1.25rem'],
        sm: ['1rem', '1.5rem'],
        base: ['1.125rem', '1.75rem'],
        lg: ['1.25rem', '1.75rem'],
        xl: ['1.5rem', '2rem'],
        '2xl': ['1.875rem', '2.25rem'],
        '3xl': ['2.25rem', '2.5rem'],
        '4xl': ['3rem', '1'],
      },
    },
  },
};
