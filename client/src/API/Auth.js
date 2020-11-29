import axios from "axios";

const JSON_HEADERS = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getUserByToken = async () => {
    return await axios.get("auth");
};

export const loginUser = async (body) => {
    return await axios.post("auth", JSON.stringify(body), JSON_HEADERS);
};
