import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'antd';
import Cart from './Cart';
import ProductsContainer from './ProductsContainer';
import Search from './Search';
import {
  allProducts,
  filterProducts,
  productsModel,
} from './constants'

class Shopping1 extends Component {
  constructor() {
    super();
    this.state = {
      qty: [10, 8, 15, 5],
      products: allProducts,
      selectProducts: [],
      selectQty: [0, 0, 0, 0],
      filterProducts,
    }
    this.searchItem = this.searchItem.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.addCart = this.addCart.bind(this)
  }

  addCart(index) {
    const currentQty = this.state.qty;
    const selQty = this.state.selectQty;

    console.log(currentQty);
    const indexNum = index / 1;
    if (currentQty[indexNum] > 0) {
      currentQty[indexNum]--;
      selQty[indexNum]++;
    } else {
      alert('Sorry,out of stock.')
    }

    const {
      selectProducts,
      products,
    } = this.state;

    const cart = selectProducts;
    const item = products[indexNum];
    cart.push(item.name);
    this.setState({
      selectProducts: cart,
      selectQty: selQty,
      qty: currentQty
    })
  }

  searchItem(itemName) {
    let finditem = false;
    if (itemName == '') {
      this.setState({
        filterProducts: productsModel
      });
    } else {
      for (let i = 0; i < productsModel.length; i++) {
        if (productsModel[i].name == itemName) {
          const tmpProducts = [];
          tmpProducts.push(productsModel[i]);
          this.setState({ filterProducts: tmpProducts });
          finditem = true;
          break;
        }
      }
      if (!finditem) {
        this.setState({
          filterProducts: []
        });
      }
    }
  }

  handleRemove(quantity, id) {
    const originalQty = [10, 8, 15, 5];
    const selProducts = this.state.selectProducts;
    const pname = productsModel[id].name;
    for (let i = 0; i < selProducts.length; i++) {
      const index = selProducts.indexOf(pname);
      if (index > -1) {
        selProducts.splice(index, 1);
      }
    }
    const selQty = this.state.selectQty;
    selQty[id] = 0;
    const tmpQty = this.state.qty;
    tmpQty[id] = originalQty[id];
    this.setState({
      selectProducts: selProducts,
      selectQty: selQty,
      qty: tmpQty
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Search
              searchItem={this.searchItem} />
            <ProductsContainer
              addCart={this.addCart}
              products={this.state.filterProducts}
              qty={this.state.qty} />
          </Col>
        </Row>
        <Row>
          <Cart
            handleRemove={this.handleRemove}
            selectProducts={this.state.selectProducts}
            qty={this.state.selectQty}
            pModel={this.state.products} />
        </Row>
      </div>
    )
  }
}

export default Shopping1
