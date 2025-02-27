const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#19525A',
          2: '#0089C9',
          3: '#F87316',
          4: '#FAFAFA',
          5: '#D0D5DD',
          6: '#25646C'
        },
        secondary: {
          DEFAULT: '#595959',
          2: '#FF2323',
          3: '#282828',
          4: '#667085',
          5: '#475467'
        },
        tertiary: {
          DEFAULT: '#ECFDF3',
          2: '#027A48',
          3: '#DC6803',
          4: '#101828',
          5: '#FDB022'
        },
      },
      screens: {},
    },
  },
  plugins: [],
};
