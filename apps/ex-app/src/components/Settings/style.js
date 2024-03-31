import styled from "styled-components";
const StyledSettings = styled.div``;
const SettingItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const SettingsItemControl = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSettingsGroup = styled.div``;
const StyledSettingsPage = styled.div`
  background-color: ${({ theme }) => theme.gray2};
`;
const StyledGroupContainer = styled.div`
  border: 1px solid white;
  padding: 20px;
  background-color: white;
`;
export default StyledSettings;
export {
  SettingItem,
  SettingsItemControl,
  StyledSettingsGroup,
  StyledSettingsPage,
  StyledGroupContainer,
};
