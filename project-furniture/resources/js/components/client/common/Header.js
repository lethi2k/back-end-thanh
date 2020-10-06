import React, { Component, useState } from 'react';
import Logo from '../../../assets/client/images/logos/logo.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Header = () => {
    const [status, setStatus] = useState(false);
    const toggleMenu = () => {
        setStatus(!status);
    }
    return (
        <div className="header">
            <div id="mySidenav" className="sidenav menu_mobile hidden-md hidden-lg">
                <div className="top_menu_mobile">
                    <span className="close_menu">
                    </span>
                </div>
                <div className="content_memu_mb">
                    <div className="NavLink_list_mobile">
                        <ul className="ct-mobile hidden">
                        </ul>
                        <ul className="ct-mobile">
                            <li className="level0 level-top parent level_ico">
                                <NavLink to="/">Trang chủ</NavLink>
                            </li>
                            <li className="level0 level-top parent level_ico">
                                <NavLink to="/gioi-thieu">Giới thiệu</NavLink>
                            </li>
                            <li className="level0 level-top parent level_ico">
                                <NavLink to="/san-pham">Sản phẩm</NavLink>
                                <i className="ti-plus hide_close" />
                                <ul className="level0 sub-menu" style={{ display: 'none' }}>
                                    <li className="level1">
                                        <NavLink to="sofa.html"><span>Sofa</span></NavLink>
                                        <i className="ti-plus hide_close" />
                                        <ul className="level1 sub-menu" style={{ display: 'none' }}>
                                            <li className="level2">
                                                <NavLink to="sofa-giuong.html"><span>Sofa giường</span></NavLink>
                                            </li>
                                            <li className="level2">
                                                <NavLink to="sofa-bang.html"><span>Sofa băng</span></NavLink>
                                            </li>
                                            <li className="level2">
                                                <NavLink to="sofa-don.html"><span>Sofa đơn</span></NavLink>
                                            </li>
                                            <li className="level2">
                                                <NavLink to="index.html"><span>Sofa đôi</span></NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level1">
                                        <NavLink to="ghe.html"><span>Ghế</span></NavLink>
                                    </li>
                                    <li className="level1">
                                        <NavLink to="trang-tri.html"><span>Trang trí</span></NavLink>
                                    </li>
                                    <li className="level1">
                                        <NavLink to="ke-sach.html"><span>Kệ sách</span></NavLink>
                                    </li>
                                    <li className="level1">
                                        <NavLink to="ban.html"><span>Bàn</span></NavLink>
                                    </li>
                                    <li className="level1">
                                        <NavLink to="tu-quan-ao.html"><span>Tủ quần áo</span></NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="level0 level-top parent level_ico">
                                <NavLink to="tin-tuc.html">Tin tức</NavLink>
                            </li>
                            <li className="level0 level-top parent level_ico">
                                <NavLink to="lien-he.html">Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* End */}
            {/* HEADER NEW */}
            <header className="header header_s header_homepage">
                <div className="mid-header wid_100">
                    <div className="container">
                        <div className="row">
                            <div className="content_header ">
                                <div className="header-main">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="logo logo_centers">
                                            <NavLink to='/' className="logo-wrapper" title="Sea Furniture">
                                                <img src={Logo} alt="logo Sea Furniture" />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="header_search header_searchs search_new">
                                            <form action="https://sea-furniture.mysapo.net/search" method="get" className="input-group search-bar hidden-sm hidden-xs" role="search">
                                                <input type="hidden" name="type" defaultValue="product" />
                                                <input type="search" name="query" placeholder="Nhập từ khóa tìm kiếm" className="input-group-field st-default-search-input search-text" />
                                                <span className="input-group-btn">
                                                    <button className="btn icon-fallback-text">
                                                        <span className="fas fa-search"></span>
                                                    </button>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="header_top">
                                            <div className="topbar_right">
                                                <div className="list-inline">
                                                    <ul className="ul-account">
                                                        <li>
                                                            <NavLink to="account/register.html" title="Đăng ký" className="account_a a_db">
                                                                <span>Đăng ký</span>
                                                            </NavLink>
                                                        </li>
                                                        <li className="line_">|</li>
                                                        <li>
                                                            <NavLink to="/" title="Đăng nhập" className="account_a a_db">
                                                                <span>Đăng nhập</span>
                                                            </NavLink>
                                                        </li>
                                                        <li className="top-cart-contain f-right">
                                                            <div className="mini-cart text-xs-center">
                                                                <div className="heading-cart cart_header">
                                                                    <NavLink className="img_hover_cart" to="cart.html" title="Giỏ hàng">
                                                                        <div className="icon_hotline visible_index">
                                                                            <i className="fas fa-dolly"></i>
                                                                            <span className="count_item count_item_pr">0</span>
                                                                        </div>
                                                                    </NavLink>
                                                                </div>
                                                                <div className="top-cart-content hidden-xs hidden-sm hidden-md">
                                                                    <ul id="cart-sidebar" className="mini-products-list count_li"><div className="no-item padding-top-20"><p>Không có sản phẩm nào trong giỏ hàng.</p></div></ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="containers">
                                    <div className="rows">
                                        <div className="wrap_main hidden-xs hidden-sm">
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 vertical-menu-home padding-small aside-vetical-menu">
                                                <div id="section-verticalmenu" className="block block-verticalmenu float-vertical float-vertical-left">
                                                    <div className="bg-vertical" />
                                                    <h4 className="block-title float-vertical-button button_gradient" onClick={() => toggleMenu()}>
                                                        <span className="verticalMenu-toggle" />
                                                        <span className="verticalMenu-text">Danh mục sản phẩm</span>
                                                    </h4>
                                                    {status ? <div className="aside-vetical-menu" id="hideMenu">
                                                        <aside className="blog-aside">
                                                            <div className="aside-content ">
                                                                <div id="verticalmenu" className="list_menu_header verticalmenu nav-category " role="navigation">
                                                                    <div className="ul nav vertical-nav ul_menu site-nav-vetical">
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Sofa">Sofa
                                          <i className="fas fa-angle-right" />
                                                                            </NavLink>
                                                                            <div className="ul_content_right_1">
                                                                                <div className="row">
                                                                                    <div className="nav_item nav-item lv2 col-lg-3 col-md-4">
                                                                                        <NavLink to="sofa-giuong.html" title="Sofa giường">Sofa giường</NavLink>
                                                                                        <div className="ul_content_right_2">
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa giường 1">Sofa giường 1</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa giường 2">Sofa giường 2</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa giường 3">Sofa giường 3</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa giường 4">Sofa giường 4</NavLink></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="nav_item nav-item lv2 col-lg-3 col-md-4">
                                                                                        <NavLink to="sofa-bang.html" title="Sofa băng">Sofa băng</NavLink>
                                                                                        <div className="ul_content_right_2">
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa băng 1">Sofa băng 1</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa băng 2">Sofa băng 2</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa băng 3">Sofa băng 3</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa băng 4">Sofa băng 4</NavLink></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="nav_item nav-item lv2 col-lg-3 col-md-4">
                                                                                        <NavLink to="sofa-don.html" title="Sofa đơn">Sofa đơn</NavLink>
                                                                                        <div className="ul_content_right_2">
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đơn 1">Sofa đơn 1</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đơn 2">Sofa đơn 2</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đơn 3">Sofa đơn 3</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đơn 4">Sofa đơn 4</NavLink></div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="nav_item nav-item lv2 col-lg-3 col-md-4">
                                                                                        <NavLink to="index.html" title="Sofa đôi">Sofa đôi</NavLink>
                                                                                        <div className="ul_content_right_2">
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đôi 1">Sofa đôi 1</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đôi 2">Sofa đôi 2</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đôi 3">Sofa đôi 3</NavLink></div>
                                                                                            <div className="nav_item nav-item lv3"><NavLink to="index.html" title="Sofa đôi 4">Sofa đôi 4</NavLink></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Ghế">Ghế
                                        </NavLink>
                                                                        </div>
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Trang trí">Trang trí
                                        </NavLink>
                                                                        </div>
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Kệ sách">Kệ sách
                                        </NavLink>
                                                                        </div>
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Bàn">Bàn
                                        </NavLink>
                                                                        </div>
                                                                        <div className="nav_item nav-item lv1 li_check">
                                                                            <div className="icon">
                                                                            </div>
                                                                            <NavLink to="/danh-muc-san-pham" title="Tủ quần áo">Tủ quần áo
                                        </NavLink>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </aside>
                                                    </div> : ''}

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                <div className="bg-header-nav hidden-xs hidden-sm ">
                                                    <div>
                                                        <div className="row row-noGutter-2">
                                                            <nav className="header-nav pull-left">
                                                                <ul className="item_big">
                                                                    <li className="nav-li nav-item ">
                                                                        <NavLink className="a-img" to="/"><span>Trang chủ</span></NavLink>
                                                                    </li>
                                                                    <li className="nav-li nav-item ">
                                                                        <NavLink className="a-img" to="/gioi-thieu"><span>Giới thiệu</span></NavLink>
                                                                    </li>
                                                                    <li className="nav-li nav-item level0 ">
                                                                        <NavLink className="a-img" to="/san-pham">
                                                                            <span>Sản phẩm</span><i className="fa fa-caret-down" />
                                                                        </NavLink>
                                                                        <ul className="item_small hidden-sm hidden-xs right-sub">
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Sofa <i className="fa fa-caret-right" /></NavLink>
                                                                                <ul>
                                                                                    <li className="nav-lis">
                                                                                        <NavLink to="/chi-tiet-san-pham" >Sofa giường</NavLink>
                                                                                    </li>
                                                                                    <li className="nav-lis">
                                                                                        <NavLink to="/chi-tiet-san-pham" >Sofa băng</NavLink>
                                                                                    </li>
                                                                                    <li className="nav-lis">
                                                                                        <NavLink to="/chi-tiet-san-pham" >Sofa đơn</NavLink>
                                                                                    </li>
                                                                                    <li className="nav-lis">
                                                                                        <NavLink to="/chi-tiet-san-pham" >Sofa đôi</NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Ghế </NavLink>
                                                                            </li>
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Trang trí </NavLink>
                                                                            </li>
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Kệ sách </NavLink>
                                                                            </li>
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Bàn </NavLink>
                                                                            </li>
                                                                            <li className="nav-lis">
                                                                                <NavLink to="/danh-muc-san-pham" >Tủ quần áo </NavLink>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="nav-li nav-item ">
                                                                        <NavLink className="a-img" to="/tin-tuc"><span>Tin tức</span></NavLink>
                                                                    </li>
                                                                    <li className="nav-li nav-item ">
                                                                        <NavLink className="a-img" to="/lien-he"><span>Liên hệ</span></NavLink>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3">
                                                <div className="topright">
                                                    <ul>
                                                        <li>
                                                            <span className="icon_style_base"><i className="fas fa-headphones" /> Hotline:</span><a className="a_topright" href="tel:0359329688">0359329688</a>
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
                </div>
                <div className="hidden-md hidden-lg">
                    <div className="menu_search_mobi button_gradient">
                        <div className="menu-bar-h nav-mobile-button hidden-md hidden-lg">
                            <i className="fas fa-bars" />
                        </div>
                        <div className="search_mobile showsearchfromtop hidden-md hidden-lg">
                            <div className="search_button_mobile">
                                <button className="btn icon-fallback-text">
                                    <span className="fas fa-search" />
                                </button>
                            </div>
                        </div>
                        <div className="searchboxlager hidden-lg">
                            <div className="searchfromtop">
                                <form action="https://sea-furniture.mysapo.net/search" method="get" autoComplete="off">
                                    <input type="text" className="form-control" maxLength={70} name="query" id="search" placeholder="Nhập từ khóa tìm kiếm và ấn enter ..." />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
