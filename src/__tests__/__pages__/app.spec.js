import React from "react";
import App from "../../App";
import { shallowContainer } from "../../helpers/reduxWrapper";

describe("App Component", () => {
  it("should match snapshot", () => {
    expect(shallowContainer(<App />)).toMatchSnapshot();
  });
});
