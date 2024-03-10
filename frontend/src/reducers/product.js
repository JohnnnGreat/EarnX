import { ADD_PRODUCT } from "@/actions/product";

const initialState = {
  name: "",
  type: "",
  price: "",
  duration: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        name: action?.payload?.name,
        type: action?.payload?.type,
        price: action?.payload?.price,
        duration: action?.payload?.duration,
      };
  }

  return state;
};

export default productReducer;
