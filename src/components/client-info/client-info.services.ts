import { useQuery } from "@tanstack/react-query";
import { ApiManager, RemasBaseUrl } from "api/sevices/axios.config";
import { products } from "./client-info";

export const useGetProduct = () => {
    const { data, isLoading, isFetching } = useQuery<products>({
        queryKey: ["data"],
        queryFn: () => ApiManager.get(`products`),
    });
    return { data: data?.data, isLoading, isFetching };
};

export const useGetMenuBar = () => {
    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["menu"],
        queryFn: () => RemasBaseUrl.get(`Product/MenuBar`)
    });
    return { data: data?.data?.Content, isLoading, isFetching };
};




