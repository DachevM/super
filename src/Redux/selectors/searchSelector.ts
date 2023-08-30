import { RootState } from "../store";

module SearchSelectors {
  export const searchText = (s: RootState) => s.search.text;
}

export default SearchSelectors;
