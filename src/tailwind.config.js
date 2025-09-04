/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',

        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        success: 'hsl(var(--success))',
        'success-foreground': 'hsl(var(--success-foreground))',

        'muted-foreground': 'var(--muted-foreground)',

        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',

        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',

        ring: 'var(--ring)',
        input: 'var(--input)',
        border: 'var(--input)',
      },
    },
  },
  plugins: [],
}
