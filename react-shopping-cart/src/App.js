import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import store from './store';

//Test Commit
class App extends Component {

  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
  }

  
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter(item => item._id !== product._id) })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(item => item._id !== product._id)));
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyOInCart = false;
    cartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyOInCart = true;
      }
    })

    if (!alreadyOInCart) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  createOrder = (order) => {
    alert("Need To Save Order for :" + order.name)
  }


  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header >
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter>
                </Filter>
                <Products addToCart={this.addToCart}></Products>
              </div>
              <div className="sidebar">
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
              </div>
            </div>
          </main>
          <footer>
            All right is Reserved.
      </footer>
        </div>
      </Provider>
    );
  }
}

export default App;
