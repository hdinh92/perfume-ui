import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import routes from "../../routes";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {connect} from 'react-redux'
class App extends Component {
  render() {
    const { classes, cart } = this.props;
    return (
      <Router>
        <div className="hidden-sn animated deep-purple-skin">
          <div>
            {/* Header */}
            <Header cart={cart} />

            <main id="mainContainer" className={classes.main}>
              <div className="container">
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover={false}
                />
                <Switch>{this.showContent(routes)}</Switch>
              </div>
            </main>
            {/* <News/> */}
            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
  showContent = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            component={route.main}
            exact={route.exact}
          ></Route>
        );
      });
    }
    return result;
  };
  onSearch =()=>{
    this.props.onSearch(this.state.keyword)
  }
}
const mapStateToProps = state =>{
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps,null)(withStyles(styles)(App));
