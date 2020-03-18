import React, { Component } from "react";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBIcon,
  MDBCol,
} from "mdbreact";
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
class ModalAddToCartResult extends Component {
    onCloseModal = () =>{
        this.props.onCloseModal()
    }
  render() {
      const {isModal, classes} = this.props
    return (
        <MDBModal
          className={`modal-notify modal-info text-white `}
          centered
          backdrop={false}
          isOpen={isModal}
        >
          <MDBModalHeader tag="p" toggle={this.toggle} className={classes.cl}>
           Thêm giỏ hàng thành công
          </MDBModalHeader>
          <MDBModalBody>
            <MDBRow>
              <MDBCol
                size="3"
                className="d-flex justify-content-center align-items-center"
              >
                <MDBIcon size="4x" icon="shopping-cart" className="ml-1" />
              </MDBCol>
              <MDBCol size="9">
                <p>Bạn vẫn muốn tiếp tục mua sắm chứ?</p>
                <p>
                 Không vấn đề gì, sản phẩm bạn vừa chọn đã được gửi vào giỏ hàng
                </p>
              </MDBCol>
            </MDBRow>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <Link className='btn btn-info' onClick={this.onCloseModal} to='/cart'>
            Giỏ hàng
            </Link>
            <Link className={`btn btn-primary ${classes.btn}`}  onClick={this.onCloseModal} to='#'>
              Cancel
            </Link>
          </MDBModalFooter>
        </MDBModal>
    );
  }
}

export default (withStyles(styles)(ModalAddToCartResult));
