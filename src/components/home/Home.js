import React, { Component, Fragment } from 'react';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Grid, Card, CardContent, Typography, Button,
  IconButton, Snackbar, Hidden, Dialog, DialogContent,
  DialogTitle, DialogContentText, Radio, RadioGroup,
  FormControlLabel
} from '@material-ui/core/'


import CloseIcon from '@material-ui/icons/Close';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import FilterListIcon from '@material-ui/icons/FilterList';

import CustomHeader from '../layout/Header';

import { getProducts, addItemToCart, setSearchResults, dispatchErrors } from '../../actions/productsActions';

import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      products: '',
      itemAddedToCart: false,
      sortField: 'high',
      isDailogOpen: false
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = { ...prevState };
    if (nextProps.products.products) {
      newState.products = nextProps.products.products;
    }
    return newState;
  }

  addProductToCart = product => {
    this.setState({
      itemAddedToCart: true
    })

    if (this.props.products.cart.length > 0) {
      let selectedItem = this.props.products.cart.filter(item => item.name === product.name);
      if (selectedItem.length > 0) {
        selectedItem[selectedItem.length - 1].qty = selectedItem[selectedItem.length - 1].qty + 1;
        product.qty = selectedItem[selectedItem.length - 1].qty;
        this.props.addItemToCart(product);
      }
      else {
        product.qty = 1;
        this.props.addItemToCart(product);
      }
    }
    else {
      product.qty = 1;
      this.props.addItemToCart(product);
    }
  }

  handleClose = _ => {
    this.setState({
      itemAddedToCart: false
    })
  }

  _sortProducts = (type, products) => {
    if (type === 'high') {
      return products.sort((a, b) => parseFloat(b.price.actual) - parseFloat(a.price.actual));
    }
    else if (type === 'low') {
      return products.sort((a, b) => parseFloat(a.price.actual) - parseFloat(b.price.actual));
    }
    else if (type === 'discount') {
      return products.sort((a, b) => parseFloat(b.discount) - parseFloat(a.discount));
    }
  }

  _sortProductsOnMobile = _ => {
    this.setState({
      isDailogOpen: true
    })
  }

  handleDialog = _ => {
    this.setState({
      isDailogOpen: false
    })
  }

  _sortProductsbyField = field => {
    this.setState({
      sortField: field
    })
  }

  _setSortProductOption = field => {
    this.setState({
      sortField: field,
      isDailogOpen: false
    })
  }

  displayProducts = _ => {
    let { products, sortField } = this.state;
    products = this._sortProducts(sortField, products);
    return products.map((product, index) => {
      return (
        <Fragment key={product.name}>
          <Grid item xs={12} md={3} lg={3}>
            <Card>
              <CardContent className="prod-details">
                <Grid item xs={12} md={12} lg={12}>
                  <img alt={product.name} src={product.image} className="product-img" />
                </Grid>
                <Grid item xs={12} md={12} lg={12}>{product.name}</Grid>
                <Grid item xs={12} md={12} lg={12} className="prod-price-details">
                  &#x20b9; {product.price.actual}
                  &nbsp;<strike>{product.price.display}</strike>&nbsp;<span className="prod-discount">{product.discount}%off</span>
                </Grid>
                <Button variant="contained" onClick={() => this.addProductToCart(product)}>
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      )
    });
  };

  searchProducts = searchStr => {
    let { products } = this.state;
    if (products && searchStr && searchStr.length >= 3) {
      const searchResults = products.filter((product) => product.name.toLowerCase().includes(searchStr.toLowerCase()));
      this.props.setSearchResults(searchResults)
    }
    else {
      this.props.getProducts();
    }
  }

  handleChange = e => {
    // this._sortProductsbyField(e.target.value);
    this.setState({
      sortField: e.target.value
    })
  }

  render() {
    let { products, itemAddedToCart, sortField, isDailogOpen } = this.state;
    return (
      <Fragment>
        <CustomHeader cart={this.props.cart} searchProducts={this.searchProducts} />
        <div className="main-container">
          <Typography className="home-container" variant="h6" style={{ flexGrow: 1 }}>
            <Hidden only={['xs']}>
              {products &&
                <Grid container>
                  <Grid item lg={1}>
                    Sort By
                </Grid>
                  <Grid item lg={2}>
                    <span className={sortField === 'high' ? "select" : "unselect"} onClick={() => this._sortProductsbyField('high')}>Price -- High Low</span>
                  </Grid>
                  <Grid item lg={2}>
                    <span className={sortField === 'low' ? "select" : "unselect"} onClick={() => this._sortProductsbyField('low')}>Price -- Low High</span>
                  </Grid>
                  <Grid item lg={2}>
                    <span className={sortField === 'discount' ? "select" : "unselect"} onClick={() => this._sortProductsbyField('discount')}>Discount</span>
                  </Grid>
                  <Grid item lg={3}>&nbsp;</Grid>
                  <Grid item lg={2}>&nbsp;</Grid>
                </Grid>
              }
            </Hidden>
            <Hidden only={['lg']}>
              <Grid container>
                <Grid item xs={6} className="text-center">
                  <SortByAlphaIcon onClick={this._sortProductsOnMobile} /> Sort
                </Grid>
                <Grid item xs={6} className="text-center">
                  <FilterListIcon /> Filter
                </Grid>
              </Grid>
            </Hidden>
            <br />
            <Grid container item xs={12} md={12} spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
              {products && this.displayProducts()}
            </Grid>
            <Grid container item xs={12} md={12} lg={12} spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
              <Grid item lg={12} xs={12} md={12} className="no-prodcuts">
                {products.length === 0 && 'No products found...'}
              </Grid>
            </Grid>
          </Typography>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={itemAddedToCart}
          autoHideDuration={500}
          onClose={this.handleClose}
          message="Item added to cart"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />

        <Dialog
          open={isDailogOpen} onClose={() => this.handleDialog(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            <b> Sorting Options</b>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <RadioGroup aria-label="sortoptions" name="sortoptions" value={sortField} onChange={this.handleChange}>
                <FormControlLabel value="high" control={<Radio />} label="Price -- High Low" />
                <FormControlLabel value="low" control={<Radio />} label="Price -- Low High" />
                <FormControlLabel value="discount" control={<Radio />} label="Discount" />
              </RadioGroup>
              <Button variant="outlined" onClick={() => this.handleDialog(false)} color="primary">Cancel</Button>
              <Button variant="outlined" onClick={() => this._setSortProductOption(sortField)} className="apply-btn" color="primary">Apply</Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

Home.propTypes = {
  dispatchErrors: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  products: state.products,
  cart: state.products.cart
});

const mapDispatchToProps = {
  getProducts,
  addItemToCart,
  dispatchErrors,
  setSearchResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
