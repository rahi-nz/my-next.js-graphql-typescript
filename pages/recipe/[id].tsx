import React from "react";
import Page from "../../components/Page";
import SingleRecipe from "../../components/singleRecipe";

interface Props {
  query: { id: string };
}

const Recipe = ({ query }: Props) => {
  const { id } = query;

  return (
    <Page title="This is recipe page" header="Details View">
      <SingleRecipe id={id} />
    </Page>
  );
};

Recipe.getInitialProps = ({ query }) => ({ query });

export default Recipe;
