import { AUTH_ERROR, USER_LOADED, LOGOUT } from "./types";
import setAuthToken from "../utils/setAuthToken";
import { getUserByToken } from "../API/Auth";

export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    await getUserByToken()
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((e) => {
            console.log(e);
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

export const register = (resp_type, data = undefined) => async (dispatch) => {
    if (data) {
        dispatch({
            type: resp_type,
            payload: data,
        });
        dispatch(loadUser());
    } else {
        dispatch({
            type: resp_type,
        });
    }
};

export const login = (resp_type, data = undefined) => async (dispatch) => {
    if (data) {
        dispatch({
            type: resp_type,
            payload: data,
        });
        dispatch(loadUser());
    } else {
        dispatch({
            type: resp_type,
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
