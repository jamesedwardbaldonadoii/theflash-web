module.exports = {
	theme: {
		extend: {
			transitionProperty: {
				'width': 'width',
				'left': 'left',
				'borderRadius': 'border-radius',
				'background': 'background',
			}
		},
	},
	variants: {
		width: ['responsive', 'focus'],
		borderRadius: ['hover']
	},
	plugins: [],
}
