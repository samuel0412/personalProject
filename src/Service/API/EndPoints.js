import swal from "sweetalert";
import apiClient from "./Request";

async function userLogin(data) {
  try {
    const response = await apiClient.post("api/v1.0/users/login", data);
    console.log("response", response);
    localStorage.setItem("log-token", response.data.data.xsrfToken);
    localStorage.setItem("log-cookie", response.data.data.token);
    return response;
  } catch (e) {
    swal(e?.response?.data?.error?.message);
  }
}

export { userLogin };
