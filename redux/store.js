import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import usersSlice from "./usersSlice";
import productsSlice from "./productsSlice";

const combinedReducer = combineReducers({ usersSlice, productsSlice });

const masterReducer = (state, { type, payload }) => {
  // during server side rendering
  if (type === HYDRATE) {
    const nextState = {
      ...state,
      // ssr used in user page
      usersSlice: {
        users: payload.usersSlice.users,
        usersCount: payload.usersSlice.usersCount,
      },
    };
    return nextState;
  } else {
    // client side rendering
    return combinedReducer(state, { type, payload });
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const reduxWrapper = createWrapper(makeStore);
