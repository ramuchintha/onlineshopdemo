import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Hidden
} from '@material-ui/core/'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import CustomHeader from '../layout/Header';
import { addItemToCart, dispatchErrors, resetCart } from '../../actions/productsActions';

import './cart.css'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }

  removeItemFromCart = product => {
    let selectedItem = this.props.products.cart.filter(item => item.name === product.name);
    if (selectedItem.length > 0) {
      selectedItem[selectedItem.length - 1].qty = selectedItem[selectedItem.length - 1].qty - 1;
      product.qty = selectedItem[selectedItem.length - 1].qty;
      this.props.addItemToCart(product);
    }
  }

  removeProduct = product => {
    let selectedItem = this.props.products.cart.filter(item => item.name === product.name);
    if (selectedItem.length > 0) {
      selectedItem[selectedItem.length - 1].qty = selectedItem[selectedItem.length - 1].qty - 1;
      product.qty = 0;
      this.props.addItemToCart(product);
    }
  }

  addItemFromCart = product => {
    let selectedItem = this.props.products.cart.filter(item => item.name === product.name);
    if (selectedItem.length > 0) {
      selectedItem[selectedItem.length - 1].qty = selectedItem[selectedItem.length - 1].qty + 1;
      product.qty = selectedItem[selectedItem.length - 1].qty;
      this.props.addItemToCart(product);
    }
  }

  displayCart = () => {
    return this.props.products.cart.map((product, index) => {
      let discount = (product.price.actual / product.price.display) * 100;
      return (<div className="product-grid" key={product.name}>
        <Grid container spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start">
          <Grid item xs={12} md={12} lg={12}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={6} md={3} lg={3}>
                    <img alt={product.name} src={product.image} className="product-img" />
                  </Grid>
                  <Grid item xs={6} md={3} lg={4}>
                    {product.name}<br />
                    &#x20b9;  {product.price.actual} <strike>{product.price.display}</strike>
                    <span className="discount">{Math.round(discount)}% off</span><br />
                    <Hidden only={['lg']}>
                      <RemoveCircleIcon className="remove-qty" onClick={() => this.removeItemFromCart(product)} />&nbsp;<span className="prod-qty">{product.qty}</span>&nbsp;
                      <AddCircleIcon className="add-qty" onClick={() => this.addItemFromCart(product)} /><br />
                      <Button onClick={() => this.removeProduct(product)}>REMOVE</Button>
                    </Hidden>
                  </Grid>
                  <Hidden only={['xs']}>
                    <Grid item lg={2} className="align-middle">
                      <RemoveCircleIcon className="remove-qty" onClick={() => this.removeItemFromCart(product)} />&nbsp;<span className="prod-qty">{product.qty}</span>&nbsp;
                      <AddCircleIcon className="add-qty" onClick={() => this.addItemFromCart(product)} /><br />
                    </Grid>
                    <Grid item lg={3} className="align-middle">
                      <Button onClick={() => this.removeProduct(product)}>REMOVE</Button>
                    </Grid>
                  </Hidden>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <br />
      </div>
      )
    });
  }

  searchProducts = searchStr => {
    const searchResults = this.props.products.cart.filter((product) => product.name.toLowerCase().includes(searchStr));
    console.log('searchResults: ', searchResults);
  }

  getTotalPrice = _ => {
    let totalPrice = 0;
    let totalProducts = 0;
    let actualPrice = 0;
    this.props.products.cart.forEach(product => {
      totalPrice = totalPrice + (product.price.actual * product.qty);
      totalProducts = totalProducts + product.qty;
      actualPrice = actualPrice + (product.price.display * product.qty);
    });

    return (<div className="product-grid">
      <Grid container spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start">
        <Grid item xs={12} md={12} lg={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} className="price-details-label">
                  PRICE DETAILS
                </Grid>
                <Grid container className="total-products-label">
                  <Grid item xs={8} md={8} lg={8}>
                    Price ({totalProducts}  items) :
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    &#x20b9; {actualPrice}
                  </Grid>
                </Grid>

                <Grid container className="total-discount-label">
                  <Grid item xs={8} md={8} lg={8}>
                    Discount  :
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    &#x20b9; {actualPrice - totalPrice}
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={8} md={8} lg={8} className="total-payable-label">
                    Total Payable
                  </Grid>
                  <Grid item xs={4} md={4} lg={4}>
                    &#x20b9; {totalPrice}
                  </Grid>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
    </div >
    );
  }

  addProduct = _ => {
    this.props.history.push('/');
  }

  render() {
    return (
      <Fragment>
        <CustomHeader cart={this.props.cart} searchProducts={this.searchProducts} />
        <div className="main-container">
          <Typography className="cart-container" variant="h6" style={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} md={8} className="cart-list">
                {this.props.products.cart &&
                  this.displayCart()}
              </Grid>
              <Grid item md={4}>{this.props.products.cart.length > 0 && this.getTotalPrice()}</Grid>
            </Grid>
            {this.props.products.cart.length === 0 &&
              < Grid container>
                <Grid item xs={12} md={12} lg={12} className="empty-cart">Cart is empty</Grid>
                <Grid item xs={12} md={12} lg={12} className="add-product"><Button onClick={() => this.addProduct()}>Click here to add Product</Button></Grid>
              </Grid>
            }
          </Typography>
        </div>
      </Fragment >
    );
  }
}

Cart.propTypes = {
  products: PropTypes.object.isRequired,
  // setCartSearchResult: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  products: state.products,
  cart: state.products.cart
});

const mapDispatchToProps = {
  addItemToCart,
  dispatchErrors,
  resetCart,
  // setCartSearchResult
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));
