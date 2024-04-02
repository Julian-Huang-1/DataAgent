import styled from "styled-components";
import Text from "../Text";

const StyledEditProfile = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 30px;
  max-height: 100vh;
  overflow-y: auto;
`;
const GroupTitle = styled(Text).attrs({ size: "large" })`
  align-self: end;
`;
const SelectGroup = styled.div`
  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;
const GenderAndRegion = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledIconInput = styled.div`
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: end;
`;
export default StyledEditProfile;
export { GroupTitle, SelectGroup, StyledIconInput, GenderAndRegion };
