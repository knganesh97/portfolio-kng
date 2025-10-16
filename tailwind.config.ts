import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import typography from "@tailwindcss/typography"

const config: Config = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Warm burnt orange palette - vintage showgirl aesthetic
        'custom-orange': {
          50: '#fef9f3',
          100: '#fdeee0',
          200: '#fad9ba',
          300: '#f6bc85',
          400: '#f19654',
          500: '#e87636',
          600: '#d15a28',
          700: '#ad4623',
          800: '#8b3824',
          900: '#702f20',
          950: '#3d160e',
        },
        // Sage/olive green palette - muted and vintage
        'custom-green': {
          50: '#f5f7f1',
          100: '#e8ede0',
          200: '#d2dcc2',
          300: '#b2c399',
          400: '#90a871',
          500: '#748c55',
          600: '#5a6f42',
          700: '#475737',
          800: '#3a462f',
          900: '#323c29',
          950: '#1a2116',
        },
        // Warm teal/emerald palette for accents
        'custom-emerald': {
          50: '#f0f8f5',
          100: '#dbeee6',
          200: '#b9ddd0',
          300: '#8ec6b3',
          400: '#63aa94',
          500: '#498d78',
          600: '#387161',
          700: '#2f5b4f',
          800: '#294941',
          900: '#243d36',
          950: '#12231f',
        },
        
        // CSS variable based colors - removed hsl() wrapper
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        header: {
          bg: "var(--header-bg)",
          border: "var(--header-border)",
          title: "var(--header-title)",
          link: "var(--header-link)",
          "link-hover": "var(--header-link-hover)",
          "link-bg-hover": "var(--header-link-bg-hover)",
        },
        footer: {
          bg: "var(--footer-bg)",
          text: "var(--footer-text)",
          border: "var(--footer-border)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'hsl(var(--foreground))',
            h1: {
              color: 'hsl(var(--foreground))',
            },
            h2: {
              color: 'hsl(var(--foreground))',
            },
            h3: {
              color: 'hsl(var(--foreground))',
            },
            h4: {
              color: 'hsl(var(--foreground))',
            },
            p: {
              color: 'hsl(var(--muted-foreground))',
            },
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
              },
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--muted))',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--border))',
            },
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
}

export default config