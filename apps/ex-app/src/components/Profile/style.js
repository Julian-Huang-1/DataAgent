import styled from "styled-components";
import Icon from "../Icon";
import arrowRight from "@/assets/icons/arrowRight.svg";
const StyledProfile = styled.div`
  display: grid;
  justify-content: center;
  /* background-color: aqua; */
  justify-items: center;
  align-items: center;
  position: relative;
  padding: 30px;
  height: 80vh;
  /* margin-top: 2vh; */
  overflow-y: auto;
`;
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;
const SocialLink = styled.div`
  & > * {
    margin: 0 9px;
  }
`;
const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;
//相册容器 相册：album
const AlbumSection = styled.section``;
const AlbumTitle = styled.div`
  display: flex;
  /* justify-self: stretch; */
  justify-content: space-between;
  align-items: center;
  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 12px;
    }
  }
`;
const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
const Photo = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
`;

export default StyledProfile;
export {
  CloseIcon,
  SocialLink,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
};
