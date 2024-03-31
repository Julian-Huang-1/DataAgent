import styled from "styled-components";
const StyledNoteCardList = styled.div`
  padding: 20px;
`;
const Notes = styled.div`
  margin-top: -8px;
  & > * {
    margin: 8px 0;
  }
`;
export default StyledNoteCardList;
export { Notes };
