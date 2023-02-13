import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../Service/API/EndPoints";

const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
  SUCCESS: "success",
});
const initialState = {
  data: [],
  status: STATUS.IDLE,
};

const userLoginSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    setUsersLoginData(state, action) {
      state.data = action.payload;
    },
    setUsersLoginStatus(state, acttion) {
      state.status = acttion.payload;
    },
    setUsersLogout(state, acttion) {
      state.data = [];
    },
  },
});
export const { setUsersLoginData, setUsersLoginStatus, setUsersLogout } =
  userLoginSlice.actions;
export default userLoginSlice.reducer;

// Thunk
export function usersLogin(data) {
  return async function usersLoginThunk(dispatch, getState) {
    dispatch(setUsersLoginStatus(STATUS.LOADING));
    try {
      const res = await userLogin(data);
      dispatch(setUsersLoginData(res.data));
      if (res.data.status === "success") {
        dispatch(setUsersLoginStatus(STATUS.SUCCESS));
      }
    } catch (err) {
      console.log("err..............", err);
      dispatch(setUsersLoginStatus(STATUS.ERROR));
    }
  };
}
