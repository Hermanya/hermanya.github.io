import styled from 'styled-components';
import {
	gridAutoColumns,
	gridAutoRows,
	gridGap,
	gridTemplateAreas,
	gridTemplateRows,
	gridTemplateColumns,
	space,
	gridArea,
	display
} from 'styled-system';

const Grid = styled.div`
	display: grid;
	${gridTemplateAreas}
	${gridGap}
	${gridAutoRows}
	${gridAutoColumns}
    ${gridTemplateRows}
    ${gridTemplateColumns}
	${space}
    ${gridArea}
    ${display}
`;

export default Grid;
