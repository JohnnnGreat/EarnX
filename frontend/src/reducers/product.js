import { ADD_PRODUCT } from "@/actions/product";

const productReducer = (state = { productInfo: [] }, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_PRODUCT:
      console.log(state);
      return {
        ...state,
        productInfo: { name: "john" },
      };

    default:
      return state;
  }
};

export default productReducer;
