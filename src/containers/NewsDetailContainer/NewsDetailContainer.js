import React, { Component } from "react";
import Info from "../../components/Info/Info";
import NewsRelative from "../../components/NewsRelative/NewsRelative";
import { connect } from "react-redux";
import * as Actions from "../../actions/index";
import _ from "lodash";
import GlobalLoading from "../../components/GlobalLoading/GlobalLoading"
class NewsDetail extends Component {
  componentDidMount() {
    this.props.onShowNews();
  }

  render() {
    
    var { match, news } = this.props;
    if(!news.length){
      return (<div><GlobalLoading/></div>)
    }
    var nid = match.params.id;
    var elmNews = _.sampleSize(news, 3);
    return (
      <div className="container">
        <section className="mt-4">
          <div className="row">
            {news.map(item => {
              if (item.id === nid) {
                return (
                  <div className="col-md-8 mb-4" key={item.id}>
                    {/*Featured Image*/}
                    <div className="card mb-4 wow fadeIn">
                      <img
                        src={item.imageContent}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    {/*/.Featured Image*/}
                    {/*Card*/}
                    <div className="card mb-4 wow fadeIn">
                      {/*Card content*/}
                      <div className="card-body">
                        <p className="h5 my-4">{item.title} </p>
                        <div className = 'card-text'>
                          {item.content}
                        </div>
                      </div>
                    </div>
                    {/*/.Card*/}
                  </div>
                );
              }
              return "";
            })}
            <div className="col-md-4 mb-4">
              <Info />
              <NewsRelative elmNews={elmNews} nid={nid} />
            </div>
          </div>
        </section>
      </div>
   
   
   );
  }
}
const mapStateToProps = state => {
  return {
    news: state.news
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShowNews: () => {
      dispatch(Actions.actFetchNewsRequest());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
