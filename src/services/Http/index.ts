import { stringify } from "query-string";
import axios from "axios";
import { AuthService } from "../authService";
export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

export const Http = {
  Request: async <A>({
    methodType,
    url,
    formData,
    needAuth,
    params,
    payload,
  }: IGlobalService.IBodyRequest): Promise<
    IGlobalService.IServiceResult<A>
  > => {
    let auth = "";
    if (needAuth == true) {
      const itemStr = localStorage.getItem("access_token");

      const token = JSON.parse(itemStr).value;
      auth = token;
    }
    return new Promise((resolve, reject) => {
      const query = params ? `?${stringify({ ...params })}` : "";

      let extraHeader = {};
      let headers: any = {
        "Content-Type": "application/json",
      };
      if (auth && auth.length > 0) {
        headers = { ...headers, Authorization: `Bearer ${auth}` };
      }
      if (formData) {
        extraHeader = { ...formData.getHeaders() };
        headers = { ...extraHeader };
      }

      let body = undefined;

      body = payload;
      if (formData) body = formData;
      axios({
        method: methodType,
        url: `${url}${query}`,
        data: body,
        headers,
      })
        .then(async (x) => {
          if (x.status === 200) {
            let response: IGlobalService.IServiceResult<A>;
            const data = x.data;
            response = data;
            if (response.status === 1) {
              return resolve(response);
            } else {
              return reject(response);
            }
          }

          return reject(x);
        })
        .catch((e) => {
          // TODO - solve auth way with new approch
          if (e.toString().indexOf("status code 401")) {
            try {
              if (window != undefined && window != null)
                window.location.href = "https://idp.behsoud.com/Account/Login";
              localStorage.removeItem("access_token");
            } catch (e) {}
          }

          return reject(e.response);
        });
    });
  },
};
