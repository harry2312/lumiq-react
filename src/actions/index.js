import { callSuperHeroApi } from "../api";
import {
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  CLEAR_MESSAGE,
} from "./actionTypes";

export function callSuperHero(dispatch, keyCodes) {
  dispatch({ type: SEARCH_PENDING });
  callSuperHeroApi(keyCodes).then((res) => {
    if (res && res.status < 350) {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data.message || "Something went wrong",
      });
      setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
    } else {
      dispatch({
        type: SEARCH_ERROR,
        message: "Something went wrong",
      });
    }
  });
}
