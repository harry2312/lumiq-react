import React from "react";
import Home from "../../pages/Home";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("Home Page", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<Home />)).toMatchSnapshot();
  });
});
