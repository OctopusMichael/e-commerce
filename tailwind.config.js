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
       /*  <!-- ### Primary --> */
        orange: 'hsl(26, 100%, 55%)',
        hoverOrange: 'hsla(39, 100%, 67%, 0.918)',
        paleOrange: 'hsl(25, 100%, 94%)',
       
      /*  <!-- ### Neutral --> */
       
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGray: 'hsl(219, 9%, 45%)',
        grayBlue: 'hsl(220, 14%, 75%)',
        lightGray:' hsl(223, 64%, 98%)',
        newWhite:' hsl(0, 0%, 100%)',
        darkContainer: 'hsla(0, 0%, 0%, 0.747)',
      },
    },
  },
  plugins: [],
};
