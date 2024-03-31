import styled from "styled-components";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { card } from "@/utils/mixin";
const StyledNoteCard = styled.div`
  ${card()};
  display: grid;
  grid-template-columns: 72px 2fr 1fr;
  grid-template-areas: "image title time" "image excerpt excerpt";
  align-items: center;
`;
const NoteImage = styled.img`
  width: 60px;
  height: 60px;
  grid-area: image;
`;
const NoteTitle = styled(Heading).attrs({ level: 2 })`
  grid-area: title;
  align-self: center;
`;
const NoteExcerpt = styled(Paragraph).attrs({ size: "small" })`
  grid-area: excerpt;
  align-self: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const NotePublishTime = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;
export default StyledNoteCard;
export { NoteImage, NoteTitle, NoteExcerpt, NotePublishTime };
