/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:
        'linear-gradient(to right, rgb(245, 100, 0) 0%, rgb(255, 0, 0) 25%, rgb(181, 0, 125) 50%, rgb(33, 66, 156) 75%, rgb(0, 113, 255) 100%)',
    },
  },
  daisyui: {
    themes: ['light'],
  },
  // plugins: [require('daisyui')],
};
