import { combineReducers } from "redux";
import articlesReducer from "../redux/articles/reducer";
import paginationReducer from "../redux/pagination/reducer";
import cartReducer from "../redux/cart/reducer";

export default combineReducers({
  articles: articlesReducer,
  pagination: paginationReducer,
  cart: cartReducer
});
