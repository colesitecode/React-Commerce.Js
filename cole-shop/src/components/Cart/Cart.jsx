import React from 'react'
import {Container, Typography, Button, Grid,CssBaseline} from '@material-ui/core'
import useStyles from './style'
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom'

const Cart = ({ cart,handleUpdateCartQty,handleRemoveFromCart,handleEmptyCart }) => {
  const classes= useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping car, 
      <Link to="/" className="classes.link">start adding some</Link>!
    </Typography>
  )

  const FilledCart = () => (
    <>
    <CssBaseline/>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal:{cart.subtotal.formatted_with_symbol}</Typography>
      </div>
      <div style={{display: 'flex', justifyContent:'space-between', padding: '10px 0'}}>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
    </>
  )

  if(!cart.line_items) return 'loading....';

  return (
    <Container>
      <div className={classes.toolbar}/>
      <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart
