import axios from "axios";

export const instance = axios.create({
  baseURL: "https://recipe-api.bssm.kro.kr/api/v1",
});
