const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// const prism = require("@dynamicimage/prism")
const prism = require("../dynamicimage/prism/dist/index")
const postcssNesting = require("postcss-nesting");

const config = {
	plugins: [
		prism(),
		postcssNesting(),
		tailwindcss(),
		autoprefixer
	]
};

module.exports = config;
