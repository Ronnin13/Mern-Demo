import axios from "axios";

const JSON_HEADERS = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getMyProfile = async () => {
    return await axios.get("profile/me");
};

export const createOrEditProfile = async (payload) => {
    return await axios.post("profile", JSON.stringify(payload), JSON_HEADERS);
};
