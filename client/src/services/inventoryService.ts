import api from "./api";

export const getInventory = async () => {
  const response = await api.get("/inventory");
  return response.data;
};

export const createInventory = async (item: any) => {
  const response = await api.post("/inventory", item);
  return response.data;
};