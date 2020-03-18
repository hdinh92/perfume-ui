import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { connect } from "react-redux";
import * as Actions from "../../actions/index";
import { Link } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import * as Message from "./../../constants/Message";
import GlobalLoading from "../../components/GlobalLoading/GlobalLoading"
class ProductDetail extends Component {
  state = {
    imageLoadError: true
  };
  componentDidMount() {
    this.props.onShowProduct();
  }
  onError = e => {
    if (this.state.imageLoadError) {
      this.setState({
        imageLoadError: false
      });
      e.target.src =
        "https://s3.anh.im/2019/12/10/no-image-available-icon-66e587d7982efff62.png";
    }
  };

  format_curency = price => {
    return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };
  onAddToCart = product => {
    this.props.onAddToCart(product);
    toast(Message.MSG_ADD_TO_CART_SUCCESS);
  };
  render() {
    var { match, products, classes } = this.props;
    if(!products.length){
      return (<div><GlobalLoading/></div>)
    }
    var pid = match.params.id;
    var discount = 300000;
   
    return (
      <React.Fragment>
        {products.map(product => {
          if (product.id === pid) {
            var item = _.sampleSize(products, 3);
            return (
              <div className="row wow fadeIn" key={product.id}>
                <div className="col-md-6 mb-4">
                  <img
                    src={product.image}
                    className={`img-fluid ${classes.img}`}
                    alt={product.name}
                    onError={this.onError}
                  />
                </div>
                <div className="col-md-6 mb-4">
                  {/*Content*/}
                  <div className="p-4">
                    <div className="mb-3">
                      <h4 className={classes.name}>
                        <strong>{product.name}</strong>
                      </h4>
                    </div>
                    <p className="lead">
                      <span className="mr-1">
                        <del>
                          {this.format_curency(
                            Number(product.price) + discount
                          )}{" "}
                          VNĐ
                        </del>
                      </span>
                      <span className={classes.price}>
                        {this.format_curency(product.price)} VNĐ
                      </span>
                    </p>
                    <p className="lead font-weight-bold">Mô tả</p>
                    <p>{product.description}</p>
                    <div className="d-flex justify-content-left">
                      <button
                        className="btn btn-primary btn-lg "
                        onClick={() => this.onAddToCart(product)}
                      >
                        Add to cart
                        <i className="fa fa-shopping-cart ml-1" />
                      </button>
                    </div>
                  </div>
                  {/*Content*/}
                </div>
                {/*Grid column*/}
                <hr />
                {/*Recommnend item*/}
                <div className="row d-flex justify-content-center wow fadeIn">
                  <div className="col-md-6 text-center">
                    <h4 className="my-4 h4">Có thể bạn quan tâm</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus suscipit modi sapiente illo soluta odit voluptates,
                      quibusdam officia. Neque quibusdam quas a quis porro?
                      Molestias illo neque eum in laborum.
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="row wow fadeIn">
                    {this.showRecommendItem(item, product.id)}
                  </div>
                </div>
              </div>
            );
          }
          return "";
        })}
      </React.Fragment>
    );
  }
  showRecommendItem = (item, pid) => {
    var result = null;
    const { classes } = this.props;
    result = item.map(val => {
      if (val.id !== pid) {
        return (
          <div className="col-lg-4 col-md-12 mb-4" key={val.id}>
            <div className="view overlay hm-white-slight z-depth-1">
              <img
                src={val.image}
                className={`img-fluid ${classes.reimg}`}
                alt={val.name}
              />
              <Link to={`/product/${val.id}/${val.name}`}>
                <div className="mask waves-light waves-effect waves-light" />
              </Link>
            </div>
          </div>
        );
      }
      return "";
    });
    return result;
  };
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShowProduct: () => {
      dispatch(Actions.actFetchProductsRequest());
    },
    onAddToCart: product => {
      dispatch(Actions.actAddToCart(product, 1));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ProductDetail));
