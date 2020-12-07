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

export const addProfileExperience = async (payload) => {
    return await axios.put(
        "profile/experience",
        JSON.stringify(payload),
        JSON_HEADERS
    );
};

export const addProfileEducation = async (payload) => {
    return await axios.put(
        "profile/education",
        JSON.stringify(payload),
        JSON_HEADERS
    );
};

export const removeExperience = async (id) => {
    return await axios.delete("profile/experience/" + id);
};

export const removeEducation = async (id) => {
    return await axios.delete("profile/education/" + id);
};

export const removeAccount = async (id) => {
    return await axios.delete("profile");
};

export const getProfiles = async () => {
    return await axios.get("profile");
};

export const getProfileByUserId = async (id) => {
    return await axios.get("user/" + id);
};

export const getGithubRepos = async (username) => {
    return await axios.get("github/" + username);
};
