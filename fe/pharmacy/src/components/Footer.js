export default function Footer() {

    return (
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="info_contact">
                            <h5>Tổng đài</h5>
                            <div className="box">
                                <div
                                    className="detail-box"
                                    style={{color: "#ffcb05", fontWeight: "bold", fontSize: 16}}
                                >
                                    <h6>0946197716</h6>
                                </div>
                            </div>
                            <div className="box">
                                <div className="detail-box">
                                    <h6>truongtq20@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_menu">
                            <h5>Hỗ trợ khách hàng</h5>
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="home.html">
                                        Điều kiện giao dịch chung
                                        <span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        Hướng dẫn mua hàng online
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="medicine.html">
                                        Chính sách giao hàng
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="buy.html">
                                        Chính sách thanh toán
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_menu">
                            <h5>Hệ thống thuốc</h5>
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="home.html">
                                        Nội quy nhà thuốc<span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        Chất lượng phục vụ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="medicine.html">
                                        Chính sách đổi trả,bảo hành
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="buy.html">
                                        Tích điểm Quà tặng Vip
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="info_menu">
                            <h5>Về nhà thuốc Trường An</h5>
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="home.html">
                                        Giới thiệu công ty<span className="sr-only"></span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about.html">
                                        Chính sách bảo mật thông tin
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="medicine.html">
                                        Bệnh viện, bác sĩ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="buy.html">
                                        Các loại hóa chất
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}