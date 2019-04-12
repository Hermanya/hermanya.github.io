import styled from 'styled-components';
import {Flex} from 'rebass';

export const ExternalLink = styled(Flex)`
	color: ${props => props.color || props.theme.colors.gray[0]};
	text-decoration: none;
	:hover,
	:focus {
		text-decoration: underline;
		outline: none;
		cursor: pointer;
	}
`;

ExternalLink.defaultProps = {
	as: 'a',
	target: '_blank',
	rel: 'noreferrer'
};
