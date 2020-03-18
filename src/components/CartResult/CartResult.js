import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Link } from "react-router-dom";
class CartResult extends Component {
  format_curency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  render() {
    const { cart, classes } = this.props;
    return (
      <tr>
        <td colSpan={1}>
          <Link
            to="/"
            className={`btn btn-primary waves-effect waves-light ${classes.btnback}`}
          >
            <i className="fa fa-angle-left left" />
            Tiếp tục mua hàng
          </Link>
        </td>
        <td colSpan={2}>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td colSpan={2}>
          <h4>
            <strong>
              {this.format_curency(this.showTotalAmount(cart))} VNĐ
            </strong>
          </h4>
        </td>
        <td colSpan={3}>
          <Link
           to='/checkout'
            className={`btn btn-primary waves-effect waves-purple ${classes.btn}`}
          >
            Thanh toán
            <i className="fa fa-angle-right right" />
          </Link>
        </td>
      </tr>
    );
  }
  showTotalAmount = cart => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
}

export default withStyles(styles)(CartResult);
