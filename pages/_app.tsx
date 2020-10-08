import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider, createGlobalStyle } from "styled-components"

export interface ITheme {
    light: string;
}

export interface IThemeWrapper {
    theme: ITheme;
}

export const theme: ITheme = {
    light: "#e7dfd5",
}

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
    background-color: ${props => props.theme.light}; 
  }
`

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <Head>
                    <title>recipes</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        )
    }
}