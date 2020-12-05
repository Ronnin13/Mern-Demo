import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
import { getMyProfile, createOrEditProfile } from "../API/Profile";
import { setLoading } from "./loading";
import get from "lodash/get";

export const getCurrentProfile = () => async (dispatch) => {
    dispatch(setLoading(true));
    await getMyProfile()
        .then((res) => {
            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            });
        })
        .catch((e) => {
            console.log(e);
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: e.response.statusText,
                    status: e.response.status,
                },
            });
        });
    dispatch(setLoading(false));
};

export const createUpdateProfile = (formData, history, edit = false) => async (
    dispatch
) => {
    dispatch(setLoading(true));

    await createOrEditProfile(formData)
        .then((res) => {
            const msg = edit ? "Profile Updated" : "Profile Created";
            dispatch({
                type: GET_PROFILE,
                payload: res.data,
            });
            dispatch(setAlert(msg, "success"));
            if (!edit) history.push("/dashboard");
        })
        .catch((e) => {
            console.log(e);
            const errors = get(e, "response.data.errors", []);
            console.log(errors);
            if (Array.isArray(errors) && errors.length) {
                errors.forEach((err) => dispatch(setAlert(err.msg, "danger")));
            }
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: get(e, "response.statusText"),
                    status: get(e, "response.status"),
                },
            });
        });

    dispatch(setLoading(false));
};
