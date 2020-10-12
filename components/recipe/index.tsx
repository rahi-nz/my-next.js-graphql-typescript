import React from "react";
import { Container, Description, TagContainer, Photo } from "./style";

interface PropTypes {
  data: {
    recipe: {
      chef: { name: string };
      description: string;
      title: string;
      photo: { url: string };
      tagsCollection: { items: Array<{ name: string }> };
    };
  };
}

const SingleRecipe = ({ data }: PropTypes) => {
  const { description, photo, title, tagsCollection, chef } = data.recipe;
  return (
    <Container>
      <p>Chef: {chef?.name ? chef.name : "Unknown"}</p>
      <Photo src={photo.url} alt={title} />
      <p>{title}</p>
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
