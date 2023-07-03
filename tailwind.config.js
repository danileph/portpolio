/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ellipse-background-footer': 'url("/imgs/ellipse-background-footer.svg")',
        'ellipse-background-header': 'url("/imgs/ellipse-background-header.svg")',
        'arrow-3': 'url("/imgs/arrow-3.svg")',
        'arrow-3-ac': 'url("/imgs/arrow-3-ac.svg")',
        'chain': 'url("/imgs/chain.svg")',
        'chain-ac': 'url("/imgs/chain-active.svg")',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        lack: ['var(--font-lack)'],
      },
      colors: {
        white: '#DBE8D4',
        'white-secondary': 'rgba(219,232,212,0.8)',
        primary: '#73CCA7',
        'primary-tr': 'rgba(115,204,167,0.2)',
        'primary-light': 'rgb(142,153,157)',
        'primary-dark': '#525E65',
        'primary-dark-tr': 'rgba(82,94,101,0.8)',
        secondary: '#2E3445',
        'secondary-dark': '#222732',
        'secondary-dark-tr': 'rgba(34,39,50,0.8)',
        blue: '#465D80'
      },
    },
  },
  plugins: [],
}
