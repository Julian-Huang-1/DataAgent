import styled, { css } from 'styled-components';
import StyledButton from '../Button/style';
import StyledIcon from '../Icon/style';
import StyledText from '../Text/style';
const typeVariants = {
    mine: css`
    background-color: ${({ theme }) => theme.primaryColor};
    ${StyledButton}{
        background-color: white;
        ${StyledIcon} path{
            fill:${({ theme }) => theme.primaryColor}
        }
    }
    &>${StyledIcon} path{
        fill: white;
    }
    &>${StyledText}{
        color: white;
    }
    `
}
const StyledVoiceMessage = styled.div`

display: flex;
align-items: center;

&>*:first-child{
    flex-shrink: 0;
};
&>*:not(:first-child){
    margin-left: 16px;
};
${({ type }) => type && typeVariants[type]}

`;
export default StyledVoiceMessage;
