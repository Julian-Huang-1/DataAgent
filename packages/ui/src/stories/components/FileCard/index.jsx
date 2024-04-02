import PropTypes from "prop-types";
import StyledFileCard, {
  FileIcon,
  FileName,
  FileSize,
  Options,
  Time,
} from "./style";
import FileZip from "@/assets/icons/fileZip.svg?react";
import FileExcel from "@/assets/icons/fileExcel.svg?react";
import FileWord from "@/assets/icons/fileWord.svg?react";
import FilePpt from "@/assets/icons/filePpt.svg?react";
import FileImage from "@/assets/icons/fileImage.svg?react";
import FilePdf from "@/assets/icons/filePdf.svg?react";
import OptionsIcon from "@/assets/icons/options.svg?react";
//对象数组
import fileData from "@/data/file";
import Icon from "../Icon";
const fileIcons = {
  zip: FileZip,
  image: FileImage,
  pdf: FilePdf,
  word: FileWord,
  excel: FileExcel,
  ppt: FilePpt,
};

function FileCard({ children, file = fileData[0], ...rest }) {
  return (
    <StyledFileCard {...rest}>
      <FileIcon icon={fileIcons[file.type]} />
      <FileName>{file.name}</FileName>
      <FileSize>{file.size}</FileSize>
      <Options>
        <Icon icon={OptionsIcon} opacity={0.3} />
      </Options>
      <Time>{file.updatedAt}</Time>
      {children}
    </StyledFileCard>
  );
}

FileCard.propTypes = {
  children: PropTypes.any,
};

export default FileCard;
