import styled from 'styled-components';
import {Flex} from 'rebass';

export const ExternalLink = styled(Flex)`
	color: ${props => props.color || 'black'};
	text-decoration: none;
	:hover,
	:focus {
		text-decoration: underline;
		outline: none;
	}
`;

ExternalLink.defaultProps = {
	as: 'a',
	target: '_blank',
	rel: 'noreferrer'
};
