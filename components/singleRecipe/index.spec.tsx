import React from "react";
import renderer from "react-test-renderer";
import wait from "waait";
import { MockedProvider } from "@apollo/client/testing";
import { Props, RECIPE } from "./type";
import SingleRecipe from "./index";

describe("<SingleRecipe/>", () => {
  let testRenderer;

  const props: Props = {
    id: "4dT8tcb6ukGSIg2YyuGEOm",
  };

  it("should render singleRecipe", async () => {
    const recipeMock = {
      request: { query: RECIPE, variables: { id: "4dT8tcb6ukGSIg2YyuGEOm" } },
      result: {
        data: {
          recipe: {
            chef: null,
            description:
              "*Grilled Cheese 101*: Use delicious cheese and good quality bread; make crunchy on the outside and ooey gooey on the inside; add one or two ingredients for a flavor punch! In this case, cherry preserves serve as a sweet contrast to cheddar cheese, and basil adds a light, refreshing note. Use __mayonnaise__ on the outside of the bread to achieve the ultimate, crispy, golden-brown __grilled cheese__. Cook, relax, and enjoy!",
            title: "White Cheddar Grilled Cheese with Cherry Preserves & Basil",
            photo: {
              url:
                "https://images.ctfassets.net/kk2bw5ojx476/61XHcqOBFYAYCGsKugoMYK/0009ec560684b37f7f7abadd66680179/SKU1240_hero-374f8cece3c71f5fcdc939039e00fb96.jpg",
            },
            tagsCollection: {
              items: [
                {
                  name: "vegan",
                },
              ],
            },
          },
        },
      },
    };

    testRenderer = renderer.create(
      <MockedProvider mocks={[recipeMock]} addTypename={false}>
        <SingleRecipe {...props} />
      </MockedProvider>
    );
    await wait(0); // wait for response

    expect(
      testRenderer.root.findAllByProps({ "data-test-id": "title" }).length
    ).toBe(1);
    expect(
      testRenderer.root.findAllByProps({ "data-test-id": "TagContainer" })
        .length
    ).toBe(1);

    expect(
      testRenderer.root.findAllByProps({ "data-test-id": "title" })[0].props
        .children
    ).toBe("White Cheddar Grilled Cheese with Cherry Preserves & Basil");
  });

  it("Should render correctly", () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
