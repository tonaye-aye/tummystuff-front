import React from 'react'
import Template from './template'

// material ui
import Grid from '@material-ui/core/Grid'

const Articles = ({ articles }) => {
  const reversedArticles = [...articles].reverse()

  const leftArticlesCount = Math.ceil(reversedArticles.length / 3)
  const leftArticles = reversedArticles.slice(0, leftArticlesCount)
  const rightArticles = reversedArticles.slice(
    leftArticlesCount,
    reversedArticles.length
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        {leftArticles.map((article) => {
          return <Template article={article} key={`article__${article.id}`} />
        })}
      </Grid>
      <Grid item xs={12} md={6}>
        {rightArticles.map((article) => {
          return <Template article={article} key={`article__${article.id}`} />
        })}
      </Grid>
    </Grid>
  )
}

export default Articles
