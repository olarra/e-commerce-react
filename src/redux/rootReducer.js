import { combineReducers } from "redux";
import articlesReducer from "../redux/articles/reducer";
import paginationReducer from "../redux/pagination/reducer";

export default combineReducers({
  articles: articlesReducer,
  pagination: paginationReducer
});
