import React, { Component } from "react";
import News from "../../components/News/News";
import * as Actions from './../../actions/index'
import { connect } from "react-redux";

class NewsComponent extends Component {
    componentDidMount() {
        this.props.onShowNews()
    }
    
  render() {
    const { news } = this.props;
    return <News news={news}></News>;
  }
}
const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onShowNews : ()=>{
          dispatch(Actions.actFetchNewsRequest())
      }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
