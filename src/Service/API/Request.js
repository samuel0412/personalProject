import axios from "axios";

const config = {
  BASE_URL: "http://localhost:3679/",
};
const fetchClient = () => {
  const defaultOptions = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",

      "x-xsrf-token-user": localStorage.getItem("log-token"),
      Cookie: "token-user=" + localStorage.getItem("log-cookie"),

      // Accept: "application/json",
      // "X-XSRF-TOKEN-user": localStorage.getItem("xsrfToken-user"),
    },
    withCredentials: true,
  };
  console.log("defaultOptions", defaultOptions);
  let instance = axios.create(defaultOptions);

  return instance;
};

export const apiClient = {
  put(path, params) {
    const res = fetchClient().put(`${config.BASE_URL}${path}`, params);
    return res;
  },
  get(path) {
    const dd = localStorage.getItem("xsrfToken-user");
    console.log("dd", dd);
    const res = fetchClient().get(`${config.BASE_URL}${path}`);
    return res;
  },

  async post(path, params) {
    const res = await fetchClient().post(
      `${config.BASE_URL}${path}`,
      JSON.stringify(params)
    );
    return res;
  },

  patch(path, params) {
    const res = fetchClient().patch(`${config.BASE_URL}${path}`, params);
    let xsrfToken = res.headers.map && res.headers.map["x-xsrf-token-user"];
    if (xsrfToken) localStorage.setItem("xsrfToken-user", xsrfToken);
    return res;
  },
  delete(path) {
    const res = fetchClient().delete(`${config.BASE_URL}${path}`);
    let xsrfToken = res.headers.map && res.headers.map["x-xsrf-token-user"];
    if (xsrfToken) localStorage.setItem("xsrfToken-user", xsrfToken);
    return res;
  },
  upload(path, params) {
    const res = fetchClient().post(path, params, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    let xsrfToken = res.headers.map && res.headers.map["x-xsrf-token-user"];
    if (xsrfToken) localStorage.setItem("xsrfToken-user", xsrfToken);
    return res;
  },
};

// Helper
// const processResponse = ({ url, config }) => {
//   config.headers["X-XSRF-TOKEN-user"] = localStorage.getItem("xsrfToken-user");
//   config.headers["logToken"] = localStorage.getItem("logToken");
//   console.log("config", config);
//   return fetch(url, config)
//     .then((res) => {
//       if (res.status == 404)
//         throw new ClientError({
//           message: "Wrong request url",
//           code: "ERROR_CODE.SERVER.NETWORK_ERROR",
//           status: res.status,
//         });
//       return res;
//     })
//     .then((res) => {
//       let xsrfToken = res.headers.map && res.headers.map["x-xsrf-token-user"];
//       if (xsrfToken) localStorage.setItem("xsrfToken-user", xsrfToken);
//       return res.json();
//     })
//     .catch((err) => {
//       if (err instanceof ClientError) throw err;
//       else
//         throw new ClientError({
//           message: "Wrong server response",
//           code: "ERROR_CODE.SERVER.NOT_JSON_IN_RESPONSE",
//           raw: err,
//         });
//     })
//     .then((json) => {
//       if (json.status == "success") return json.data;
//       else if (json.status == "error" && json.error)
//         throw new ClientError(json.error);
//       else
//         throw new ClientError({
//           message: "Wrong server response",
//           code: "ERROR_CODE.SERVER.WRONG_RESPONSE_STRUCTURE",
//           raw: json,
//         });
//     });
// };
export default apiClient;
