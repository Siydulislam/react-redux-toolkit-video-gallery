import axiosInstance from "../../utils/axiosInstance";

export const getVideos = async () => {
    const response = await axiosInstance.get("/videos");

    return response.data;
};