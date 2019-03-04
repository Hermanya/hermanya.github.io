import React, {memo, useState} from 'react';
import {useSpring, animated} from 'react-spring';

import {ChevronRight, X, ChevronDown} from 'react-feather';
import styled from 'styled-components';
import {Flex, Box} from 'rebass';
import {useMeasure, usePrevious} from '../hooks/hooks';
import {ExternalLink} from './external-link';
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

const Content = styled(animated.div)`
	will-change: transform, opacity, height;
	margin-left: 0.5em;
	padding: 0px 0px 0px 1em;
	// border-left: 1px dashed rgba(0, 0, 0, 0.1);
	overflow: hidden;
`;
export const Tree = memo(
	({children, name, href, icon, open = false, color, ...otherProps}) => {
		const [isOpen, setOpen] = useState(open);
		const previous = usePrevious(isOpen);
		const [bind, {height: viewHeight}] = useMeasure();
		const {height, opacity, transform} = useSpring({
			from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
			to: {
				height: isOpen ? viewHeight : 0,
				opacity: isOpen ? 1 : 0,
				transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
			}
		});
		const Icon = icon
			? icon
			: children
			? isOpen
				? ChevronDown
				: ChevronRight
			: X;
		return (
			<Flex flexDirection="column" {...otherProps}>
				<ExternalLink
					href={href || '#'}
					alignItems="center"
					color={color}
					mb={2}
					onClick={event => {
						event.stopPropagation();
						if (!href) {
							event.preventDefault();
							setOpen(!isOpen);
						}
					}}
				>
					<Icon
						style={{opacity: children ? 0.3 : 0.6}}
						height="1em"
						width="1em"
					/>
					<Box ml="2">{name}</Box>
				</ExternalLink>
				<Content
					style={{
						opacity,
						height: isOpen && previous === isOpen ? 'auto' : height
					}}
				>
					<animated.div style={{transform}} {...bind}>
						{isOpen && children}
					</animated.div>
				</Content>
			</Flex>
		);
	}
);
