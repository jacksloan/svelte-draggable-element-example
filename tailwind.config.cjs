module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				peach: {
					darkest: '#f6a192',
					dark: '#f6b092',
					DEFAULT: '#f6c492',
					light: '#f6cf92',
					lightest: '#f6d992',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
		require('@tailwindcss/typography'),
	],
};
