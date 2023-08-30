import {
  BrandsEnum,
  type IBrandAction,
  type IBrandState,
} from "../types/brands";

const brand: IBrandState = {
  brands: [],
};

export const brandsReducer = (
  state = brand,
  action: IBrandAction
): IBrandState => {
  switch (action.type) {
    case BrandsEnum.FETCH_BRAND:
      return { ...state, brands: action.payload };
    case BrandsEnum.FETCH_BRAND_ADD:
      return { ...state, brands: [...state.brands, action.payload] };
    default:
      return state;
  }
};
