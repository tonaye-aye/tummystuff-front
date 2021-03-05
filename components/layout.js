import Head from "next/head";

// components
import Nav from "./nav";
import Footer from "./footer";

// material ui
import Container from "@material-ui/core/Container";

const Layout = ({ children, categories }) => (
  <>
    <Head>
      <title>Tony G. - Devtones</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>

    <Nav categories={categories} />
    <Container fixed>{children}</Container>
    <Footer />
  </>
);

export default Layout;
