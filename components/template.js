import React from 'react'
import Link from 'next/link'

// material ui
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    background: '#f7f7f7'
  },
  cardContent: {
    padding: '25px 25px 16px'
  },
  cardActions: {
    padding: '4px 25px 12px',
    justifyContent: 'flex-end'
  }
}))

const Template = ({ article }) => {
  const classes = useStyles()

  const imageUrl = article.image.url.startsWith('/')
    ? process.env.API_URL + article.image.url
    : article.image.url

  return (
    <Card className={classes.root} elevation={0} color="primary">
      <CardMedia component="img" image={imageUrl} />
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="articleTitle"
        >
          {article.title}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {article.content.slice(0, 150)}...
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link as={`/article/${article.id}`} href="/article/[id]">
          <Button>Read More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Template
