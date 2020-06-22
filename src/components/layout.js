import React from "react"
import { Global, css } from "@emotion/core"
import { Helmet } from "react-helmet"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 2;
            font-family: "Lato", sans-serif;
          }
          h1,
          h2,
          h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            text-align: center;
            font-family: "Lato", sans-serif;
            font-weight: 300;
          }
          h3 {
            font-family: "Roboto", sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .contenedor {
            max-width: 120rem;
            margin: 0 auto;
            width: 95%;
          }
          img {
            max-width: 100%;
          }
        `}
      />

      <Helmet>
        <title>Bienes raices gatsby</title>
        <meta
          name="description"
          content="Sitio web de bienes raices en Gatsby"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
