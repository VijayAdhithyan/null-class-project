import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import fetchPostReducer from "./post";
import UserPostReducer from "./userPost";
import fetchUsersReducer from "./profile";
import fetchFollowerReducer from "./followers";
import fetchFollowingReducer from "./followings";
import userDetailReducer from "./userDetail";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  fetchPostReducer,
  UserPostReducer,
  fetchUsersReducer,
  fetchFollowerReducer,
  fetchFollowingReducer,
  userDetailReducer,
});
