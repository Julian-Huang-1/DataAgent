import styled from "styled-components";
import Paragraph from "../Paragraph";
import StyledAvatar from "../Avatar/style";
import { card } from "@/utils/mixin";
const StyledContactCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name"
    "avatar intro";
  grid-template-columns: 62px auto;
  align-items: center;
  ${StyledAvatar} {
    grid-area: avatar;
  }
`;
const Name = styled(Paragraph).attrs({ size: "large" })`
  grid-area: name;
`;
const Intro = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: intro;
`;
export default StyledContactCard;
export { Name, Intro };
