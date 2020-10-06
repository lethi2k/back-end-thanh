import React, { Component, useState, useEffect } from 'react';
import Breadcrumb from '../../../../components/client/module/Breadcrumb';
import ListCategories from '../../../../components/client/module/ListCategories';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Category = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="product-category">
            <Breadcrumb />
            <div className="container">
                <div className="row">
                    <div className="bg_collection collection_new">
                        <ListCategories />
                        <aside className="dqdt-sidebar sidebar left-content col-md-12 col-lg-3">
                            <aside className="aside-item sidebar-category collection-category">
                                <div className="aside-title heading1">
                                    <h2 className="title-head margin-top-0 margin-bottom-0"><span>Danh mục</span></h2>
                                </div>
                                <div className="aside-content aside_content_new">
                                    <nav className="nav-category navbar-toggleable-md">
                                        <ul className="nav navbar-pillss">
                                            <li className="nav-item lv1">
                                                <Link className="nav-link" to="/">Trang chủ</Link>
                                            </li><li className="nav-item lv1">
                                                <Link className="nav-link" to="/gioi-thieu">Giới thiệu</Link>
                                            </li><li className="nav-item lv1">
                                                <Link to="/collections/all" className="nav-link">Sản phẩm</Link>
                                                <i className="fa fa-angle-down" />
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-submenu nav-item lv2">
                                                        <Link className="nav-link" to="/sofa">Sofa</Link>
                                                        <i className="fa fa-angle-down" />
                                                        <ul className="dropdown-menu">
                                                            <li className="dropdown-submenu nav-item lv3">
                                                                <Link className="nav-link" to="/sofa-giuong">Sofa giường</Link>
                                                                <i className="fa fa-angle-down" />
                                                                <ul className="dropdown-menu">
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa giường 1</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa giường 2</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa giường 3</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa giường 4</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu nav-item lv3">
                                                                <Link className="nav-link" to="/sofa-bang">Sofa băng</Link>
                                                                <i className="fa fa-angle-down" />
                                                                <ul className="dropdown-menu">
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa băng 1</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa băng 2</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa băng 3</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa băng 4</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu nav-item lv3">
                                                                <Link className="nav-link" to="/sofa-don">Sofa đơn</Link>
                                                                <i className="fa fa-angle-down" />
                                                                <ul className="dropdown-menu">
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đơn 1</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đơn 2</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đơn 3</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đơn 4</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown-submenu nav-item lv3">
                                                                <Link className="nav-link" to="/">Sofa đôi</Link>
                                                                <i className="fa fa-angle-down" />
                                                                <ul className="dropdown-menu">
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đôi 1</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đôi 2</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đôi 3</Link>
                                                                    </li>
                                                                    <li className="dropdown-submenu nav-item lv4">
                                                                        <Link className="nav-link" to="/">Sofa đôi 4</Link>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item lv2">
                                                        <Link className="nav-link" to="/ghe">Ghế</Link>
                                                    </li>
                                                    <li className="nav-item lv2">
                                                        <Link className="nav-link" to="/trang-tri">Trang trí</Link>
                                                    </li>
                                                    <li className="nav-item lv2">
                                                        <Link className="nav-link" to="/ke-sach">Kệ sách</Link>
                                                    </li>
                                                    <li className="nav-item lv2">
                                                        <Link className="nav-link" to="/ban">Bàn</Link>
                                                    </li>
                                                    <li className="nav-item lv2">
                                                        <Link className="nav-link" to="/tu-quan-ao">Tủ quần áo</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item lv1">
                                                <Link className="nav-link" to="/tin-tuc">Tin tức</Link>
                                            </li><li className="nav-item lv1">
                                                <Link className="nav-link" to="/lien-he">Liên hệ</Link>
                                            </li></ul>
                                    </nav>
                                </div>
                            </aside>
                            <div className="aside-filter">
                                <div className="filter-container">
                                    <div className="filter-container__selected-filter" style={{ display: 'none' }}>
                                        <div className="filter-container__selected-filter-header clearfix">
                                            <span className="filter-container__selected-filter-header-title"><i className="fa fa-arrow-left hidden-sm-up" /> Bạn chọn</span>
                                            <Link to="#" className="filter-container__clear-all">Bỏ hết <i className="fa fa-angle-right" /></Link>
                                        </div>
                                        <div className="filter-container__selected-filter-list">
                                            <ul />
                                        </div>
                                    </div>
                                </div>
                                {/* Lọc Thương hiệu */}
                                <aside className="aside-item filter-vendor">
                                    <div className="aside-title heading1">
                                        <h2 className="title-head margin-top-0"><span>Thương hiệu</span></h2>
                                    </div>
                                    <div className="aside-content filter-group">
                                        <ul>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-aillen">
                                                        <input type="checkbox" id="filter-aillen" data-group="Hãng" data-field="vendor" data-text="Aillen" defaultValue="(Aillen)" data-operator="OR" />
                                                        <i className="fa" />
                      Aillen
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-alice">
                                                        <input type="checkbox" id="filter-alice" data-group="Hãng" data-field="vendor" data-text="ALICE" defaultValue="(ALICE)" data-operator="OR" />
                                                        <i className="fa" />
                      ALICE
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-arabica">
                                                        <input type="checkbox" id="filter-arabica" data-group="Hãng" data-field="vendor" data-text="ARABICA" defaultValue="(ARABICA)" data-operator="OR" />
                                                        <i className="fa" />
                      ARABICA
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-aurora">
                                                        <input type="checkbox" id="filter-aurora" data-group="Hãng" data-field="vendor" data-text="AURORA" defaultValue="(AURORA)" data-operator="OR" />
                                                        <i className="fa" />
                      AURORA
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-bella">
                                                        <input type="checkbox" id="filter-bella" data-group="Hãng" data-field="vendor" data-text="BELLA" defaultValue="(BELLA)" data-operator="OR" />
                                                        <i className="fa" />
                      BELLA
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-binas">
                                                        <input type="checkbox" id="filter-binas" data-group="Hãng" data-field="vendor" data-text="Binas" defaultValue="(Binas)" data-operator="OR" />
                                                        <i className="fa" />
                      Binas
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-euro">
                                                        <input type="checkbox" id="filter-euro" data-group="Hãng" data-field="vendor" data-text="Euro" defaultValue="(Euro)" data-operator="OR" />
                                                        <i className="fa" />
                      Euro
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-hobu">
                                                        <input type="checkbox" id="filter-hobu" data-group="Hãng" data-field="vendor" data-text="Hobu" defaultValue="(Hobu)" data-operator="OR" />
                                                        <i className="fa" />
                      Hobu
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-luxury">
                                                        <input type="checkbox" id="filter-luxury" data-group="Hãng" data-field="vendor" data-text="Luxury" defaultValue="(Luxury)" data-operator="OR" />
                                                        <i className="fa" />
                      Luxury
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-miso">
                                                        <input type="checkbox" id="filter-miso" data-group="Hãng" data-field="vendor" data-text="Miso" defaultValue="(Miso)" data-operator="OR" />
                                                        <i className="fa" />
                      Miso
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-poplar">
                                                        <input type="checkbox" id="filter-poplar" data-group="Hãng" data-field="vendor" data-text="Poplar" defaultValue="(Poplar)" data-operator="OR" />
                                                        <i className="fa" />
                      Poplar
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-tabu">
                                                        <input type="checkbox" id="filter-tabu" data-group="Hãng" data-field="vendor" data-text="Tabu" defaultValue="(Tabu)" data-operator="OR" />
                                                        <i className="fa" />
                      Tabu
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                <span>
                                                    <label htmlFor="filter-woody">
                                                        <input type="checkbox" id="filter-woody" data-group="Hãng" data-field="vendor" data-text="Woody" defaultValue="(Woody)" data-operator="OR" />
                                                        <i className="fa" />
                      Woody
                    </label>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                {/* End lọc Thương hiệu */}
                                {/* Lọc Loại */}
                                {/* End Lọc Loại */}
                                {/* Lọc giá */}
                                <aside className="aside-item filter-price">
                                    <div className="aside-title heading1">
                                        <h2 className="title-head margin-top-0"><span>Khoảng giá</span></h2>
                                    </div>
                                    <div className="aside-content filter-group content_price">
                                        <ul>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="100-000d" htmlFor="filter-duoi-100-000d">
                                                        <input type="checkbox" id="filter-duoi-100-000d" data-group="Khoảng giá" data-field="price_min" data-text="Dưới 100.000đ" defaultValue="(<100000)" data-operator="OR" />
                                                        <i className="fa" />
                      Giá dưới 100.000đ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="200-000d" htmlFor="filter-100-000d-200-000d">
                                                        <input type="checkbox" id="filter-100-000d-200-000d" data-group="Khoảng giá" data-field="price_min" data-text="100.000đ - 200.000đ" defaultValue="(>=100000 AND <=200000)" data-operator="OR" />
                                                        <i className="fa" />
                      100.000đ - 200.000đ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="300-000d" htmlFor="filter-200-000d-300-000d">
                                                        <input type="checkbox" id="filter-200-000d-300-000d" data-group="Khoảng giá" data-field="price_min" data-text="200.000đ - 300.000đ" defaultValue="(>=200000 AND <=300000)" data-operator="OR" />
                                                        <i className="fa" />
                      200.000đ - 300.000đ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="500-000d" htmlFor="filter-300-000d-500-000d">
                                                        <input type="checkbox" id="filter-300-000d-500-000d" data-group="Khoảng giá" data-field="price_min" data-text="300.000đ - 500.000đ" defaultValue="(>=300000 AND <=500000)" data-operator="OR" />
                                                        <i className="fa" />
                      300.000đ - 500.000đ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="1-000-000d" htmlFor="filter-500-000d-1-000-000d">
                                                        <input type="checkbox" id="filter-500-000d-1-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="500.000đ - 1.000.000đ" defaultValue="(>=500000 AND <=1000000)" data-operator="OR" />
                                                        <i className="fa" />
                      500.000đ - 1.000.000đ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                <span>
                                                    <label data-filter="1-000-000d" htmlFor="filter-tren1-000-000d">
                                                        <input type="checkbox" id="filter-tren1-000-000d" data-group="Khoảng giá" data-field="price_min" data-text="Trên 1.000.000đ" defaultValue="(>1000000)" data-operator="OR" />
                                                        <i className="fa" />
                      Giá trên 1.000.000đ
                    </label>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                {/* End Lọc giá */}
                                {/* Lọc theo Tag (Màu sắc)*/}
                                <aside className="aside-item filter-tag-style-1">
                                    <div className="aside-title heading1">
                                        <h2 className="title-head margin-top-0"><span>Màu sắc</span></h2>
                                    </div>
                                    <div className="aside-content filter-group clearfix">
                                        <ul style={{ overflow: 'visible' }}>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-vang">
                                                        <input type="checkbox" id="filter-vang" data-group="tag1" data-field="tags" data-text="Vàng" defaultValue="(Vàng)" data-operator="OR" />
                                                        <i className="fa vang" style={{ backgroundColor: '#F1C40F' }} />
                      Vàng
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-tim">
                                                        <input type="checkbox" id="filter-tim" data-group="tag1" data-field="tags" data-text="Tím" defaultValue="(Tím)" data-operator="OR" />
                                                        <i className="fa tim" style={{ backgroundColor: '#9B59B6' }} />
                      Tím
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-do">
                                                        <input type="checkbox" id="filter-do" data-group="tag1" data-field="tags" data-text="Đỏ" defaultValue="(Đỏ)" data-operator="OR" />
                                                        <i className="fa do" style={{ backgroundColor: '#E74C3C' }} />
                      Đỏ
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-xanh">
                                                        <input type="checkbox" id="filter-xanh" data-group="tag1" data-field="tags" data-text="Xanh" defaultValue="(Xanh)" data-operator="OR" />
                                                        <i className="fa xanh" style={{ backgroundColor: '#2ECC71' }} />
                      Xanh
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-hong">
                                                        <input type="checkbox" id="filter-hong" data-group="tag1" data-field="tags" data-text="Hồng" defaultValue="(Hồng)" data-operator="OR" />
                                                        <i className="fa hong" style={{ backgroundColor: '#FF00CC' }} />
                      Hồng
                    </label>
                                                </span>
                                            </li>
                                            <li className="filter-item color filter-item--check-box filter-item--green">
                                                <span>
                                                    <label htmlFor="filter-cam">
                                                        <input type="checkbox" id="filter-cam" data-group="tag1" data-field="tags" data-text="Cam" defaultValue="(Cam)" data-operator="OR" />
                                                        <i className="fa cam" style={{ backgroundColor: '#E67E22' }} />
                      Cam
                    </label>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                                {/* End Lọc theo Tag (Màu sắc)*/}
                            </div>
                        </aside>
                        <div className="main_container collection col-md-12 col-lg-9 col-md-12 padding-col-left-0">
                            <div className="category-products products f-left w_100">
                                <div className="sortPagiBar">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-6">
                                            <div className="box-heading relative">
                                                <h1 className="title-head margin-top-0">Sofa</h1>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-6 text-xs-left text-sm-right">
                                            <div className="bg-white clearfix">
                                                <div id="sort-by">
                                                    <label className="left hidden-xs">Sắp xếp theo: </label>
                                                    <ul>
                                                        <li><span className="val">Mặc định</span>
                                                            <ul className="ul_2">
                                                                <li><Link to="javascript:;">Mặc định</Link></li>
                                                                <li><Link to="javascript:;">A → Z</Link></li>
                                                                <li><Link to="javascript:;">Z → A</Link></li>
                                                                <li><Link to="javascript:;">Giá tăng dần</Link></li>
                                                                <li><Link to="javascript:;">Giá giảm dần</Link></li>
                                                                <li><Link to="javascript:;">Hàng mới nhất</Link></li>
                                                                <li><Link to="javascript:;">Hàng cũ nhất</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="products-view products-view-grid">
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Luxury">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-042bbb81b1b64e5287a9a94736f714bf-master.jpg?v=1566961266430" alt="Ghế Luxury" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15624050" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ghe-luxury" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input className="hidden" type="hidden" name="variantId" defaultValue={27167013} />
                                                                <button className="btn btn-cart btn btn-circle left-to btn_tuychon" title="Tùy chọn" type="button">
                                                                    <i className="fa fa-cogs" aria-hidden="true" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Luxury">Ghế Luxury</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">570.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Woody Pinky">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/ghe-hong-cheo-30f7d63900384e489ee1e06c11186f3d-master.jpg?v=1566961050973" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/ghe-hong-cheo-30f7d63900384e489ee1e06c11186f3d-master.jpg?v=1566961050973" alt="Ghế Woody Pinky" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623971" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ghe-woody-pinky" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166782} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Woody Pinky">Ghế Woody Pinky</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">1.250.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Woody">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/g-2-master.jpg?v=1566961002770" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/g-2-master.jpg?v=1566961002770" alt="Ghế Woody" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623967" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ghe-woody" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166778} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Woody">Ghế Woody</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">900.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Euro 02">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/profile-ghebee-den-xeo-56ae996c8c7b4fb0826bc671eb5742d9-master.png?v=1566960921607" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/profile-ghebee-den-xeo-56ae996c8c7b4fb0826bc671eb5742d9-master.png?v=1566960921607" alt="Ghế Euro 02" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623961" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ghe-euro-02" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166770} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Euro 02">Ghế Euro 02</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">750.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Ghế Euro">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-e75ada50bdb54ea99d0db5af778c40bb-master.jpg?v=1566960755693" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/2-e75ada50bdb54ea99d0db5af778c40bb-master.jpg?v=1566960755693" alt="Ghế Euro" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623949" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ghe-euro" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166755} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Ghế Euro">Ghế Euro</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">960.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Tủ giày Hobu">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-2021fed95b944be3873d99cbd3dd93ff-master.jpg?v=1566960549770" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-2021fed95b944be3873d99cbd3dd93ff-master.jpg?v=1566960549770" alt="Tủ giày Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623934" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="tu-giay-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166735} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Tủ giày Hobu">Tủ giày Hobu</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">3.100.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ TV Hobu">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/tv-d-1-master.png?v=1566960438187" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/tv-d-1-master.png?v=1566960438187" alt="Kệ TV Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623924" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ke-tv-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166722} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ TV Hobu">Kệ TV Hobu</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">400.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ đẩy Hobu">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/hobu-d-1-da4001c724d64bbba3caa56ed2be6a6e-master.png?v=1566960379253" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/hobu-d-1-da4001c724d64bbba3caa56ed2be6a6e-master.png?v=1566960379253" alt="Kệ đẩy Hobu" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623919" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ke-day-hobu" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166710} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ đẩy Hobu">Kệ đẩy Hobu</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">750.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Kệ treo Poplar">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-trang-8a897fc42fea4bcdbe3b5cb829f3b883-master.jpg?v=1566960321110" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/30-do-trang-8a897fc42fea4bcdbe3b5cb829f3b883-master.jpg?v=1566960321110" alt="Kệ treo Poplar" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623914" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="ke-treo-poplar" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166697} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Kệ treo Poplar">Kệ treo Poplar</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">500.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Tranh ảnh">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/img-5508-72a51c73445544af9dfa25fd2a38e56c-master.jpg?v=1566958949537" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/img-5508-72a51c73445544af9dfa25fd2a38e56c-master.jpg?v=1566958949537" alt="Tranh ảnh" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623807" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="tranh-anh" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166512} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Tranh ảnh">Tranh ảnh</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">2.000.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Đồng hồ Miso limited">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/sun-1-1a59cc92352c4428b72773c291f838b1-master.png?v=1566958876783" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/sun-1-1a59cc92352c4428b72773c291f838b1-master.png?v=1566958876783" alt="Đồng hồ Miso limited" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623797" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="dong-ho-miso-limited" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166477} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Đồng hồ Miso limited">Đồng hồ Miso limited</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">1.200.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-loop-1 product-loop-2 product-loop-col product-base">
                                                <div className="product-thumbnail">
                                                    <Link className="image_link display_flex" to="/chi-tiet-san-pham" title="Đồng hồ Miso">
                                                        <img src="//bizweb.dktcdn.net/thumb/large/100/364/402/products/miso-master.png?v=1566958832407" data-lazyload="//bizweb.dktcdn.net/thumb/large/100/364/402/products/miso-master.png?v=1566958832407" alt="Đồng hồ Miso" />
                                                    </Link>
                                                    <div className="product-action clearfix hidden-xs">
                                                        <form action="/cart/add" method="post" className="variants form-nut-grid" data-id="product-actions-15623791" encType="multipart/form-data">
                                                            <div className="group_action">
                                                                <Link title="Xem nhanh" to="/chi-tiet-san-pham" data-handle="dong-ho-miso" className="xem_nhanh btn-circle btn_view btn right-to quick-view hidden-xs hidden-sm hidden-md">
                                                                    <ion-icon name="eye" role="img" className="hydrated" aria-label="eye" />
                                                                </Link>
                                                                <input type="hidden" name="variantId" defaultValue={27166464} />
                                                                <button className="btn-buy btn-cart btn btn-circle left-to add_to_cart " title="Đặt hàng ngay">
                                                                    <i className="fas fa-dolly" />
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="product-info a-left">
                                                    <h3 className="product-name"><Link to="/chi-tiet-san-pham" title="Đồng hồ Miso">Đồng hồ Miso</Link></h3>
                                                    <div className="product-hideoff">
                                                        <div className="product-hide">
                                                            <div className="price-box clearfix">
                                                                <div className="special-price">
                                                                    <span className="price product-price">1.000.000₫</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <nav className="clearfix nav_pagi f-left w_100">
                                            <ul className="pagination clearfix">
                                                <li className="page-item disabled"><Link className="page-link" to="#"><i className="fas fa-caret-left" /></Link></li>
                                                <li className="active page-item disabled"><Link className="page-link" to="javascript:;">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="javascript:;">2</Link></li>
                                                <li className="page-item hidden-xs"><Link className="page-link" to="javascript:;"><i className="fas fa-caret-right" />
                                                </Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
