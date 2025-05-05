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
        'royal-blue-traditional': { DEFAULT: '#00296b', 100: '#c5cffd', 200: '#8b9ffb', 300: '#5170f9', 400: '#1740f7', 500: '#00296b', 600: '#00225a', 700: '#001a48', 800: '#001337', 900: '#000b25' },
        'marian-blue': { DEFAULT: '#003f88', 100: '#cce0ff', 200: '#99c2ff', 300: '#66a3ff', 400: '#3385ff', 500: '#003f88', 600: '#00326d', 700: '#002552', 800: '#001837', 900: '#000c1c' }, // Added Marian Blue definition
        'polynesian-blue': { DEFAULT: '#00509d', 100: '#ccedff', 200: '#99daff', 300: '#66c6ff', 400: '#33b3ff', 500: '#00509d', 600: '#00407e', 700: '#00305e', 800: '#00203f', 900: '#00101f' },
        'mikado-yellow': { DEFAULT: '#fdc500', 100: '#fff4cc', 200: '#ffe999', 300: '#ffde66', 400: '#ffd333', 500: '#fdc500', 600: '#cca000', 700: '#997800', 800: '#665000', 900: '#332800' },
        'gold': { DEFAULT: '#ffd500', 100: '#fff7cc', 200: '#ffef99', 300: '#ffe666', 400: '#ffdd33', 500: '#ffd500', 600: '#ccaa00', 700: '#997f00', 800: '#665500', 900: '#332a00' }, // Added Gold definition


        // Shadcn UI Theme Colors (mapped from HSL variables in globals.css)
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
  				DEFAULT: 'hsl(var(--primary))', // Uses --primary from globals.css
  				foreground: 'hsl(var(--primary-foreground))' // Uses --primary-foreground from globals.css
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))', // Uses --secondary from globals.css
  				foreground: 'hsl(var(--secondary-foreground))' // Uses --secondary-foreground from globals.css
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))', // Uses --accent from globals.css
  				foreground: 'hsl(var(--accent-foreground))' // Uses --accent-foreground from globals.css
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
