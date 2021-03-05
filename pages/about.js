import React from "react";

// api
import { getCategories } from "../lib/api";

// componenets
import Layout from "../components/layout";
import Title from "../components/title";

// material ui
import Typography from "@material-ui/core/Typography";

const About = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <Title title={"About"}></Title>
      <Typography variant="body2" component="p">
        This is a <a href="https://nextjs.org/">Next.js</a> and{" "}
        <a href="https://strapi.io/">Strapi</a> powered blog.
      </Typography>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return {
    props: { categories },
    unstable_revalidate: 1
  };
}

export default About;
