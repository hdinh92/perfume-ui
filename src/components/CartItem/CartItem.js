import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { toast } from "react-toastify";
import * as Message from "./../../constants/Message";
class CartItem extends Component {
  state = {
    imageLoadError: true
  };
  format_curency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  onError = e => {
    if (this.state.imageLoadError) {
      this.setState({
        imageLoadError: false
      });
      e.target.src = "http://www.tcnn.vn/Assets/custom/pic/noimage.jpg";
    }
  };
  render() {
    var { item, classes } = this.props;
    var { quantity } = item;

    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
            onError={this.onError}
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{this.format_curency(item.product.price)} VNĐ</td>
        <td className="center-on-small-only  text-center">
          <span className="qty">{quantity}</span>
        </td>
        <td>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className={`btn btn-sm btn-primary btn-rounded waves-effect waves-light ${classes.btnsm}`}
            >
              <a href="# ">—</a>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className={`btn btn-sm btn-primary btn-rounded waves-effect waves-light ${classes.btnsm}`}
            >
              <a href="# ">+</a>
            </label>
          </div>
        </td>

        <td className="text-center">
          { this.showSubTotal(item.product.price, quantity)} VNĐ
        </td>
        <td>
          <button
            type="button"
            className={`btn btn-sm btn-primary btn-rounded waves-effect waves-light ${classes.btnsm}`}
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteItemInCart(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  showSubTotal = (price, quan) => {
    return this.format_curency( price * quan);
  };

  onDeleteItemInCart = product => {
    var r = confirm(
      "Bạn thật sự muốn xóa sản phẩm này?"
    ); /* eslint no-restricted-globals:0 */
    if (r === true) {
      this.props.onDeleteItemInCart(product);
      setTimeout(() => {
        toast.error(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
      }, 50);
    }
  };

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateItemInCart(product, quantity);
    }
  };
}

export default withStyles(styles)(CartItem);
