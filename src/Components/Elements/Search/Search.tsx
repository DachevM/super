import { useCallback } from "react";

import type React from "react";

import { useToolkitDispatch } from "../../../RTK/hooksRTK";
import { searchSlice } from "../../../RTK/reducers/searchReducerRtk";

import "./search.css";
interface ISearchProps {
  search: string;
}

const Search = ({ search }: ISearchProps) => {
  // const dispatch=useAppDispatch()
  // const history = useNavigate();
  // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //     dispatch({type:searchCases.SEARCH,payload:e.target.value})
  // }
  // const searchEmpty = ()=>{
  //     dispatch({type:searchCases.CLEAN,payload:""})
  // }
  // useEffect(() => {
  //     return () => {
  //         dispatch({type:searchCases.CLEAN,payload:""})
  //     };
  // }, [history]);
  const dispatch = useToolkitDispatch();
  const { searchMod, searchClean } = searchSlice.actions;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(searchMod(e.target.value));
    },
    [dispatch, searchMod]
  );

  const searchEmpty = useCallback(() => {
    dispatch(searchClean());
  }, [dispatch, searchClean]);

  return (
    <div className={"search_form"}>
      <input
        value={search}
        onChange={handleChange}
        type={"text"}
        placeholder={"Поиск по товарам"}
        className={"search_input"}
      />
      <button onClick={searchEmpty} className={"search_form_button"}></button>
    </div>
  );
};

export default Search;
