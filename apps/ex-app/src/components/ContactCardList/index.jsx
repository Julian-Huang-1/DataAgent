import PropTypes from "prop-types";
import StyledContactCardList, { Contacts } from "./style";
import FilterList from "../FilterList";
import ContactCard from "../ContactCard";
import contactData from "@/data/contact";
function ContactCardList({ children, ...rest }) {
  return (
    <StyledContactCardList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactData.map((contact, i) => (
            <div key={i}>
              <ContactCard contact={contact} />
            </div>
          ))}
        </Contacts>
      </FilterList>

      {children}
    </StyledContactCardList>
  );
}

ContactCardList.propTypes = {
  children: PropTypes.any,
};

export default ContactCardList;
