import axiosInstance from "../configs/apiConfig";

const getAll = async () => {
  const response = await axiosInstance.get("/statistical");
  return response;
};

export const statisticalApi = {
  getAll,
};
