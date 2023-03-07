import axiosInstance from "../../utils/axiosInstance";

export const getVideo = async (id) => {
    const response = await axiosInstance.get(`/videos/${id}`);

    return response.data;
};