import React from "react";
import renderer from "react-test-renderer";
import Loading from "./index";

describe("<Loading/>", () => {
  let rootElement;
  let testRenderer;

  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => <Loading />;
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
