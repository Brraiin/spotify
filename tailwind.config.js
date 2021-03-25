module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
			},
			colors: {
				background: {
					gray: '#121212',
					lightgray: '#181818',
					extralightgray: '#212121',
					highlight: '#282828',
					turquoise: '#4f746e',
				},
			},	  
		},
	},
	variants: {
		extend: {
			margin: ['group-hover'],
			width: ['last'],
			position: ['group-hover'],
			ringColor: ['hover'],
		},
	},
	plugins: [
	],
};
