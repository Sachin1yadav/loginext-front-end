import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import userProfileReducer from "./UserProfile/Userprofile.reducer";
  
let rootReducer = combineReducers({
    userProfileReducer:userProfileReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
