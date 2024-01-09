/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
	sassOptions: {
		includesPaths: [path.join(__dirname, 'styles')],
	},
};

module.exports = nextConfig;
