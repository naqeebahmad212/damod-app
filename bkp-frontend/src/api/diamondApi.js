import adminAxiosInstance from "./adminAxiosConfig";
import axiosInstance from "./axiosConfig";

const addDiamond = async (payload) => {
  try {
    const { data } = await adminAxiosInstance.post("/diamond/create", payload);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getAllDiamonds = async (query) => {
  try {
    const { data } = await adminAxiosInstance.get("/diamond", {
      params: { ...query },
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getAllDiamondsForUser = async (query) => {
  try {
    const { data } = await axiosInstance.get("/diamond", {
      params: { ...query },
    });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getDiamond = async (diamondId) => {
  try {
    const { data } = await axiosInstance.get(`/diamond/${diamondId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const getDiamondForAdmin = async (diamondId) => {
  try {
    const { data } = await adminAxiosInstance.get(`/diamond/${diamondId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
const updateDiamond = async (diamondId, payload) => {
  try {
    const { data } = await adminAxiosInstance.put(
      `/diamond/${diamondId}`,
      payload
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getAllDiamondsByShape = async () => {
  try {
    const { data } = await adminAxiosInstance.get("/diamond/shape");
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const remove = async (diamondId) => {
  try {
    const { data } = await adminAxiosInstance.delete(`/diamond/${diamondId}`);
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const mostSearchedShape = async () => {
  try {
    const { data } = await adminAxiosInstance.get(
      `/userSearchRecord/mostSearchedShape`
    );
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export default {
  addDiamond,
  getAllDiamonds,
  getAllDiamondsByShape,
  getAllDiamondsForUser,
  getDiamond,
  updateDiamond,
  remove,
  mostSearchedShape,
  getDiamondForAdmin
};
