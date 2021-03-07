import React from 'react'

// api
import { getCategories } from '../lib/api'

// componenets
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import Title from '../components/title'

// material ui
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5rem 4rem 4rem'
  }
}))

const About = ({ categories }) => {
  const classes = useStyles()

  return (
    <Layout categories={categories}>
      <div className={classes.root}>
        <Title title={'About'}></Title>
        <Typography variant="body2" component="p">
          This is a <a href="https://nextjs.org/">Next.js</a> and{' '}
          <a href="https://strapi.io/">Strapi</a> powered blog.
        </Typography>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const categories = (await getCategories()) || []
  return {
    props: { categories },
    revalidate: 1
  }
}

export default About
