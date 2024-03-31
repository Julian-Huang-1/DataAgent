import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";
import face from "@/assets/images/face-male-1.jpg";
import Avatar from "../Avatar";
function ContactCard({ children, contact, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face} status="online" />
      <Name> {contact.name}</Name>
      <Intro>{contact.intro}</Intro>
      {children}
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
  contact: PropTypes.object,
};

export default ContactCard;
