// ACTIONS TYPES
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (data) => {
  return async (dispatch) => {
    /*try {
      const response = await axios.post("/", data);
      if (response.success) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
          status: "Login Sucessfully",
        });

        // openSnackbar('Login Sucessfully"');
      } else {
        // openSnackbar(response?.data);
        dispatch({ type: LOGIN_FAILURE, status: response.data.data.message });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, status: response.data.data.message });
    }*/
  };
};
