import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Page from "../../components/Page";
import ErrorPage from "../../components/error";
import Loading from "../../components/loading";
import SingleRecipe from "../../components/recipe";

interface Props {
  query: { id: string };
}

const Recipe = ({ query }: Props) => {
  const { id } = query;

  const RECIPE = gql`
    query($id: String!) {
      recipe(id: $id) {
        chef {
          name
        }
        description
        title
        photo {
          url
        }
        tagsCollection {
          items {
            name
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(RECIPE, {
    variables: { id },
  });

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Page title="This is recipe page" header="Details View">
      <SingleRecipe data={data} />
    </Page>
  );
};

Recipe.getInitialProps = ({ query }) => ({ query });

export default Recipe;
