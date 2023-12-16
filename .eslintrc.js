/* eslint-disable prettier/prettier */
module.exports = {
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'import/no-unresolved': [2, { ignore: ['^@wordpress/', 'swiper'] }],
		'prettier/prettier': 0,
	},
}
