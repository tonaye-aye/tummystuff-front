import React from "react";

// api
import { getArticles, getCategories } from "../lib/api";

// componenets
import Articles from "../components/articles";
import Layout from "../components/layout";
import Title from "../components/title";

// material ui
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const Home = ({ articles, categories }) => {
  const title = "Blog";
  return (
    <Layout categories={categories}>
      <Title title={title} />
      <Divider light={true} />
      <Box m={3} />
      <Typography variant="h5" gutterBottom>
        Some blog posts and all things such as that
      </Typography>
      <Box m={6} />
      <Articles articles={articles} />
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = (await getArticles()) || [];
  const categories = (await getCategories()) || [];
  return {
    props: { articles, categories },
    unstable_revalidate: 1
  };
}

export default Home;
