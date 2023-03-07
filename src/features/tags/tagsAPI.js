import axiosInstance from "../../utils/axiosInstance"

export const getTags = async () => {
    const response = await axiosInstance.get("/tags");

    return response.data;
};