import styled, { css } from 'styled-components';
import StyledText from '../Text/style';
const StyledParagraph = styled(StyledText)`
${({ elipsis }) => elipsis && css`
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`}
`;
export default StyledParagraph;
