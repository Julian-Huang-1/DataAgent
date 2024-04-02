import styled from "styled-components";
const StyledFilterList = styled.div`
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
    height: 1px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    font-size: ${({ theme }) => theme.medium};
  }
`;
export default StyledFilterList;
