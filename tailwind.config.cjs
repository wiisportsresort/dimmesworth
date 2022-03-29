const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
const config = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: 'GT America',
      sans: 'GT America',
      mono: 'monospace',
    },
    colors: {
      transparent: '#00000000',
      white: '#ffffff',
      black: '#000000',
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      teal: colors.teal,
      emerald: colors.emerald,
      green: colors.green,
      lime: colors.lime,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange,
      red: colors.red,
      warmgray: colors.stone,
      truegray: colors.neutral,
      gray: colors.gray,
      coolgray: colors.gray,
      bluegray: colors.slate,
    },
  },
  plugins: [],
}

module.exports = config
