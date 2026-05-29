import { createStore } from "redux";
import reducer from "./reducers/stage-size";

const store = createStore(reducer);

export default store;
