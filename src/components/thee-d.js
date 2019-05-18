import React from 'react';
import {useSpring, animated} from 'react-spring';
import {useMeasure} from '../hooks/hooks';
// Const Shadow = styled(animated.div)`
// 	box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
// 	:hover {
// 		box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
// 	}
// `;

export function ThreeD({style, ...otherProps}) {
	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: {mass: 5, tension: 350, friction: 40}
	}));
	const [{ref}, {top, left, width, height}] = useMeasure();

	// Original: const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
	const calc = (x, y) => [
		-((top + height / 2 - y) / (height / 2)) * 10,
		-((left + width / 2 - x) / (width / 2)) * 10,
		1.1
	];
	const trans = (x, y, s) =>
		`perspective(1000px) rotateX(${x}deg) rotateY(${-y}deg) scale(${s})`;
	return (
		<animated.div
			ref={ref}
			style={{
				transform: props.xys.interpolate(trans),
				...style
			}}
			onMouseLeave={() => set({xys: [0, 0, 1]})}
			onMouseMove={({pageX: x, pageY: y}) => set({xys: calc(x, y)})}
			{...otherProps}
		/>
	);
}
