import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import store from "../store";

export const shallowContainer = (component) =>
  shallow(<Provider store={store}>{component}</Provider>);
