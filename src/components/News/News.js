import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Link } from 'react-router-dom'
class News extends Component {
  render() {
    const { classes, news } = this.props;
    var elmNews = news.map(item=> {
      return (
        <Carousel.Item className={classes.carousel} key={item.id}>
          <div className="row">
            <div className="col-md-6 div-l">
              <div
                className={`carousel-img ${classes.item}`}
                style={{
                  backgroundImage:
                    `url(${item.image})`
                }}
              ></div>
            </div>
            <div className={`col-md-6 div-r ${classes.divr}`}>
              <h3 className={classes.title}>
                {item.title}
              </h3>
              <hr />
              <p>
                {item.content}
              </p>
              <Link to={`/blog/${item.id}`} className="btn btn-danger waves-effect waves-light">
                Xem chi tiết
              </Link>
            </div>
          </div>
        </Carousel.Item>
      );
    });
    return (
      <Carousel>
        {elmNews}
      </Carousel>
    );
  }
}

export default withStyles(styles)(News);
