import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../hooks/withApollo"
import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client"

export interface ITheme {
    light: string;
}

export interface IThemeWrapper {
    theme: ITheme;
}

export const theme: ITheme = {
    light: "#e8ded2",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    background: ${props => props.theme.light}; 
  }
`

interface IProps {
    apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
    render() {
        const { Component, pageProps, apollo } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>GraphQL Job Board</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <ApolloProvider client={apollo}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ApolloProvider>
            </React.Fragment>
        )
    }
}

export default withApollo(MyApp)