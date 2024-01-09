/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	sassOptions: {
		includesPaths: [path.join(__dirname, 'styles')],
		prependData: `@import "styles/_variables.scss";`,
	},
};

module.exports = nextConfig;
