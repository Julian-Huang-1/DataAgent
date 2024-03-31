import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteImage,
  NoteTitle,
  NoteExcerpt,
  NotePublishTime,
} from "./style";
//对象数组
import noteData from "@/data/notes";
function NoteCard({ children, note = noteData[0], ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note.image} />
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.publishedAt}</NotePublishTime>
      {children}
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
