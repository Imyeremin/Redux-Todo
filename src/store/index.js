import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "./todoSlise";

export default configureStore({
  reducer: {
    todos: todoReduser,
  },
});
