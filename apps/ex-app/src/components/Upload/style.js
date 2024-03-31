import styled from "styled-components";
import Text from "../Text";
import Button from "../Button";
import Icon from "../Icon";
const StyledUpload = styled.div``;
const FileContainer = styled.div`
  width: 160px;
  height: 70px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: ${({ theme }) => theme.gray2};
  border-radius: 20px;
  position: relative;
  display: grid;
  align-items: center;
  grid-template-areas:
    "file name"
    "file typeAndsize";
`;
const TypeAndSizeContainer = styled.div`
  grid-area: typeAndsize;
`;
const FileIcon = styled(Icon)`
  grid-area: file;
`;
const FileType = styled(Text).attrs({ type: "secondary", size: "small" })`
  margin-right: 5px;
`;
const FileName = styled(Text).attrs({ size: "small" })`
  grid-area: name;
`;
const FileSize = styled(Text).attrs({ type: "secondary", size: "xsmall" })``;
const CancelBtn = styled(Button).attrs({ size: "25px" })`
  position: absolute;
  background-color: #fff;
  top: calc(-10%);
  right: calc(-5%);
  z-index: 10;
`;
export default StyledUpload;
export {
  FileContainer,
  FileType,
  FileName,
  FileSize,
  CancelBtn,
  TypeAndSizeContainer,
  FileIcon,
};
