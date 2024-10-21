/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html",'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			    bg: 'var(--background-1)',
				button1: 'var(--button-1)',
				button2: 'var(--button-2)',
				card1: 'var(--card-1)',
				color1: 'var(--color-1)',
				color2: 'var(--color-2)',
				color3: 'var(--color-3)',
				progressBar1: 'var(--progress-bar-1)',
			},
		  },
	},
	plugins: [],
}
