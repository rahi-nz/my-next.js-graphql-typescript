import React from "react";
import { Container, LoadingImg } from "./style";

const Error = () => {
  return (
    <Container>
      <LoadingImg src="/error.gif" alt="myApp" />
      <p>something went wrong. Try again in a few minutes</p>
    </Container>
  );
};
export default Error;
