import { RootState } from "../store";

module ProductSelectors {
  export const product = (s: RootState) => s.product;
}

export default ProductSelectors;
