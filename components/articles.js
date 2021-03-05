import React from "react";
import Template from "./template";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const Articles = ({ articles }) => {
  const classes = useStyles();

  const reversedArticles = [...articles].reverse();
  //console.log(articles);

  const leftArticlesCount = Math.ceil(reversedArticles.length / 3);
  const leftArticles = reversedArticles.slice(0, leftArticlesCount);
  const rightArticles = reversedArticles.slice(
    leftArticlesCount,
    reversedArticles.length
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          {leftArticles.map((article) => {
            return (
              <Template article={article} key={`article__${article.id}`} />
            );
          })}
        </Grid>
        <Grid item xs={12} md={5}>
          {rightArticles.map((article) => {
            return (
              <Template article={article} key={`article__${article.id}`} />
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default Articles;
