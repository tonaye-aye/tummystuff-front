import Head from 'next/head'

// components
import Nav from './nav'

// material
import Typography from '@material-ui/core/Typography'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(',')
  }
})

// const theme = createMuiTheme({
//   typography: {
//     poppins: {
//       fontFamily: ['Poppins', 'sans-serif'].join(','),
//       fontWeight: '200'
//     },
//     rozha: {
//       fontFamily: ['Rozha One', 'serif'].join(','),
//     }
//   }
// })

const Layout = ({ children, categories }) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Tummy stuff & Lyme</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&family=Rozha+One&display=swap"
        rel="stylesheet"
      ></link>

      <meta
        name="description"
        content="A website about stomach pains, issues and remedies. A journey with lyme disease."
      />
      <meta
        name="keywords"
        content="LYME, LYME DISEASE, LYME AWARENESS, LYME AUSTRALIA, SIBO, STOMACH, TUMMY, FATIGUE, HEALTH, HEALTH AUSTRALIA"
      />
      <meta name="author" content="Tummy Stuff and Lyme" />
    </Head>

    <main>
      <Nav categories={categories} />
      {children}
    </main>
    <div className="brand">
      <Typography variant="body1" component="p">
        Tummy stuff & Lyme ―»
      </Typography>
    </div>
  </ThemeProvider>
)

export default Layout
