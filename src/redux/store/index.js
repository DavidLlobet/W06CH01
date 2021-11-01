import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
export default configureStore;
