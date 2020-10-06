import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ListNews = () => {
    return (
        <section className="awe-section-8">
            <div className="section_new_blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading1">
                                <h2><Link to="tin-tuc" title="Mẹo vặt hay">Mẹo vặt hay</Link></h2>
                            </div>
                            <div className="content_blog_new margin-top-30">
                                <div className="wrap_owl_blog owl-carousel owl-loaded owl-drag" data-lg-items={3} data-md-items={3} data-sm-items={2} data-xs-items={1} data-loop="false" data-height="false" data-dot="false" data-nav="false">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1170px' }}><div className="owl-item active" style={{ width: '360px', marginRight: '30px' }}>
                                            <div className="blog_index">
                                                <div className="myblog">
                                                    <div className="image-blog-left a-center">
                                                        <Link to="/chi-tiet-tin-tuc">
                                                            <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/blog-grid-11.jpg?v=1566957209953" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/blog-grid-11.jpg?v=1566957209953" title="Mẹo bảo quản & vệ sinh các đồ nội thất" alt="Mẹo bảo quản & vệ sinh các đồ nội thất" />
                                                        </Link>
                                                        <div className="date_blog">
                                                            <i className="far fa-calendar-check" /><b className="color_main">28/08/2019</b>
                                    &nbsp; Đăng bởi: <b className="color_main">Sea Team</b>
                                                        </div>
                                                    </div>
                                                    <div className="content_blog">
                                                        <div className="content_right">
                                                            <h3>
                                                                <Link to="/chi-tiet-tin-tuc" title="Mẹo bảo quản & vệ sinh các đồ nội thất">Mẹo bảo quản &amp; vệ sinh các đồ nội thất</Link>
                                                            </h3>
                                                        </div>
                                                        <div className="summary_item_blog">
                                                            <p> Đối với nội thất bằng kim loại
                                                            - Khi xử lý các vết bẩn thông thường, bạn chỉ cầ...
                                    </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            <div className="owl-item active" style={{ width: '360px', marginRight: '30px' }}>
                                                <div className="blog_index">
                                                    <div className="myblog">
                                                        <div className="image-blog-left a-center">
                                                            <Link to="/chi-tiet-tin-tuc">
                                                                <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/blog-grid-15.jpg?v=1566957112260" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/blog-grid-15.jpg?v=1566957112260" title="Thư thái trong chính căn hộ của bạn" alt="Thư thái trong chính căn hộ của bạn" />
                                                            </Link>
                                                            <div className="date_blog">
                                                                <i className="far fa-calendar-check" /><b className="color_main">28/08/2019</b>
                                 &nbsp; Đăng bởi: <b className="color_main">Sea Team</b>
                                                            </div>
                                                        </div>
                                                        <div className="content_blog">
                                                            <div className="content_right">
                                                                <h3>
                                                                    <Link to="/chi-tiet-tin-tuc" title="Thư thái trong chính căn hộ của bạn">Thư thái trong chính căn hộ của bạn</Link>
                                                                </h3>
                                                            </div>
                                                            <div className="summary_item_blog">
                                                                <p> Nét thư thái và thanh lịch là cảm nhận đầu tiên mà Nhà nghĩ tới khi kể cho khách ...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active" style={{ width: '360px', marginRight: '30px' }}>
                                                <div className="blog_index">
                                                    <div className="myblog">
                                                        <div className="image-blog-left a-center">
                                                            <Link to="/chi-tiet-tin-tuc">
                                                                <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/dining-suite-for-sale.jpg?v=1566956905357" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/articles/dining-suite-for-sale.jpg?v=1566956905357" title="Bảo quản đồ gỗ khi độ ẩm không khí cao" alt="Bảo quản đồ gỗ khi độ ẩm không khí cao" />
                                                            </Link>
                                                            <div className="date_blog">
                                                                <i className="far fa-calendar-check" /><b className="color_main">28/08/2019</b>
                              &nbsp; Đăng bởi: <b className="color_main">Sea Team</b>
                                                            </div>
                                                        </div>
                                                        <div className="content_blog">
                                                            <div className="content_right">
                                                                <h3>
                                                                    <Link to="/chi-tiet-tin-tuc" title="Bảo quản đồ gỗ khi độ ẩm không khí cao">Bảo quản đồ gỗ khi độ ẩm không khí cao</Link>
                                                                </h3>
                                                            </div>
                                                            <div className="summary_item_blog">
                                                                <p> Đồ nội thất bằng gỗ chất lượng cao là một sự đầu tư tuyệt vời để trang trí ngôi n...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <div className="owl-prev disabled">prev</div>
                                        <div className="owl-next disabled">next</div>
                                    </div>
                                    <div className="owl-dots disabled">
                                        <div className="owl-dot active"><span /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListNews
