import PropTypes from "prop-types";
import StyledNoteCardList, { Notes } from "./style";
import FilterList from "../FilterList";
import notesData from "@/data/notes";
import NoteCard from "../NoteCard";
function NoteCardList({ children, ...rest }) {
  return (
    <StyledNoteCardList {...rest}>
      <FilterList
        options={["最新笔记优先", "热门笔记优先"]}
        actionLabel="添加笔记"
      >
        {" "}
        <Notes>
          {notesData.map((notes, i) => (
            <div key={i}>
              <NoteCard note={notes} />
            </div>
          ))}
        </Notes>
      </FilterList>

      {children}
    </StyledNoteCardList>
  );
}

NoteCardList.propTypes = {
  children: PropTypes.any,
};

export default NoteCardList;
