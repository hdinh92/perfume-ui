import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
class Warranty extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid mb-5">
          <section className="banner-section"></section>
          <section className="post-content-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
                  <h1 className="text-center">Chính sách đổi trả</h1>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p className="lead">
                    Với mong muốn mang lại sự hài lòng cho quý khách khi mua
                    hàng tại showroom & mua hàng trực tuyến tại iperfume.
                    Chúng tôi xin cam kết tất cả sản phẩm của shop đều là chính
                    hãng, hàng Authentic 100%. Những sản phẩm chúng tôi cung cấp
                    khi đến tay người tiêu dùng đều được dán tem bảo hành dưới
                    đáy chai, lọ – Tem vàng có số 123. sản phẩm này sẽ được bảo
                    hành đổi trả trong 15 ngày kể từ ngày mua hàng. Qui định cụ
                    thể như sau:
                  </p>
                  <div className="well ">
                    <p> 01 đổi 01 trong 15 ngày miễn phí:</p>
                  </div>
                  <blockquote>
                    <p>
                      Trường hợp sản phẩm bị lỗi do nhà sản xuất, sản phẩm kém
                      chất lượng, sản phẩm không đúng chủng loại, mẫu mã, số
                      lượng như đã đặt hàng, Quý khách không hài lòng chất lượng
                      – Quý khách sẽ được đổi sản phẩm khác hoặc trả lại mà
                      không mất khoản phí nào.
                    </p>
                  </blockquote>
                  <div className="well ">
                    <p> Đổi trả hàng 15 ngày có phí:</p>
                  </div>
                  <blockquote>
                    <p>
                      Trường hợp vì lý do cá nhân, không thích mùi hương, muốn
                      đổi sản phẩm khác, sử dụng quá mức qui định (hơn 5%) trong
                      thời hạn mua hàng chưa quá 15 ngày thì Quý khách vẫn được
                      đổi sản phẩm với mức phí là 10% giá trị sản phẩm và các
                      chi phí vận chuyển (nếu có)
                    </p>
                  </blockquote>
                  <div className="well ">
                    <p>Bảo hành mùi hương sản phẩm 24 tháng:</p>
                  </div>
                  <blockquote>
                    <p>
                      Trường hợp quý khách mua hàng và sử dụng trong vòng 24
                      tháng kể từ ngày mua mà sản phẩm bị biến đổi mùi hương quá
                      mức cho phép của nhà sản xuất (mùi hương bị biến đổi hoàn
                      toàn& không còn như mùi hương ban đầu) thì Quý khách sẽ
                      được đổi sản phẩm theo giá trị % hiện tại (lưu ý : chúng
                      tôi không bảo hành thân, vỏ chai, đầu xịt )
                    </p>
                  </blockquote>
                  <div className="well ">
                    <p>Sản phẩm không bảo hành đổi trả</p>
                  </div>
                  <blockquote>
                    <ul>
                      <li>
                        <p>
                          Hàng không có tem bảo hành hoặc tem bảo hành bị rách,
                          biến dạng
                        </p>
                      </li>
                      <li>
                        <p>Quá thời hạn bảo hành quy định</p>
                      </li>
                      <li>
                        <p>Không bảo hành lỗi chai/vòi xịt do nhà sản xuất</p>
                      </li>
                      <li>
                        <p>Không bảo hành đối với sản phẩm mini </p>
                      </li>
                      <li>
                        <p>Không đổi trả lotion, sữa tắm, lăn khử mùi</p>
                      </li>
                    </ul>
                  </blockquote>
                  <div className="well ">
                    <h3>Bộ Phận Tiếp Nhận Đổi Trả Hàng:</h3>
                    <p className="lead">
                      Xin Quý khách vui lòng liên hệ tổng đài hỗ trợ 012 3456
                      7890 hoặc trực tiếp đến những Showroom của chúng tôi từ 12
                      – 21h hàng ngày. Ngoài ra có thể liên hệ qua email
                      sales@iperfume.com chúng tôi sẽ chủ động gọi điện để hỗ
                      trợ Quý khách chi tiết thời gian & địa điểm đổi hàng cụ
                      thể trong thời gian sớm nhất.
                    </p>
                    <footer>
                      {" "}
                      Chúng tôi rất mong tiếp tục nhận được sự ủng hộ và góp ý
                      của Quý khách để ngày càng hoàn thiện dịch vụ chăm sóc
                      khách hàng, nhằm mang đến sự hài lòng của Quý khách !
                    </footer>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* /container */}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Warranty);
