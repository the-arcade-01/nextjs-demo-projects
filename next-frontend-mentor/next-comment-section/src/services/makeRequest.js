import axios from "axios";

const api = axios.create({
  withCredentials: true,
});

export function makeRequest(url, options) {
  return axios(url, options)
    .then((res) => res.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message ?? "Error")
    );
}
