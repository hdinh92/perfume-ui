import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import {Link} from 'react-router-dom'
class NewsRelative extends Component {
  showNewRelative = (item, nid) => {
    var result = null;
    const { classes } = this.props;
    result = item.map(val => {
      if (val.id !== nid) {
        return (
          <li className="media my-4" key={val.id}>
            <img
              className={`d-flex mr-3 ${classes.img}`}
              src={val.image}
              alt={val.title}
            />
            <div className="media-body">
              <Link to={`/blog/${val.id}`}>
                <h5 className="mt-0 mb-1 font-weight-bold">
                {val.title}
                </h5>
              </Link>
            </div>
          </li>
        );
      }
      return ''
    });
    return result;
  };
  render() {
    const { elmNews, nid } = this.props;
    return (
      <div className="card mb-4 wow fadeIn">
        <div className="card-header">Tin khuyến mãi</div>
        {/*Card content*/}
        <div className="card-body">
          <ul className="list-unstyled">
            {/* <li className="media my-4">
                  <img
                    className="d-flex mr-3"
                    src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg"
                    alt=""
                  />
                  <div className="media-body">
                    <a href ="# ">
                      <h5 className="mt-0 mb-1 font-weight-bold">
                        List-based media object
                      </h5>
                    </a>
                  </div>
                </li> */}
                {this.showNewRelative(elmNews, nid)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(NewsRelative);
