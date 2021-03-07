import React from 'react'
import Link from 'next/link'

// material ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 1rem'
  }
}))

const sidebar = ({ recentArticles, categories }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="overline" color="textSecondary" component="p">
        Topics
      </Typography>
      <Divider light={true} />
      <Box m={2} />
      {categories.map((category) => {
        return (
          <MenuItem key={category.id}>
            <Link as={`/category/${category.id}`} href="/category/[id]">
              <Typography variant="button" component="p">
                {category.name}
              </Typography>
            </Link>
          </MenuItem>
        )
      })}
      <Box m={6} />
      <Typography variant="overline" color="textSecondary" component="p">
        Other posts
      </Typography>
      <Divider light={true} />
      <Box m={2} />
      {recentArticles.map((article) => {
        return (
          <MenuItem key={article.id}>
            <Link as={`/article/${article.id}`} href="/article/[id]">
              <Typography variant="button" component="p">
                {article.title}
                {/*{article.title.slice(0, 30)}...*/}
              </Typography>
            </Link>
          </MenuItem>
        )
      })}
    </div>
  )
}

export default sidebar
