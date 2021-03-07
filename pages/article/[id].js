import React from 'react'
import Link from 'next/link'

// packages
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

// api
import { getArticles, getArticle, getCategories } from '../../lib/api'

// components
import Layout from '../../components/layout'
import Title from '../../components/title'
import Sidebar from '../../components/sidebar'

// material ui
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 4rem 4rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardContainer: {
    background: '#f7f7f7'
  },
  media: {
    height: 300
  },
  cardContent: {
    margin: '1.5rem 0 0',
    padding: '25px 25px 16px'
  },
  cardActions: {
    padding: '4px 25px 12px',
    justifyContent: 'flex-end'
  }
}))

const Article = ({ article, articles, categories }) => {
  const classes = useStyles()

  const recentArticles = articles.slice(0, 5)

  const imageUrl = article.image.url.startsWith('/')
    ? process.env.API_URL + article.image.url
    : article.image.url

  return (
    <Layout categories={categories}>
      <div className={classes.root}>
        <Title title={article.title} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={9}>
            <Card elevation={0} className={classes.cardContainer}>
              <CardMedia
                component="img"
                image={imageUrl}
                className={classes.media}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <Box fontStyle="italic" component="span">
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </Box>{' '}
                  |{' '}
                  <Box fontWeight="fontWeightBold" component="span">
                    {article.category.name}
                  </Box>
                </Typography>
                <Box m={2} />
                <Divider light={true} />
                <Box fontFamily="fontFamily" lineHeight={1.6}>
                  <ReactMarkdown source={article.content} />
                </Box>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Link href="/">
                  <Button>Back</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Sidebar recentArticles={recentArticles} categories={categories} />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = (await getArticles()) || []
  return {
    paths: articles.map((article) => ({
      params: {
        id: article.id
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const articles = (await getArticles(params.id)) || []
  const article = (await getArticle(params.id)) || []
  const categories = (await getCategories()) || []
  return {
    props: { article, articles, categories },
    revalidate: 1
  }
}

export default Article
