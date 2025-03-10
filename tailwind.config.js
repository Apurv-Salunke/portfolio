/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'foreground': 'var(--foreground)',
        'card-foreground': 'var(--card-foreground)',
        'muted-foreground': 'var(--muted-foreground)',
      },
      backgroundColor: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'background': 'var(--background)',
        'card': 'var(--card)',
        'muted': 'var(--muted)',
      },
      borderColor: {
        'primary': 'var(--primary)',
        'border': 'var(--border)',
      },
    },
  },
  plugins: [],
} 