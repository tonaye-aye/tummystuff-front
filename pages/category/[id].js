import React from "react";
import Link from "next/link";

// api
import { getCategory, getCategories, getArticles } from "../../lib/api";

// components
import Layout from "../../components/layout";
import Articles from "../../components/articles";
import Title from "../../components/title";
import Sidebar from "../../components/sidebar";

// material ui
import Grid from "@material-ui/core/Grid";

const Category = ({ category, categories, articles }) => {
  const recentArticles = articles.reverse().slice(0, 5);

  return (
    <Layout categories={categories}>
      <Title title={category.name} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Articles articles={category.articles} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Sidebar recentArticles={recentArticles} categories={categories} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = (await getCategories()) || [];
  return {
    paths: categories.map((category) => ({
      params: {
        id: category.id
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const articles = (await getArticles()) || [];
  const category = (await getCategory(params.id)) || [];
  const categories = (await getCategories()) || [];
  return {
    props: { articles, category, categories },
    unstable_revalidate: 1
  };
}

export default Category;
