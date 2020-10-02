import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { AppBar, Input, Typography, IconButton, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';

import './Header.css'

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }

  }

  toggleDrawer = () => {
    this.props.history.push('/home');
  }

  getProductCount = () => {
    let totalProducts = 0;
    this.props.cart.forEach(product => {
      totalProducts = totalProducts + product.qty;
    });
    return totalProducts;
  }


  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this._searchProducts());
  };

  _searchProducts = _ => {
    let { searchText } = this.state;
    this.props.searchProducts(searchText);
  }

  render() {
    let { searchText } = this.state;
    return (
      <AppBar className="header-container" >
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Grid container >
            <Grid item xs={2} md={1}>
              <IconButton className="icon-btn" onClick={this.toggleDrawer} edge="start" color="inherit" aria-label="Menu">
                <StarIcon />
              </IconButton>

            </Grid>
            <Grid item xs={1} md={8} className="site-name">
              &nbsp;
            </Grid>
            <Grid item xs={9} md={3} className="right-btns">
              <Input placeholder="Search" disableUnderline={true} name="searchText" onChange={this.onChange} value={searchText} inputProps={{ 'aria-label': 'search' }} />
              <SearchIcon className="icon-spacing" onClick={this._searchProducts} />
              <ShoppingCartIcon onClick={() => this.props.history.push('./cart')} className="icon-spacing" />{this.props.cart.length > 0 && (<span className="cart-items-cnt">{this.getProductCount()}</span>)}
            </Grid>
          </Grid>
        </Typography>
      </AppBar >
    );
  }
}


export default withRouter((HeaderBar));

