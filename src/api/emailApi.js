import axiosInstance from "./axiosConfig";
const sendPasswordEmail = async (payload) => {
  try {
    const { data } = await axiosInstance.post("/email/send", payload);
    return data;
  } catch (error) {
    return error;
  }
};

export default {
  sendPasswordEmail,
};
