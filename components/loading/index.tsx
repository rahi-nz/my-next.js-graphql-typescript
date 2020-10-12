import React from "react";
import { Container, LoadingImg } from "./style";

const Loading = () => {
  return (
    <Container>
      <LoadingImg src="/loading.gif" alt="myAppLoading" />
    </Container>
  );
};
export default Loading;
