import styled from 'styled-components';
const Target = styled.div`

`;
const Content = styled.div`
background: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;
  bottom: calc(150%);


  ${({ visible }) => !visible && `display:none`};
  ${({ offset }) =>
    offset && `transform: translate(${offset.x || 0}, ${offset.y || 0})`};
  
`;
const Triangle = styled.div`
width: 0;
height: 0;
border: 20px solid ${({ theme }) => theme.background};
border-bottom: 6px solid transparent;
border-left: 6px solid transparent;
border-right: 6px solid transparent;
position: absolute;
bottom: calc(80%);

${({ visible }) => !visible && `display:none`};
${({ offset }) => offset && `transform: translateY(${offset.y || 0});`}


`;

const StyledPopover = styled.div`
display: flex;
justify-content: center;
position: relative;

`;
export default StyledPopover;
export { Content, Triangle, Target }
