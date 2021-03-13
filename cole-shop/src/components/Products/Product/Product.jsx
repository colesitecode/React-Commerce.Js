import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from '../Product/style'

const Product = ({product, onAddToCart}) => {
  const classes = useStyles();
  
  return (

    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={[product.name]} />

      <CardContent style={{marginBottom: '-25px'}}>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>

          <Typography variant="h6">
            ${product.price.formatted}
          </Typography>
        </div>
          <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary" />
      </CardContent>

      <CardActions disableSpacing className={classes.CardActions} style={{float: 'right' }}>
        <Typography variant="h6">Add to cart </Typography>
        <IconButton aria-label='add to cart' onClick={ () => onAddToCart(product.id, 1)}>
          <AddShoppingCart style={{color: '#000'}} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
