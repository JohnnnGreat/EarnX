import API from "@/app/utils/api";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

const addProduct = async (data) => {
  return async (dispatch) => {
    const product = await API.post("/product/add", data);

    dispatch({ type: "ADD_PRODUCT", payload: prod });
  };
};
