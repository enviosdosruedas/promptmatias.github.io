import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        // New Custom Palette
        'persian_blue': { DEFAULT: '#072ac8', 100: '#010928', 200: '#031151', 300: '#041a79', 400: '#0622a1', 500: '#072ac8', 600: '#1740f7', 700: '#5170f9', 800: '#8b9ffb', 900: '#c5cffd' },
        'dodger_blue': { DEFAULT: '#1e96fc', 100: '#011e37', 200: '#023c6f', 300: '#035aa6', 400: '#0377dd', 500: '#1e96fc', 600: '#4aa9fc', 700: '#77bffd', 800: '#a5d4fe', 900: '#d2eafe' },
        'uranian_blue': { DEFAULT: '#a2d6f9', 100: '#05314e', 200: '#0a619b', 300: '#0f92e9', 400: '#56b5f4', 500: '#a2d6f9', 600: '#b6dffa', 700: '#c8e7fc', 800: '#dbeffd', 900: '#edf7fe' },
        'aureolin': { DEFAULT: '#fcf300', 100: '#323000', 200: '#646100', 300: '#969100', 400: '#c8c100', 500: '#fcf300', 600: '#fff82f', 700: '#fffa63', 800: '#fffc97', 900: '#fffdcb' },
        'mikado_yellow': { DEFAULT: '#ffc600', 100: '#332800', 200: '#665000', 300: '#997800', 400: '#cca000', 500: '#ffc600', 600: '#ffd333', 700: '#ffde66', 800: '#ffe999', 900: '#fff4cc' },

        // Shadcn UI Theme Colors (mapped from HSL variables)
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
