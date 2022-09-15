import activemenuReducer from "./Reducers/activemenu";
import classReducer from "./Reducers/openClassSidebar";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    class: classReducer,
    activemenu: activemenuReducer,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
