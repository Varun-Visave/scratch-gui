import { createStore } from "redux";
import layoutReducer from "./reducers/layout-reducer";

const store = createStore(layoutReducer);

export default store;
