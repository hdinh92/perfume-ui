import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { toast } from "react-toastify";
import * as Message from "./../../constants/Message";
import ModalAddToCartResult from "../ModalAddToCartResult/ModalAddToCartResult";
class Product extends Component {
  state = {
    imageLoadError: true,
    isModal: false
  };
  onError = e => {
    if (this.state.imageLoadError) {
      this.setState({
        imageLoadError: false
      });
      e.target.src =
        "https://s3.anh.im/2019/12/10/no-image-available-icon-66e587d7982efff62.png";
    }
  };
  render() {
    var { product, classes } = this.props;
    var discount = 300000;
    return (
      <React.Fragment>
        
        <div className="col-lg-4 col-md-6 mb-r">
          <div className="card text-center card-cascade narrower ">
            <div className="view overlay hm-white-slight z-depth-1">
              <img
                src={product.image}
                className={`img-fluid ${classes.item}`}
                alt=""
                onError={this.onError}
              />
              <Link to={`/product/${product.id}/${product.name}`}>
                <div className="mask waves-light waves-effect waves-light" />
              </Link>
            </div>
            <div className="card-body">
              <h4 className="card-title">
                <strong>
                  <a href="# ">{product.name}</a>
                </strong>
              </h4>
              <p className={`card-text lead ${classes.price}`}>
                <span className={`mr-2 ${classes.pricedis}`}>
                  <del>
                    {this.format_curency(Number(product.price) + discount)} VNĐ
                  </del>
                </span>
                <span className={classes.price}>
                  {this.format_curency(product.price)} VNĐ
                </span>
              </p>
              <div className="card-footer">
                <Link
                  to="#"
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ModalAddToCartResult isModal={this.state.isModal} onCloseModal={this.onCloseModal}/>
      </React.Fragment>
    );
  }
  onCloseModal = () =>{
    this.setState({
      isModal : false
    });
  }
  onAddToCart = product => {
    this.props.onAddToCart(product);
    toast(Message.MSG_ADD_TO_CART_SUCCESS);
    this.setState({
      isModal: true
    });
  };
  format_curency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
}

export default withStyles(styles)(Product);
