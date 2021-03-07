import React from 'react'

// material ui
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '2rem',
    marginBottom: '1rem'
  }
}))

const title = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        gutterBottom
        variant="h3"
        component="h3"
        className="articleTitle"
      >
        {title}
      </Typography>
    </div>
  )
}

export default title
