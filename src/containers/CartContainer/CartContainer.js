import React, { Component } from "react";
import Cart from "../../components/Cart/Cart";
import CartItem from "../../components/CartItem/CartItem";
import CartResult from "../../components/CartResult/CartResult";
import { connect } from "react-redux";
import * as Message from "./../../constants/Message";
import * as Actions from "./../../actions/index";
import { Link } from "react-router-dom";

class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
        </Cart>
      </div>
    );
  }
  showCartItem = cart => {
    var result = Message.MSG_CART_EMPTY;
    var { onDeleteItemInCart, onUpdateItemInCart } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteItemInCart={onDeleteItemInCart}
            onUpdateItemInCart={onUpdateItemInCart}
          ></CartItem>
        );
      })
    }else{
        return (<div>{Message.MSG_CART_EMPTY }<Link to='/' className="btn btn-primary ml-3">Quay lại</Link></div>)
    }
    return result;
  };
  showTotalAmount = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}></CartResult>;
    }
    return result;
  };
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteItemInCart: product => {
      dispatch(Actions.actDeleteProductInCart(product));
    },
    onUpdateItemInCart: (product, quantity) => {
      dispatch(Actions.actUpdateProductInCart(product, quantity));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
