import type { ResponseForm } from "src/types/axios";
import type { Atti } from "src/types/user";
import request from "../request";

export const getDetailAtti = async (userId: number) => {
  const data = await request<ResponseForm<Atti>>({
    method: "get",
    url: `/atti/${userId}`,
  });

  return data;
};
