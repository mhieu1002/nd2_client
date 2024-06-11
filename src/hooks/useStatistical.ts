import { useMutation, useQuery } from "@tanstack/react-query";
import {
  statisticalApi,
} from "../apis/modules/statisticalApi";
import { IQueryParams } from "../types/common.type";

const useStatistical = (payload: IQueryParams) => {
  //getAll
  const {
    data: statisticals,
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["statisticals"],
    queryFn: async () => {
      const response = await statisticalApi.getAll();

      const { data } = response;

      return {
        data,
      };
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    refetch,
    statisticals,
    isError,
    isLoading,
    error,
  };
};

export { useStatistical };
