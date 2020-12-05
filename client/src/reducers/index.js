import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import loading from "./loading";

export default combineReducers({
    alert,
    auth,
    profile,
    loading,
});
