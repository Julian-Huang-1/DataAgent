import PropTypes from "prop-types";
import StyledFileCardList, { Files } from "./style";
import FilterList from "../FilterList";
import FileCard from "../FileCard";
import fileData from "@/data/file";
function FileCardList({ children, ...rest }) {
  return (
    <StyledFileCardList {...rest}>
      <FilterList options={["最新文件优先", "按文件名排序"]}>
        <Files>
          {fileData.map((file, i) => (
            <div key={i}>
              <FileCard file={file} />
            </div>
          ))}
        </Files>
      </FilterList>

      {children}
    </StyledFileCardList>
  );
}

FileCardList.propTypes = {
  children: PropTypes.any,
};

export default FileCardList;
