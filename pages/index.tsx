import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Index = () => {
  const RECIPES = gql`
    query {
      recipeCollection {
        items {
          title
          photo {
            url
          }
        }
      }
    }
  `;

  const { data } = useQuery(RECIPES);
  console.log("data", data);

  return (
    <div>
      <h1>WELCOME TO MY WEB APP</h1>
      <p>A list of recipe.</p>
    </div>
  );
};

export default Index;
