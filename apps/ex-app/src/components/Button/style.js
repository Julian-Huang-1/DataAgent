import styled, { css } from 'styled-components';
//按钮形状的变体
const shapeVariants = {
    circle: css`
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    //拥有块的属性，但不独占一行
    display: inline-flex;
    align-items: center;
    justify-content: center;
    `,
    rect: css`
   padding: 18px 32px;
    border-radius: 6px;
    `
}
//按钮类型的变体
const typeVariants = {
    primary: css`
    background-color: ${({ theme }) => theme.primaryColor};
    color: white;
    `
}
const StyledButton = styled.button`
border: none;
outline: none;
cursor: pointer;
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
${({ shape }) => shapeVariants[shape]}
${({ type }) => typeVariants[type]}
${({ bgColor }) => `background-color: ${bgColor}`};
transform: scale(1);
transition: 0.4s;
&:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }
`;
export default StyledButton;
