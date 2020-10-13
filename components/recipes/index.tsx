import React from "react";
import Link from "next/link";
import { Props } from "./type";
import { Container, Photo, Title } from "./style";

const Recipes = ({ photo, title, id }: Props) => {
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
