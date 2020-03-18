import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./../../actions/index";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {Link} from 'react-router-dom'
class SearchContainer extends Component {
  state = {
    keyword: ""
  };
  onHandleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };
  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="search-form">
        <div className="input-group">
          <input
            name="keyword"
            value={this.state.keyword}
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
            onChange={this.onHandleChange}
          />
          <Link
            to='/'
            className={`btn ${classes.btnm}`}
            type="button"
            onClick={this.onSearch}
          >
            <i className="fa fa-search" />
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    onSearch: keyword => {
      dispatch(Actions.actSeatch(keyword));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SearchContainer));
