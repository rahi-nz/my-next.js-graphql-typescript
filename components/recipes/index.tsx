import React from "react";
import Link from "next/link";
import { Container, Photo, Title } from "./style";

interface PropTypes {
  photo: string;
  title: string;
  id: string;
}

const Recipes = ({ photo, title, id }: PropTypes) => {
  return (
    <Container>
      <Link href={`/recipe/${id}`}>
        <a>
          <Photo src={photo} alt="title" />
          <Title>{title}</Title>
        </a>
      </Link>
    </Container>
  );
};

export default Recipes;
