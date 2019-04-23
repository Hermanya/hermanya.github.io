const breakpoints = ['40em', '52em', '64em', '80em'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
	breakpoints,
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	fonts: {
		sans: 'Ubuntu, system-ui, sans-serif',
		mono: `'Ubuntu Mono', monospace`
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	}
};
