
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Manrope', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0B1220', // Near-black ink navy
					foreground: '#FFFFFF',
					50: '#F5F7FA',
					100: '#E6E9F0',
					200: '#C9D0DE',
					300: '#A3AEC4',
					400: '#7885A3',
					500: '#56628A',
					600: '#3F4A6E',
					700: '#2C3552',
					800: '#1A2036',
					900: '#0B1220',
					950: '#05070D',
				},
				secondary: {
					DEFAULT: '#4F6BFF', // Premium indigo-blue accent
					foreground: '#FFFFFF',
					50: '#EEF1FF',
					100: '#DFE4FF',
					200: '#C0C9FF',
					300: '#9BA8FF',
					400: '#7686FF',
					500: '#4F6BFF',
					600: '#3B52DB',
					700: '#2C3EAD',
					800: '#212F80',
					900: '#171F56',
				},
				accent: {
					DEFAULT: '#8B5CF6', // Violet gradient companion
					foreground: '#FFFFFF',
					50: '#F5F1FF',
					100: '#EBE3FE',
					200: '#D3C2FC',
					300: '#B599F9',
					400: '#9D75F7',
					500: '#8B5CF6',
					600: '#6D3FD6',
					700: '#5730A8',
					800: '#3F2279',
					900: '#2A1752',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 8px)',
				xl: 'calc(var(--radius) + 4px)',
				'2xl': 'calc(var(--radius) + 10px)',
			},
			boxShadow: {
				soft: '0 2px 8px -2px rgba(11, 18, 32, 0.06), 0 1px 2px -1px rgba(11, 18, 32, 0.04)',
				premium: '0 12px 40px -12px rgba(11, 18, 32, 0.18), 0 4px 12px -4px rgba(11, 18, 32, 0.08)',
				'premium-lg': '0 24px 64px -16px rgba(11, 18, 32, 0.24), 0 8px 24px -8px rgba(11, 18, 32, 0.1)',
				glow: '0 0 0 1px rgba(79, 107, 255, 0.15), 0 8px 30px -6px rgba(79, 107, 255, 0.35)',
				'glow-violet': '0 0 0 1px rgba(139, 92, 246, 0.15), 0 8px 30px -6px rgba(139, 92, 246, 0.35)',
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
				"fade-in": {
					from: { opacity: "0", transform: "translateY(20px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in-right": {
					from: { opacity: "0", transform: "translateX(20px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				"fade-up": {
					from: { opacity: "0", transform: "translateY(24px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"scale-in": {
					from: { opacity: "0", transform: "scale(0.94)" },
					to: { opacity: "1", transform: "scale(1)" },
				},
				"gradient-x": {
					"0%, 100%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				shimmer: {
					from: { backgroundPosition: "-200% 0" },
					to: { backgroundPosition: "200% 0" },
				},
				"ripple": {
					"0%": { transform: "scale(0)", opacity: "0.5" },
					"100%": { transform: "scale(2.5)", opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-in-right": "fade-in-right 0.5s ease-out forwards",
				"fade-up": "fade-up 0.7s cubic-bezier(.2,.8,.2,1) forwards",
				"scale-in": "scale-in 0.4s cubic-bezier(.2,.8,.2,1) forwards",
				"gradient-x": "gradient-x 6s ease infinite",
				float: "float 6s ease-in-out infinite",
				shimmer: "shimmer 2s linear infinite",
				ripple: "ripple 0.6s ease-out",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(115deg, var(--tw-gradient-stops))',
				shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
			},
			backgroundSize: {
				'200': '200% 200%',
			},
			transitionTimingFunction: {
				premium: 'cubic-bezier(.2,.8,.2,1)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
