import React, {memo, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {Link} from 'gatsby';
import {ChevronRight, ExternalLink, ChevronDown} from 'react-feather';
import styled from 'styled-components';
import {Flex, Text} from 'rebass';
import {useMeasure, usePrevious} from '../hooks/hooks';
import NavLink from './nav-link';

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
			: ExternalLink;
		return (
			<Flex flexDirection="column" {...otherProps}>
				<NavLink
					as={(href || '').startsWith('/') ? Link : 'a'}
					href={href || '#'}
					to={href || '#'}
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
					<Text ml="2" textAlign="left">
						{name}
					</Text>
				</NavLink>
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
