import { IQueryParams } from "../../types/common.type";
import axiosInstance from "../configs/apiConfig";
import qs from "querystringify";

const getAll = async (params: IQueryParams) => {
  const response = await axiosInstance.get(`/doctor/?${qs.stringify(params)}`);
  return response;
};

export const doctorApi = {
  getAll,
};
