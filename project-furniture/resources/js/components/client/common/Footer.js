import React, { Component, useState } from 'react';
import Brand from '../../../components/client/module/Brand';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 200) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <footer className="footer">
            <Brand />
            <div className="mid-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="widget-ft">
                                <div className="logo_footer">
                                    <Link to="/" className="logo-wrapper" title="Sea Furniture">
                                        <img src="//bizweb.dktcdn.net/100/364/402/themes/733752/assets/logo.png?1594608135913" alt="logo Sea Furniture" />
                                    </Link>
                                </div>
                                <div className="widget-ft-top">
                                    <h4 className="title-menu-top">
                                        <span>
                                            Siêu thị nội thất Sea Furniture
                    </span>
                                    </h4>
                                    <div className="hotline_footer">
                                        <ul className="padding-0">
                                            <li>
                                                Trụ sở chính:
                                                30 Phạm Văn Đồng, Hà Nội
                    </li>
                                            <li>
                                                Hotline: <Link className="hai01" to="tel:0359329688">0359329688</Link>
                                            </li>
                                            <li>
                                                Email: <Link to="mailto:seateam2512@gmail.com">seateam2512@gmail.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="widget-ft first">
                                        <h4 className="title-menu">
                                            <Link to='#' role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu01" aria-controls="collapseListMenu01">
                                                Về chúng tôi <i className="fa fa-plus" aria-hidden="true" />
                                            </Link>
                                        </h4>
                                        <div className="collapse" id="collapseListMenu01">
                                            <ul className="list-menu">
                                                <li className="li_menu"><Link to="/">Trang chủ</Link></li>
                                                <li className="li_menu"><Link to="/gioi-thieu">Giới thiệu</Link></li>
                                                <li className="li_menu"><Link to="/collections/all">Sản phẩm</Link></li>
                                                <li className="li_menu"><Link to="/tin-tuc">Tin tức</Link></li>
                                                <li className="li_menu"><Link to="/lien-he">Liên hệ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="widget-ft">
                                        <h4 className="title-menu">
                                            <Link to='#' role="button" className="collapsed" data-toggle="collapse" aria-expanded="false" data-target="#collapseListMenu02" aria-controls="collapseListMenu02">
                                                Tin khuyến mãi <i className="fa fa-plus" aria-hidden="true" />
                                            </Link>
                                        </h4>
                                        <div className="collapse time_work" id="collapseListMenu02">
                                            <ul className="list-menu">
                                                <li className="li_menu"><Link to="/">Trang chủ</Link></li>
                                                <li className="li_menu"><Link to="/gioi-thieu">Giới thiệu</Link></li>
                                                <li className="li_menu"><Link to="/collections/all">Sản phẩm</Link></li>
                                                <li className="li_menu"><Link to="/tin-tuc">Tin tức</Link></li>
                                                <li className="li_menu"><Link to="/lien-he">Liên hệ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                    <div className="widget-ft last social_footer">
                                        <div className="social_footer">
                                            <h4 className="title-menu icon_none_first icon_title_last">
                                                <Link to='#'>Tổng đài hỗ trợ</Link>
                                            </h4>
                                            <ul className="hour_24">
                                                <li>
                                                    <span className="icon_style_base"><img src="//bizweb.dktcdn.net/100/364/402/themes/733752/assets/24-hours.svg?1594608135913" alt="logo Sea Furniture" /> </span><Link className="a_topright" to="tel:0359329688">0359329688</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mail_footer">
                                            <h4 className="title-menu icon_none_first title_mail">
                                                <Link to='#'>Nhận tin khuyến mãi</Link>
                                            </h4>
                                            <ul className="contact contact_mail">
                                                <li>
                                                    <form className="margin-bottom-0" action="https://sapo.us19.list-manage.com/subscribe/post?u=2887dcda77021868cccd236ea&id=7ace19f37b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                                        <input type="email" placeholder="Nhập email..." name="EMAIL" id="mail" />
                                                        <button className="btn btn-primary subscribe" name="subscribe" id="subscribe">Đăng ký</button>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-footer-bottom copyright clearfix">
                <div className="container">
                    <div className="inner clearfix">
                        <div className="row tablet">
                            <div id="copyright" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 a-center fot_copyright">
                                <span className="wsp">
                                    <span className="mobile">Bản quyền thuộc về <b>Sea Team</b><span className="hidden-xs"> | </span></span>
                                    <span className="opacity1">Cung cấp bởi</span>
                                    <Link to="https://www.sapo.vn/?utm_campaign=cpn:site_khach_hang-plm:footer&utm_source=site_khach_hang&utm_medium=referral&utm_content=fm:text_link-km:-sz:&utm_term=&campaign=site_khach_hang" rel="nofollow" title="Sapo" target="_blank">Sapo</Link>
                                </span></div>
                        </div>
                    </div>
                    <Link to="#" onClick={() => scrollTop()} className="backtop show" title="Lên đầu trang" style={{ display: showScroll ? 'flex' : 'none' }}>
                        <div className="border_btt">
                            <i className="fas fa-arrow-up"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
