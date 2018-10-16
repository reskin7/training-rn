import { create } from "apisauce";

const api = create({
  baseURL: "http://private-b4996-wfoodapi.apiary-mock.com/",
  timeout: 5000
});

export default api;
