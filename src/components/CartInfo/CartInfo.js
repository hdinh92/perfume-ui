import React, { Component } from "react";

class CartInfo extends Component {
  showSubTotal = (price, quan) => {
    return this.format_curency(price * quan);
  };
  format_curency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  showTotalAmount = cart => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
  render() {
    const { cart } = this.props;
    var elmItem = cart.map(item => {
      return (
        <li
          className="list-group-item d-flex justify-content-between lh-condensed"
          key={item.product.id}
        >
          <div>
            <h6 className="my-0">{item.product.name}</h6>
            <small className="text-muted">
              Số lượng: <span>{item.quantity}</span>
            </small>
          </div>
          <span className="text-muted">{this.showSubTotal(item.product.price, item.quantity)} VNĐ</span>
        </li>
      );
    });

    return (
      <div className="col-md-4 mb-4">
        {/* Heading */}
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Giỏ hàng của bạn</span>
          <span className="badge badge-secondary badge-pill">
            {cart.length}
          </span>
        </h4>
        {/* Cart */}
        <ul className="list-group mb-3 z-depth-1">
          {elmItem}
          {/* <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">-$5</span>
              </li> */}
          <li className="list-group-item d-flex justify-content-between">
            <span>Tổng tiền (VNĐ)</span>
            <strong>  {this.format_curency(this.showTotalAmount(cart))} VNĐ</strong>
          </li>
        </ul>
        {/* Cart */}
        {/* Promo code */}
        {/* <form className="card p-2">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Promo code"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary btn-md waves-effect m-0"
                    type="button"
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </form> */}
        {/* Promo code */}
      </div>
    );
  }
}

export default CartInfo;
