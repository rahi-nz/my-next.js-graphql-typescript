import React from "react";
import renderer from "react-test-renderer";
import Recipes from "./index";
import { Props } from "./type";

describe("<Recipes/>", () => {
  let rootElement;
  let testRenderer;
  const props: Props = {
    photo:
      "https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
    title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
    id: "4dT8tcb6ukGSIg2YyuGEOm",
  };
  // eslint-disable-next-line prefer-const,react/display-name
  rootElement = () => <Recipes {...props} />;
  // eslint-disable-next-line prefer-const
  testRenderer = renderer.create(rootElement());

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
