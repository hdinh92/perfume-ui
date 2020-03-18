import React, { Component } from "react";
import { MDBModal } from "mdbreact";
class ResultModal extends Component {
  state = {
    modal: false
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
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
    const { isModal, onCloseModal, customerInfo, cart } = this.props;
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
          <span className="text-muted">
            {this.showSubTotal(item.product.price, item.quantity)} VNĐ
          </span>
        </li>
      );
    });
    return (
      <React.Fragment>
        <MDBModal
          backdrop={false}
          isOpen={isModal}
          centered
          size="lg"
        >
          <div
            className="modal-dialog modal-notify modal-success modal-fluid "
            role="document"
          >
            {/*Content*/}
            <div className="modal-content">
              <div className="modal-header text-center">
                <p className="heading lead ">Cám ơn quý khách đã mua hàng</p>
              </div>

              <div className="modal-body">
                <div className="text-center">
                  <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
                  <div className="col-md-12">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Tên Khách hàng</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Địa chỉ nhận hàng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{customerInfo.txtName}</td>
                          <td>{customerInfo.txtPhone}</td>
                          <td>{customerInfo.txtAdd}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-md-12">
                    <ul className="list-group mb-3 z-depth-1">
                      {elmItem}
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Tổng tiền (VNĐ)</span>
                        <strong>
                          {" "}
                          {this.format_curency(this.showTotalAmount(cart))} VNĐ
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={onCloseModal}
                >
                  Trở về
                </button>
              </div>
            </div>
            {/*/.Content*/}
          </div>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default ResultModal;
