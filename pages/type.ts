import { gql } from "apollo-boost";

export const RECIPES = gql`
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

interface items {
  id: string;
}

interface photo {
  url: string;
}

interface items {
  sys: items;
  title: string;
  photo: photo;
}

interface Collection {
  items: Array<items>;
}

export interface recipesData {
  recipeCollection: Collection;
}
