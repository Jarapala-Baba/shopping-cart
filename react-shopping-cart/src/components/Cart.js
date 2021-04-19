import React, { Component } from 'react'
import formatCurrency from '../util';
export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ? <div className="cart cart-header"> Cart is Empty</div> : <div className="cart cart-header"> You have {cartItems.length} in the Cart</ div>}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div >{item.title}</div>
                                    <div className="right">
                                        {item.count} x {formatCurrency((item.price) * 74.47)}
                                        <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 &&
                        <div className="cart">
                            <div className="total">
                                Total:{"  "}
                                {formatCurrency((cartItems.reduce((a, c) => a + c.count * c.price, 0)) * 74.47)}
                            </div>
                            <button className="button primary">
                                Proceed
                     </button>
                        </div>}

                </div>
            </div>

        )
    }
}
