import axios from "axios";
import { apiUrl } from "../../config";

export function callSuperHeroApi(keyCodes) {
  return axios
    .post(`${apiUrl}/call-superhero`, keyCodes)
    .then((res) => res)
    .catch((err) => err.response);
}
