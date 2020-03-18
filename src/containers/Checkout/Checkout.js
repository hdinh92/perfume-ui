import React, { Component } from "react";
import CartInfo from "../../components/CartInfo/CartInfo";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as Actions from "./../../actions/index";
import ResultModal from "../../components/ResultModal/ResultModal";
class Checkout extends Component {
  state = {
    txtName: "",
    txtAdd: "",
    txtPhone: "",
    txtEmail: "",
    isModal: false
  };
   randomID = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
  submitHandler = e => {
    var { txtName, txtAdd, txtPhone, txtEmail } = this.state;
    e.preventDefault();
    e.target.className += " was-validated";
    var cart = this.props.cart;
    const order = {
      item: cart,
      customer: {
        name: txtName,
        add: txtAdd,
        phone: txtPhone,
        email: txtEmail
      },
      orderDate : new Date().toLocaleDateString(),
      orderID : this.randomID(10),
      status : 0
    };

    if (e.target.checkValidity()) {
      this.props.onCheckOut(order);
      this.setState({
        isModal: true
      });
    }
  };
  onCloseModal = () => {
    const { history } = this.props;
    this.setState({
      isModal: false
    });
    this.props.onClearCart();
    localStorage.removeItem("CART");
    history.push("/");
  };
  changeHandler = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { txtName, txtAdd, txtPhone, txtEmail, isModal } = this.state;
    const { cart } = this.props;
    if (!cart.length) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="container wow fadeIn">
        <h2 className="my-5 h2 text-center">Thanh toán</h2>
        <div className="row">
          <div className="col-md-8 mb-4">
            <div className="card">
              <form
                className="card-body"
                onSubmit={this.submitHandler}
                noValidate
              >
                <div className="col-md-11 mb-3">
                  <div className="md-form form-group">
                    <input
                      type="text"
                      id="txtName"
                      className="form-control"
                      name="txtName"
                      onChange={this.changeHandler}
                      value={txtName}
                      required
                      validate
                    />
                    <label htmlFor="firstName">Họ tên khách hàng</label>
                    <div className="invalid-feedback">Vui lòng điền họ tên</div>
                  </div>
                </div>
                <div className="col-md-11 mb-3">
                  <div className="md-form form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="txtEmail"
                      onChange={this.changeHandler}
                      value={txtEmail}
                      required
                      validate
                    />
                    <label htmlFor="firstName">Email người nhận</label>
                    <div className="invalid-feedback">Vui lòng nhập Email</div>
                  </div>
                </div>
                <div className="col-md-11 mb-3">
                  <div className="md-form form-group">
                    <input
                      type="text"
                      id="txtPhone"
                      className="form-control"
                      name="txtPhone"
                      onChange={this.changeHandler}
                      value={txtPhone}
                      required
                      validate
                      minLength="9"
                    />
                    <label htmlFor="firstName">Số điện thoại người nhận</label>
                    <div className="invalid-feedback">
                      Số điện thoại không phù hợp ( tối thiểu 7 số)
                    </div>
                  </div>
                </div>
                <div className="col-md-11 mb-3">
                  <div className="md-form form-group">
                    <input
                      type="text"
                      id="txtAdd"
                      className="form-control"
                      name="txtAdd"
                      onChange={this.changeHandler}
                      value={txtAdd}
                      required
                      validate
                    />
                    <label htmlFor="firstName">Địa chỉ người nhận</label>
                    <div className="invalid-feedback">
                      Vui lòng điền địa chỉ nhận
                    </div>
                  </div>
                </div>

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Lấy hóa đơn
                  </label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    Ghi nhớ thông tin cho lần mua tiếp theo
                  </label>
                </div>
                <hr />
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      defaultChecked
                      required
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Đồng ý thanh toán
                </button>
              </form>
            </div>
            {/*/.Card*/}
          </div>
          <CartInfo cart={cart}></CartInfo>
          <div className="col-md-12 mb-4">
            {" "}
            <ResultModal
              isModal={isModal}
              onCloseModal={this.onCloseModal}
              customerInfo={this.state}
              cart={cart}
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCheckOut: order => {
      dispatch(Actions.actCheckOutRequest(order));
    },
    onClearCart: () => {
      dispatch(Actions.actClearCart());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
