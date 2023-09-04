import * as yup from "yup";

const initialBannerValue = {
  createdAt: "",
  updatedAt: "",
  image: "",
  mobileImage: "",
  availableFor: "",
  type: "",
  promocode: {
    id: "",
    name: "",
    promocode: null,
    price: null,
    percent: 0,
  },
  products: [],
};

const initialPromocodeValue = {
  percent: 0,
  promocode: "",
  catalog_product: {
    id: "",
    name: "",
    position: 0,
    __v: 0,
  },
  sub_catalog_product: {
    id: "",
    name: "",
    position: 0,
    catalog_product: "",
    __v: 0,
  },
  products: [],
};

const initialProtocolValue = {
  protocol_category: {
    id: "a23e5f4c-6718-4cd0-8328-f4a93a96df22",
    name: "Для жирной кожи",
  },
  id: Date.now() + "",
  isRetailAllowed: false,
  products: [],
};

const schema = yup
  .object({
    email: yup
      .string()
      .required("Обязательное поле")
      .email("Почта должна быть действительна"),
    password: yup
      .string()
      .required("Обязательное поле")
      .trim()
      .min(8, "Минимум 8 символов"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли должны совпадать"),
  })
  .required();

export {
  initialPromocodeValue,
  initialBannerValue,
  initialProtocolValue,
  schema,
};
