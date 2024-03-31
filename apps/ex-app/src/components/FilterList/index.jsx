import PropTypes from "prop-types";
import StyledFilterList from "./style";
import Plus from "@/assets/icons/plus.svg?react";
import Input from "../Input";
import Filter from "../Filter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
function FilterList({
  children,
  options,
  filterLabel = "列表排序",
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter style={{ padding: "20px" }}>
        {options && (
          <Filter.FilterText label={filterLabel}>
            <Select>
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </Select>
          </Filter.FilterText>
        )}
        {actionLabel && (
          <Filter.FilterAction label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.FilterAction>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
