import type { IBrands } from "../../types/types";

enum BrandsEnum {
  FETCH_BRAND = "FETCH_BRAND",
  FETCH_BRAND_ADD = "FETCH_BRAND_ADD",
}

interface IBrandAction {
  type: BrandsEnum;
  payload: any;
}

interface IBrandState {
  brands: IBrands[];
}
export { BrandsEnum, type IBrandAction, type IBrandState };
