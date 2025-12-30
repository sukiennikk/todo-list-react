import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectTasks } from "../tasksSlice";
import { Wrapper } from "./styled";

const Search = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(selectTasks);

  return (
    <Wrapper>
      <input
        placeholder="Filtruj zadania"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </Wrapper>
  );
};

export default Search;
