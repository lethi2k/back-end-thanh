import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Filter = () => {
    return (
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
    )
}

export default Filter
