import { circle } from '@/utils/mixin';
import styled, { css } from 'styled-components';

const variants = {
    //小圆点尺寸是6，显示在图标右上角
    dot: css`
    position: relative;
    padding: 5px;
    &::after{
        display: ${({ show }) => (show ? 'block' : 'none')};
        content: "";
        //制作红色小圆点
        ${({ theme }) => circle(theme.red, '6px')}
        position: absolute;
        right: 0;
        top: 0;
    }
    `,
    //默认情况下：小圆点尺寸是26，未读数量显示在中间
    default: css`
    //制作红色小圆点
     ${({ theme }) => circle(theme.red, '26px')}
     display: flex;
     justify-content: center;
     align-items: center;
     box-shadow: 0px 18px 40px rgba(0,0,0,0.04),
     0px 6px 12px 0px rgba(0,0,0,0.08);
     //visbility:hiddle 隐藏但还是会占据空间
     ${({ showZero, count }) => (!showZero && count === 0 && 'visibility:hidden')}
    `
}
const Count = styled.div`
font-size: ${({ theme }) => theme.normal};
color: white;
`
const StyledBadge = styled.div`
display: inline-block;
${({ variant }) => variants[variant]}

`;
export default StyledBadge;
export { Count }
