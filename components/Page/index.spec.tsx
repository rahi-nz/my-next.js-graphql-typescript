import React from "react";
import renderer from "react-test-renderer";
import Page from "./index";
import { Props } from "./type";

describe("<Page/>", () => {
  let rootElement;
  let testRenderer;
  const prop: Props = {
    children: <p>children</p>,
    title: "title",
    header: "header",
  };
  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => <Page {...prop} />;
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
