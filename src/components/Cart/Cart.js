import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from './styles'
class Cart extends Component {
  render() {
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th width='30%' />
                <th width='20%'>Sản Phẩm</th>
                <th width='10%'>Giá</th>
                <th width='10%' className="text-center">Số Lượng</th>
                <th width='15%'/>
                <th width='10%'>Tổng Cộng</th>
                <th width='05%'/>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Cart);
