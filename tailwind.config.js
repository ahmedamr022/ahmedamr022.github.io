export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#06060e',
        ink2: '#0c0c1a',
        brand: {
          cyan: '#00d4ff',
          violet: '#7c3aed',
          pink: '#ec4899',
        },
        body: {
          primary: '#e8edf5',
          secondary: '#8892a8',
          muted: '#4a5068',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
}
