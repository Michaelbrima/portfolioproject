module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  presets: [
  [  
    'next/babel',
    {
      'preset-react': {
        runtime: 'automatic',
        importSource: '@emotion/react',
        throwIfNamespace: false,
      },
    },
  ],
],
  plugins: [
    '@emotion/babel-plugin',
  ],
}