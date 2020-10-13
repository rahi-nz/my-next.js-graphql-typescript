import React from "react";
import renderer from "react-test-renderer";
import Error from "./index";

describe("<Error/>", () => {
  let rootElement;
  let testRenderer;

  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => <Error />;
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
