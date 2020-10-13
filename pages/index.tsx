import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { RECIPES, recipesData } from "./type";
import Page from "../components/Page";
import Recipes from "../components/recipes";
import ErrorPage from "../components/error";
import Loading from "../components/loading";

const Index = () => {
  const { loading, data, error } = useQuery<recipesData>(RECIPES);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Page title="This is HomePage" header="List view">
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
