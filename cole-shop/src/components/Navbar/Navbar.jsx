import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './style'
import {Link, useLocation} from 'react-router-dom'
import logo from '../../components/images/LOGO.svg'

const Navbar = ( {totalItems} ) => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
          <img src={logo} style={{padding: '5px'}}></img>
          </Typography>
          <div className={classes.grow}/>
          {location.pathname ==='/' &&(
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
            </div> )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
//<img src={} alt="Commerce.js" height="25px" className={classes.image}/> for logo