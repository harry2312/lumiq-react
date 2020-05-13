import axios from "axios";
import { apiUrl } from "../../config";

export function callSuperHeroApi(keyCodes) {
  return axios
    .post(apiUrl, keyCodes)
    .then((res) => res)
    .catch((err) => err.response);
}
