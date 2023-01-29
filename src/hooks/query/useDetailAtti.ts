import { useQuery } from "react-query";

import { getDetailAtti } from "src/apis/atti";

export default function useDetailAtti(id: number | null) {
  if (id === null) {
    return { isError: true };
  }

  const response = useQuery(`/atti/${id}`, () => getDetailAtti(id));

  const { data, isLoading, isError } = response;

  return {
    data: data?.data.data,
    isLoading,
    isError,
  };
}
