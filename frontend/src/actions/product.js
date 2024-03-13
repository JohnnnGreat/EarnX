import API from "@/app/utils/api";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

/* Get Id from the Backend */
export const getID = () => {
  let id;
  if (window !== undefined) {
    console.log(window);
    id = localStorage.getItem("id");
  }
  return id;
};
export const addProduct = (data, message, setIsAddingProduct) => {
  setIsAddingProduct(true);
  return async (dispatch) => {
    try {
      const response = await API.post("/product/add", data);
      setIsAddingProduct(false);
      if (response?.data?.success) {
        console.log("success");
        message.success(response?.data?.message);
        dispatch({ type: ADD_PRODUCT, payload: response?.data?.product });
      }
    } catch (error) {
      setIsAddingProduct(false);
      console.log(error);
    }
  };
};

export const getProducts = async (data, message) => {
  const id = getID();
  console.log(id);
  try {
    const response = APi.get("/product/getallproducts");
  } catch (error) {
    console.log(error);
  }
};
