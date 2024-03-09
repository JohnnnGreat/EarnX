import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "@/actions/auth";

const authReducer = (state = { data: null, status: "" }, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, data: action?.payload, status: action?.status };
    case LOGIN_FAILURE: {
      return { ...state, data: null };
    }
  }
  return state;
};

export default authReducer;
