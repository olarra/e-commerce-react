import { combineReducers } from "redux";
import articlesReducer from "../redux/articles/reducer";

export default combineReducers({
  articles: articlesReducer,
});
