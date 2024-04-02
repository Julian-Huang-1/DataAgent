import PropTypes from "prop-types";
import StyledUpload, {
  FileContainer,
  FileType,
  FileName,
  FileSize,
  CancelBtn,
  TypeAndSizeContainer,
  FileIcon,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import FileExcel from "@/assets/icons/fileExcel.svg?react";
import { useRef } from "react";
function Upload({
  children,
  fileName,
  fileSize,
  fileType,
  handleFileState,
  ...rest
}) {
  const fileRef = useRef(null);
  const handelCancel = () => {
    fileRef.current.style.display = "none";
    handleFileState();
  };
  return (
    <StyledUpload {...rest}>
      <FileContainer ref={fileRef}>
        <FileIcon icon={FileExcel} width={38} height={30} />
        <FileName>{fileName}</FileName>
        <TypeAndSizeContainer>
          <FileType>{fileType}</FileType>
          <FileSize>{fileSize}</FileSize>
        </TypeAndSizeContainer>
        <CancelBtn onClick={handelCancel}>
          <FontAwesomeIcon icon={faXmark} color="#171616" />
        </CancelBtn>
      </FileContainer>

      {children}
    </StyledUpload>
  );
}

Upload.propTypes = {
  children: PropTypes.any,
  fileName: PropTypes.string,
  fileSize: PropTypes.oneOfType[("string", "number")],
  fileType: PropTypes.string,
  handelCancel: PropTypes.func,
};

export default Upload;
