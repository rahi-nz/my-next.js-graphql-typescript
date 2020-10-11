import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Page from "../components/Page";
import Recipes from "../components/recipes";
import ErrorPage from "../components/error";
import Loading from "../components/loading";

const Index = () => {
  const RECIPES = gql`
    query {
      recipeCollection {
        items {
          sys {
            id
          }
          title
          photo {
            url
          }
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(RECIPES);
  console.log("data", data);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Page title="This is HomePage" header="Our weekly menu">
      {data.recipeCollection.items?.map((el) => (
        <Recipes
          key={el.title}
          title={el.title}
          photo={el.photo.url}
          id={el.sys.id}
        />
      ))}
    </Page>
  );
};

export default Index;
