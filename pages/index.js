import React from 'react'
import Image from 'next/image'

// api
import { getArticles, getCategories } from '../lib/api'

// componenets
import Articles from '../components/articles'
import Layout from '../components/layout'
import Footer from '../components/footer'

// material ui
import Typography from '@material-ui/core/Typography'

const Home = ({ articles, categories }) => {
  const title = 'Tummy stuff and Lyme'
  return (
    <Layout categories={categories}>
      <div className="container">
        <article>
          <Image
            src="/leaf-alt.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            className="featureImg"
            style={{ position: 'fixed' }}
          />
        </article>
        <section className="home">
          <Typography
            gutterBottom
            variant="h2"
            component="h3"
            className="featureTitle"
          >
            {title}
          </Typography>
          <div className="featureArticles">
            {/*<Typography variant="h4" gutterBottom className="blogTitle">
              blogs...
  </Typography>*/}
            <Articles articles={articles} />
            <Footer />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || []
  const categories = (await getCategories()) || []
  return {
    props: { articles, categories },
    revalidate: 1
  }
}

export default Home
