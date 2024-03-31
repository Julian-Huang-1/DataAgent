import styled from "styled-components";
//装整个输入框的容器
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 24px;
  padding-left: 50px;
  position: relative;
`;
//输入框
const StyledInput = styled.textarea`
  justify-self: end;
  width: 100%;
  max-height: 100px; /* 使用auto而不是固定高度 */
  min-height: 48px; /* 设置最小高度 */
  resize: none;
  overflow-y: auto;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: none;
  color: black;
  padding-top: 16px;
  margin-left: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.gray3};
    font-size: medium;
  }
  //设置滚动条样式
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
const UploadContainer = styled.div`
  width: 50px;
  height: 40px;
  position: absolute;
  bottom: 2px;
  left: 10px;
`;
const UploadExcel = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  position: relative;
  bottom: 8px;
  & > *:first-child {
    margin: 0 16px;
    position: absolute;
    bottom: 10px;
    left: calc(1%);
  }
`;
const UploadFile = styled.input.attrs({ type: "file" })`
  display: none;
`;

//前缀
const Prefix = styled.div`
  margin: 0 16px;
  position: absolute;
  bottom: 50px;
  left: calc(1%);
`;
const ShowFile = styled.div`
  width: 100%;
  /* border: 1px solid red; */
`;
//后缀
const Suffix = styled.div`
  margin-left: 16px;
  position: absolute;
  bottom: 0;
  right: calc(5%);
  z-index: 80;
`;
export default StyledInput;
export {
  InputContainer,
  Prefix,
  Suffix,
  UploadExcel,
  UploadFile,
  UploadContainer,
  ShowFile,
};
