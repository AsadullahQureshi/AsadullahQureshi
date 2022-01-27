import { createStore } from "redux";
import reducers from "./reducers/index";

const prodStore = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);//second param is State third for Debuging purposes

export default prodStore;