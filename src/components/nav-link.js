import styled from 'styled-components';
import {Flex} from 'rebass';

const NavLink = styled(Flex)`
	color: ${props => props.color || props.theme.colors.gray[0]};
	text-decoration: none;
	:hover,
	:focus,
	:visited {
		text-decoration: underline;
		outline: none;
		cursor: pointer;
		color: ${props => props.color || props.theme.colors.gray[0]};
	}
`;

NavLink.defaultProps = {
	as: 'a'
	// target: '_blank',
	// rel: 'noreferrer'
};

export default NavLink;
