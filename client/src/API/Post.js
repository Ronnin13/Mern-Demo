import axios from "axios";

const JSON_HEADERS = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const getPosts = async () => {
    return await axios.get("/post");
};

export const getPostById = async (id) => {
    return await axios.get(`/post/${id}`);
};

export const addAPost = async (data) => {
    return await axios.post(`/post`, JSON.stringify(data), JSON_HEADERS);
};

export const addALike = async (id) => {
    return await axios.put(`/post/like/${id}`, JSON_HEADERS);
};

export const removeALike = async (id) => {
    return await axios.put(`/post/unlike/${id}`, JSON_HEADERS);
};

export const deletePost = async (id) => {
    return await axios.delete(`/post/${id}`, JSON_HEADERS);
};

export const addAComment = async (postId, formData) => {
    return await axios.post(
        `/post/${postId}/comment`,
        JSON.stringify(formData),
        JSON_HEADERS
    );
};

export const removeAComment = async (postId, commentId) => {
    return await axios.delete(`/post/${postId}/comment/${commentId}`);
};
