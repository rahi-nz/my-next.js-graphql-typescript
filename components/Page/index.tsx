import Head from "next/head";
import React, { ReactNode } from "react";
import { Container, Element } from "./style";

interface PropTypes {
  children: ReactNode;
  title: string;
  header: string;
}

export default function Page({ children, title, header }: PropTypes) {
  return (
    <Container>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
      </Head>
      <h1>{header}</h1>
      <Element>{children}</Element>
    </Container>
  );
}
