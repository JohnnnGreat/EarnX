import API from "@/app/utils/api";

// ACTIONS TYPES
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

/**
 *
 * @param {object} data - Register Information
 * @param {string} message - Feedback Message
 * @returns void
 */
export const login = (data, message) => {
  return async (dispatch) => {
    try {
      const response = await API.post("/auth/login", data);

      console.log(response);
      if (response?.data?.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
          status: "Login Sucessfully",
        });
        message.success("Login Succesfully");
        localStorage.setItem("token", response?.data?.payload?.token);
        localStorage.setItem("id", response?.data?.payload?._id);
        window.location.href = "/dashboard";
      } else {
        dispatch({
          type: LOGIN_FAILURE,
          status: response?.data?.payload?.message,
        });
      }
    } catch (error) {
      console.log(error);
      message.error(error.response.data.message);
      dispatch({ type: LOGIN_FAILURE, status: error?.response?.data?.message });
    }
  };
};

/**
 *
 * @param {object} data - Register Information
 * @param {string} message - Feedback Message
 * @returns void
 */
export const register = (data, message, setIsLoading) => {
  console.log(data);
  return async (dispatch) => {
    try {
      setIsLoading(true);
      const response = await API.post("/auth/register", data);
      console.log(response);
      /* Check if the response return success */
      if (response.success) {
        message.success(response?.response?.data?.message);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      message.error(error?.response?.data?.message);
    }
  };
};
