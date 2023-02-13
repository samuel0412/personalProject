import { userLogin } from "../../Service/API/EndPoints";
import { ActionTypes } from "../Constants/actionTypes";

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
});

const initialState = {
  data: {},
  status: STATUS.IDLE,
};

export const AuthReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.AUTH_LOGIN_STATUS:
      return { status: STATUS.LOADING };
    case ActionTypes.AUTH_LOGIN:
      return { data: payLoad, status: STATUS.SUCCESS };
    case ActionTypes.AUTH_LOGOUT:
      return { data: {}, status: STATUS.SUCCESS };
    case ActionTypes.ERROR:
      return [{ ...state, isFetching: STATUS.ERROR }];
    default:
      return state;
  }
};

// AUTH LOGIN API
export function AuthLogin(data) {
  return async function usersLoginThunk(dispatch, getState) {
    dispatch({ type: ActionTypes.AUTH_LOGIN_STATUS });
    try {
      const res = await userLogin(data);
      console.log("res.data.............", res.data.data);
      if (res.data.status === "success") {
        dispatch({ type: ActionTypes.AUTH_LOGIN, payLoad: res.data?.data });
      }
    } catch (err) {
      console.log("err..............", err);
      dispatch({ type: ActionTypes.ERROR });
    }
  };
}
