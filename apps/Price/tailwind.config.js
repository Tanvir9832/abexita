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
          2: '#F5FFFA',
          3: '#F9F5FF',
          4: '#19525A',
          5: '#307D33',
        },
        secondary: {
          DEFAULT: '#595959',
          2: '#0089C9',
          3: '#ECECEC',
          4: '#475467',
          5: '#F5FFFD'
        },
        tertiary: {
          DEFAULT: '#ECFDF3',
          2: '#027A48',
          3: '#DC6803',
          4: '#101828',
          5: '#FDB022',
        },
        info: {
          DEFAULT: '#0D99FF',
          1: '#175CD3',
          2: '#F0F9FF',
          3: '#EFF8FF',
          4: '#016DA3',
        },
        dark: {
          DEFAULT: '#F2F4F7',
        },
      },
      screens: {},
    },
  },
  plugins: [],
};
