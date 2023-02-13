class ClientError extends Error {
  constructor(args = {}) {
    super();
    if (!args.message) args.message = "Dummy Error";
    Object.assign(this, args);
  }
}

export function processResponse({ url, config }) {
  config.headers["X-XSRF-TOKEN-user"] = localStorage.getItem("xsrfToken-user");
  config.headers["logToken"] = localStorage.getItem("logToken");

  return fetch(url, config)
    .then((res) => {
      if (res.status == 404)
        throw new ClientError({
          message: "Wrong request url",
          code: "ERROR_CODE.SERVER.NETWORK_ERROR",
          status: res.status,
        });
      return res;
    })
    .then((res) => {
      let xsrfToken = res.headers.map && res.headers.map["x-xsrf-token-user"];
      if (xsrfToken) localStorage.setItem("xsrfToken-user", xsrfToken);
      return res.json();
    })
    .catch((err) => {
      if (err instanceof ClientError) throw err;
      else
        throw new ClientError({
          message: "Wrong server response",
          code: "ERROR_CODE.SERVER.NOT_JSON_IN_RESPONSE",
          raw: err,
        });
    })
    .then((json) => {
      if (json.status == "success") return json.data;
      else if (json.status == "error" && json.error)
        throw new ClientError(json.error);
      else
        throw new ClientError({
          message: "Wrong server response",
          code: "ERROR_CODE.SERVER.WRONG_RESPONSE_STRUCTURE",
          raw: json,
        });
    });
}
