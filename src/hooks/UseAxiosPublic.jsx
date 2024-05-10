import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://aditya002p.github.io/ApiData/",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
