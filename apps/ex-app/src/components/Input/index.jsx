import PropTypes from "prop-types";
import StyledInput, {
  InputContainer,
  // Prefix,
  Suffix,
  UploadExcel,
  UploadFile,
  UploadContainer,
  ShowFile,
} from "./style";
import SearchIcon from "@/assets/icons/search.svg?react";
import { useTheme } from "styled-components";
import Icon from "@/components/Icon";
import InputText from "./InputText";
import { useRef, useState, useEffect } from "react"; // Combine imports
import Upload from "../Upload";
import * as XLSX from "xlsx";

function Input({
  placeholder = "请输入内容...",
  prefix,
  suffix,
  message,
  fileInfo,
  fileState,
  setMessage,
  setExcelData,
  setFileInfo,
  setFileState,
  setFileObj,
  ...rest
}) {
  let showBar = 0;
  const inputRef = useRef();
  // const [excelData, setExcelData] = useState([]);
  // const [fileInfo, setFileInfo] = useState({});
  // const [fileState, setFileState] = useState(false);

  const handleInput = () => {
    const cur = inputRef.current;
    cur.style.height = "auto";
    cur.style.height = cur.scrollHeight + "px";
    showBar = cur.scrollHeight;
    setMessage(cur.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [message]);

  const handleFileUpload = async (e) => {
    console.log("触发了文件上传");
    const file = e.target.files[0];
    setFileObj(file);
    if (file) {
      setFileState(true);
      setFileInfo({
        fileName: file.name,
        fileSize: (file.size / 1024).toFixed(1),
        fileType: "表格",
      });

      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryString = event.target.result;
        const workbook = XLSX.read(binaryString, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setExcelData(data);
      };
      reader.readAsBinaryString(file);
      console.log(fileInfo);
      console.log("fileState,", fileState);
      // 清空文件选择框的值
      e.target.value = "";
    } else {
      // 用户未选择文件或上传失败
      console.log("文件上传失败");
    }
  };
  const handleFileState = () => {
    setFileState(false);
  };

  return (
    <InputContainer {...rest}>
      {prefix && (
        <UploadContainer>
          <UploadExcel>
            {prefix}
            <UploadFile accept=".xlsx,.xls" onChange={handleFileUpload} />
          </UploadExcel>
        </UploadContainer>
      )}
      <ShowFile>
        <StyledInput
          placeholder={placeholder}
          ref={inputRef}
          onChange={handleInput}
          showBar={showBar}
          rows={1}
          value={message}
          style={{ paddingRight: fileState ? "100px" : "unset" }} // 调整输入框的右边距
        />{" "}
        {fileState && (
          <Upload
            fileName={fileInfo.fileName}
            fileType={fileInfo.fileType}
            fileSize={fileInfo.fileSize}
            style={{ marginLeft: "20px" }}
            handleFileState={handleFileState}
          />
        )}
      </ShowFile>

      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  const theme = useTheme();
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
      }
      {...rest}
    />
  );
}

Input.Search = Search;
Input.Text = InputText;
Input.propTypes = {
  children: PropTypes.any,
};

export default Input;
