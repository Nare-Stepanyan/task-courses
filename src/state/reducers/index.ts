import { combineReducers } from "redux";
import courseReducer from "./courseReducer";

const reducers = combineReducers({
  courses: courseReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
