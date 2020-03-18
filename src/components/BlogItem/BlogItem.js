import React, { Component } from 'react';

class BlogItem extends Component {
    render() {
        return (
            <React.Fragment>
                  <hr className="mb-5" />
          {/*Grid row*/}
          <div className="row mt-3 wow fadeIn">
            {/*Grid column*/}
            <div className="col-lg-5 col-xl-4 mb-4">
              {/*Featured image*/}
              <div className="view overlay rounded z-depth-1">
                <img
                  src="https://mdbootstrap.com/wp-content/uploads/2017/11/brandflow-tutorial-fb.jpg"
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/"
                >
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
              <h3 className="mb-3 font-weight-bold dark-grey-text">
                <strong>Bootstrap Automation</strong>
              </h3>
              <p className="grey-text">
                Learn how to create a smart website which learns your user and
                reacts properly to his behavior.
              </p>
              <a
                href="https://mdbootstrap.com/education/tech-marketing/automated-app-introduction/"
                className="btn btn-warning btn-md"
              >
                Start tutorial
                <i className="fa fa-caret-right ml-2" />
              </a>
            </div>
            {/*Grid column*/}
          </div>
            </React.Fragment>
        );
    }
}

export default BlogItem;