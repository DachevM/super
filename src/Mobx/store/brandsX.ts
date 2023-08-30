import { makeAutoObservable } from "mobx";
import axios from "axios";

import { type IBrands } from "../../types/types";

const SERVER = "http://localhost:5005/brands";

class BrandsX {
  brands: IBrands[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addBrand(brand: IBrands) {
    this.brands = [...this.brands, brand];
  }
  removeBrand(brand: IBrands) {
    this.brands = this.brands.filter((e) => e.id !== brand.id);
  }

  async fetchBrandsX() {
    const response = await axios.get<IBrands[]>(SERVER);
    this.brands = [...response.data];
  }
}

export const BrandX = new BrandsX();
