import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Container, Description, TagContainer, Photo } from "./style";
import { Props, getRecipes, RECIPE } from "./type";
import ErrorPage from "../error";
import Loading from "../loading";

const SingleRecipe = ({ id }: Props) => {
  const { loading, data, error } = useQuery<getRecipes>(RECIPE, {
    variables: { id },
  });

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <Loading />;
  }

  const { description, photo, title, tagsCollection, chef } = data.recipe;
  return (
    <Container>
      <p>Chef: {chef?.name ? chef.name : "Unknown"}</p>
      <Photo src={photo.url} alt={title} />
      <p data-test-id="title">{title}</p>
      <TagContainer>
        {tagsCollection.items.map((el) => (
          <span key={el.name}>{el.name}</span>
        ))}
      </TagContainer>
      <Description>
        <p>What's cooking</p>
        {description}
      </Description>
    </Container>
  );
};

export default SingleRecipe;
