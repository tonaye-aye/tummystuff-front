import React from "react";
import Link from "next/link";

// material ui
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";

const sidebar = ({ recentArticles, categories }) => {
  return (
    <div>
      <Typography variant="overline" color="textSecondary" component="p">
        Topics
      </Typography>
      <Divider light={true} />
      <Box m={1} />
      {categories.map((category) => {
        return (
          <MenuItem key={category.id}>
            <Link as={`/category/${category.id}`} href="/category/[id]">
              <Typography variant="button" component="p">
                {category.name}
              </Typography>
            </Link>
          </MenuItem>
        );
      })}
      <Box m={4} />
      <Typography variant="overline" color="textSecondary" component="p">
        Other posts
      </Typography>
      <Divider light={true} />
      <Box m={1} />
      {recentArticles.map((article) => {
        return (
          <MenuItem key={article.id}>
            <Link as={`/article/${article.id}`} href="/article/[id]">
              <Typography variant="button" component="p">
                {article.title.slice(0, 20)}...
              </Typography>
            </Link>
          </MenuItem>
        );
      })}
    </div>
  );
};

export default sidebar;
