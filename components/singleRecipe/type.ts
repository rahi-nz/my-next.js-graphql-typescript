import { gql } from "apollo-boost";

export const RECIPE = gql`
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

export interface Props {
  id: string;
}

interface chef {
  name: string | null;
}

interface photo {
  url: string;
}

interface tag {
  name: string;
}

interface tagsCollection {
  items: Array<tag>;
}

interface recipe {
  chef: chef;
  description: string;
  title: string;
  photo: photo;
  tagsCollection: tagsCollection;
}

export interface getRecipes {
  recipe: recipe;
}
