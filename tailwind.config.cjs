const Prism = require("./src/css/prism.cjs");

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],

	theme: {
		spacing: {
			0: '0',
			unit: 'var(--unit)',
			1: 'calc(var(--unit) * 1)',
			2: 'calc(var(--unit) * 2)',
			3: 'calc(var(--unit) * 3)',
			4: 'calc(var(--unit) * 4)',
			'1cw': 'calc(var(--cell-w) * 1)',
			'1ch': 'calc(var(--cell-h) * 1)',
			'2cw': 'calc(var(--cell-w) * 2)',
			'2ch': 'calc(var(--cell-h) * 2)',
			'3cw': 'calc(var(--cell-w) * 3)',
			'3ch': 'calc(var(--cell-h) * 3)',
			'4cw': 'calc(var(--cell-w) * 4)',
			'4ch': 'calc(var(--cell-h) * 4)',
		},
		colors: {
      transparent: 'transparent',
			current: 'currentColor',
			gray: "#808080",
			'white': '#ffffff',
			'black': "#000000",
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
		},
		di: {
			type: {
				h1: {

				}
			},
			themes: {
				theme1: {
					bg: ['metal', 'tahiti'],
					content: ['white', 'silver', 'bubble-gum']
				}
			}
		},
		extend: {}
	},

	plugins: [
		Prism
	]
};

module.exports = config;
