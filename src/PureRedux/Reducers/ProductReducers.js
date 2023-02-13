import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { userLogin } from "../../Service/API/EndPoints";
import { ActionTypes } from "../Constants/actionTypes";

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

export const productReducer = (state = initialState, { type, payLoad }) => {
  const { data, status } = state;
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { status: STATUS.LOADING };
    case ActionTypes.SET_PRODUCTS_COMPLETED:
      return { data: [...payLoad], status: STATUS.SUCCESS };
    case ActionTypes.ERROR:
      return [{ ...state, isFetching: STATUS.ERROR }];
    default:
      return state;
  }
};

// FakeStore API
export const fetchTodoById = () => async (dispatch, getstate) => {
  dispatch({ type: ActionTypes.SET_PRODUCTS });
  try {
    const res = await axios.get(`https://fakestoreapi.com/products`);
    console.log("res...........", res.data);
    if (res.data) {
      dispatch({ type: ActionTypes.SET_PRODUCTS_COMPLETED, payLoad: res.data });
    }
  } catch (err) {}
};
